import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StudentDetailModal = ({ show, handleClose, student }) => {
  const [roomCount, setRoomCount] = useState(null);
  const [data, setData] = useState([]);
  const [languageUsage, setLanguageUsage] = useState({});
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  useEffect(() => {
    if (student) {
      fetchRoomCount(student._id);
      fetchCodes(student._id);
    }
  }, [student]);

  const fetchRoomCount = async (userId) => {
    try {
      const response = await axiosInstance.get(`/room/api/rooms/count?userId=${userId}`);
      setRoomCount(response.data.count);
    } catch (error) {
      console.error('Error fetching room count:', error);
      setRoomCount(null);
    }
  };

  const fetchCodes = async (userId) => {
    try {
      const token = localStorage.getItem('auth_token');
      const response = await axiosInstance.get(`/api/code/${userId}`, {
        headers: {
          Authorization: "Bearer " + token,
        }
      });
      setData(response.data.codes);
      setLanguageUsage(response.data.codes.reduce((acc, row) => {
        if (!acc[row.language]) {
          acc[row.language] = 0;
        }
        acc[row.language]++;
        return acc;
      }, {}));
      console.log('response', response, response.data.codes);
    } catch (error) {
      console.error("Error fetching codes:", error);
    }
  };

  const getStatus = (output) => {
    if (!output) return "No Output";
    if (/error/i.test(output)) return "Error";
    return "Success";
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

  const languageUsageChartData = {
    labels: Object.keys(languageUsage),
    datasets: [
      {
        label: 'Language Usage',
        data: Object.values(languageUsage),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Student Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Username:</strong> {student.userName}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Number of Room Created:</strong> {roomCount !== null ? roomCount : "No room created"}</p>
        <p><strong>Role:</strong> {student.role}</p>

        <div className="mt-4">
          <h5>Code Details</h5>
          <div className="table-responsive-lg text-center">
            <table className="table">
              <thead className="text-center">
                <tr>
                  <th><strong>Language</strong></th>
                  <th className="text-center"><strong>Code</strong></th>
                  <th style={{ width: '15%' }}><strong>Output</strong></th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
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

        <div className="mt-4">
          <h5>Output Status</h5>
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

        <div className="mt-4">
          <h5>Number of Codes per User</h5>
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

        <div className="mt-4">
          <h5>Language Usage</h5>
          <Bar
            data={languageUsageChartData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Language Usage',
                },
              },
            }}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default StudentDetailModal;
