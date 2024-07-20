import React, { useEffect, useState } from "react";
import Sidebar from '../SideBar';
import axios from "axios";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Student = () => {
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState(null);
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });
  const userId = userData ? userData._id : null;
  const username = userData?.userName;
  const activity = userData?.role;
  const email = userData?.email;




  useEffect(() => {
    const userDataFromStorage = localStorage.getItem('user');
    console.log('Retrieved from storage:', userDataFromStorage); // This will show exactly what is being retrieved

    if (userDataFromStorage) {
        try {
            const parsedData = JSON.parse(userDataFromStorage);
            setUserData(parsedData);
        } catch (error) {
            console.error('Failed to parse user data:', error); // This will log parsing errors, if any
        }
    }
}, []);

  useEffect(() => {
    const fetchCodes = async () => {
      try {
        const token = localStorage.getItem('auth_token');
        const response = await axiosInstance.get("/api/code", {
          headers: {
            Authorization: "Bearer " + token,
          }
        });
        setData(response.data.codes); // Set the fetched data into state
      } catch (error) {
        console.error("Error fetching codes:", error);
      }
    };

    fetchCodes();
  }, []);

  const getStatus = (output) => {
    if (!output) return "No Output";
    if (/error/i.test(output)) return "Error";
    return "Success";
  };

  const [roomCount, setRoomCount] = useState(null);
  const fetchRoomCount = async (userId) => {
    try {
      const response = await axiosInstance.get(`/room/api/rooms/count?userId=${userId}`);
      setRoomCount(response.data.count);
    } catch (error) {
      console.error('Error fetching room count:', error);
      setRoomCount(null);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchRoomCount(userId);
    }
  }, [userId]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const outputStatusData = data.reduce((acc, row) => {
    const status = getStatus(row.output);
    if (!acc[status]) {
      acc[status] = 0;
    }
    acc[status]++;
    return acc;
  }, {});

  const userCodeCount = data.reduce((acc, row) => {
    if (!acc[row.user]) {
      acc[row.user] = 0;
    }
    acc[row.user]++;
    return acc;
  }, {});

  const outputStatusChartData = {
    labels: Object.keys(outputStatusData),
    datasets: [
      {
        label: 'Output Status',
        data: Object.values(outputStatusData),
        backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 206, 86, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const userCodeCountChartData = {
    labels: Object.keys(userCodeCount),
    datasets: [
      {
        label: 'Number of Codes',
        data: Object.values(userCodeCount),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header" id="appContent">
        <div className="app-main">
          <Sidebar />
          <div className="app-main-outer">
            <div className="app-main-inner">
              <div className="page-title-actions px-3 d-flex">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Dashboard</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Enrollment</li>
                  </ol>
                </nav>
              </div>
              <div className="row" id="deleteTableItem">
              <div className="row" id="outputStatusTable">
                <div className="col-md-12">
                  <div className="card mb-5">
                    <div className="card-body">
                      <div className="table-responsive-lg">
                        <table id="dataTable" className="table text-center" >
                          <thead>
                            <tr >
                            <th><strong>UserName</strong></th>
                            <th><strong>User Email</strong></th>
                              <th><strong>Number of Room Created</strong></th>
                              <th><strong>Role</strong></th>

                            </tr>
                          </thead>
                          <tbody>
                           
                          <td> {username}</td>
                          <td> {email}</td>
                                <td className="tableId">               {roomCount !== null ? (
        <p> {roomCount}</p>
      ) : (
        <p>no room created</p>
      )}</td>
       <td className="tableId"><span></span> {activity}</td>
  
                       
                         
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                <div className="col-md-12">
                  <div className="card mb-5">
                    <div className="card-body">
                   
                      <div className="table-responsive-lg text-center">
                        
                        <table id="dataTable" className="table">
                          <thead className="text-center">
                            <tr>
                       
                              <th><strong>Language</strong></th>
                              <th className="text-center"><strong>Code</strong></th>
                              <th style={{ width: '15%' }}><strong>Output</strong></th>
                        
                            </tr>
                          </thead>
                          <tbody>
                            {(rowsPerPage > 0
                              ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                              : data
                            ).map((row) => (
                              <tr key={row._id}>
                            
                          
                                <td className="tableCustomar">
                                  <span className="badge rounded-pill text-bg-success">{row.language}</span>
                                </td>
                                <td className="tableId"><span></span> {row.code}</td>
                                <td className="tableStatus">
                                  <div className="statusItem">
                                    <div></div>
                                    <div>
                                      <span>{row.output}</span>
                                    </div>
                                  </div>
                                </td>
                               
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" id="outputStatusTable">
                <div className="col-md-12">
                  <div className="card mb-5">
                    <div className="card-body">
                      <div className="table-responsive-lg">
                        <table id="dataTable" className="table">
                          <thead>
                            <tr>
                       
                              <th><strong>Output</strong></th>
                              <th><strong>Status</strong></th>
                            </tr>
                          </thead>
                          <tbody>
                            {(rowsPerPage > 0
                              ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                              : data
                            ).map((row) => (
                              <tr key={row._id}>
                           
                                <td className="tableId">{row.output}</td>
                                <td className="tableId">{getStatus(row.output)}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" id="charts">
                <div className="col-md-6">
                  <div className="card mb-5">
                    <div className="card-body">
                      <Bar
                        data={outputStatusChartData}
                        options={{
                          responsive: true,
                          plugins: {
                            legend: {
                              position: 'top',
                            },
                            title: {
                              display: true,
                              text: 'Output Status',
                            },
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card mb-5">
                    <div className="card-body">
                      <Bar
                        data={userCodeCountChartData}
                        options={{
                          responsive: true,
                          plugins: {
                            legend: {
                              position: 'top',
                            },
                            title: {
                              display: true,
                              text: 'Number of Codes per User',
                            },
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
          
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
