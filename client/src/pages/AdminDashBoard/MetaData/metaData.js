import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../SideBar';

const EditMetadataPage = () => {
  const [metadata, setMetadata] = useState([]);

  useEffect(() => {
    fetchMetadata();
  }, []);

  const fetchMetadata = () => {
    axios.get('http://localhost:5000/metadata')
      .then(response => setMetadata(response.data))
      .catch(error => console.error('Error fetching metadata:', error));
  };

  const handleChange = (e, id) => {
    const updatedMetadata = metadata.map(entry => {
      if (entry._id === id) {
        return { ...entry, [e.target.name]: e.target.value };
      }
      return entry;
    });
    setMetadata(updatedMetadata);
  };

  const handleAddEntry = () => {
    setMetadata([...metadata, { _id: `temp_${Date.now()}`, title: '', description: '', keywords: '' }]);
  };

  const handleRemoveEntry = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this entry?');
    if (confirmed) {
      const updatedMetadata = metadata.filter(entry => entry._id !== id);
      setMetadata(updatedMetadata);
      if (!id.startsWith('temp_')) {
        axios.delete(`http://localhost:5000/metadata/${id}`)
          .then(response => {
            console.log('Metadata entry deleted successfully');
            window.alert('Metadata entry deleted successfully');
          })
          .catch(error => console.error('Error deleting metadata entry:', error));
      } else {
        window.alert('Temporary entry deleted successfully');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const confirmed = window.confirm('Are you sure you want to submit these changes?');
    if (confirmed) {
      metadata.forEach(entry => {
        console.log('Submitting entry:', entry); // Log the data structure
        if (entry._id.startsWith('temp_')) {
          axios.post('http://localhost:5000/metadata', entry)
            .then(response => console.log('Metadata created successfully'))
            .catch(error => console.error('Error creating metadata:', error));
        } else {
          axios.put(`http://localhost:5000/metadata/${entry._id}`, entry)
            .then(response => console.log('Metadata updated successfully'))
            .catch(error => console.error('Error updating metadata:', error));
        }
      });
      window.alert('Metadata submitted successfully');
    }
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
                    <li className="breadcrumb-item"><a href="">Dashboard</a></li>
                    <li className="breadcrumb-item"><a href="">Meta Data</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Create</li>
                  </ol>
                </nav>
              </div>
              <div className="row" id="deleteTableItem">
                <div className="col-md-12">
                  <div className="main-card card d-flex h-100 flex-column">
                    <div className="card-body">
                      <h5 className="card-title py-2">Create Meta Data</h5>
                      <form onSubmit={handleSubmit}>
                        {metadata.map(entry => (
                          <div key={entry._id}>
                            <div className="row">
                              <div className="col-4">
                                <div className="mb-3">
                                  <label className="form-label">Meta Data Title</label>
                                  <input
                                    name='title'
                                    value={entry.title}
                                    onChange={(e) => handleChange(e, entry._id)}
                                    required
                                    className="form-control"
                                    placeholder="Enter Title"
                                  />
                                </div>
                              </div>
                              <div className="col-4">
                                <div className="mb-3">
                                  <label className="form-label">Meta Data Description</label>
                                  <input
                                    name="description"
                                    value={entry.description}
                                    onChange={(e) => handleChange(e, entry._id)}
                                    required
                                    className="form-control"
                                    placeholder="Enter Description"
                                  />
                                </div>
                              </div>
                              <div className="col-4">
                                <div className="mb-3">
                                  <label className="form-label">Meta Data Keywords</label>
                                  <input
                                    name="keywords"
                                    value={entry.keywords}
                                    onChange={(e) => handleChange(e, entry._id)}
                                    required
                                    className="form-control"
                                    placeholder="Enter Keywords"
                                  />
                                </div>
                              </div>
                            
                            </div>
                          </div>
                        ))}
                        <button type="button" className="btn bgBlue btn-dipBlue text-black mt-4 m-2" onClick={handleAddEntry}>Add</button>
                        <button type="submit" className="btn bgBlue btn-dipBlue text-black mt-4 m-2">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" id="deleteTableItem">
                <div className="col-md-12">
                  <div className="card mb-5">
                    <div className="card-body">
                      <div className="table-responsive-lg">
                        <table id="dataTable" className="table text-center">
                          <thead>
                            <tr className="text-center">
                              <th><strong>Title</strong></th>
                              <th><strong>Description</strong></th>
                              <th><strong>Keywords</strong></th>
                              <th><strong>Action</strong></th>
                            </tr>
                          </thead>
                          <tbody>
                            {metadata.map(entry => (
                              <tr key={entry._id}>
                                <td>{entry.title}</td>
                                <td>{entry.description}</td>
                                <td>{entry.keywords}</td>
                                <td>
                                  <button type="button" onClick={() => handleRemoveEntry(entry._id)} className="btn bgBlue btn-dipBlue text-black">Delete</button>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditMetadataPage;
