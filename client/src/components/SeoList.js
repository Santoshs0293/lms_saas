import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import SideBar from "../pages/AdminDashBoard/SideBar";

const SeoList = ({ seoEntries, fetchSeoEntries }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEntry, setCurrentEntry] = useState(null);
  const [updatedEntry, setUpdatedEntry] = useState({ title: '', description: '', keywords: [], author: '' });

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/api/seo/${id}`);
      fetchSeoEntries();
    } catch (error) {
      console.error('Error deleting SEO entry', error);
    }
  };

  const handleEdit = (entry) => {
    setCurrentEntry(entry);
    setUpdatedEntry(entry);
    setIsModalOpen(true);
  };

  const handleUpdate = async () => {
    try {
      await axiosInstance.put(`/api/seo/${currentEntry._id}`, updatedEntry);
      fetchSeoEntries();
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error updating SEO entry', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEntry({
      ...updatedEntry,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="row" id="deleteTableItem">
        <div className="col-md-12">

              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Title</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Keywords</TableCell>
                      <TableCell>Author</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Array.isArray(seoEntries) && seoEntries.length > 0 ? (
                      seoEntries.map((entry) => (
                        <TableRow key={entry._id}>
                          <TableCell>{entry.title}</TableCell>
                          <TableCell>{entry.description}</TableCell>
                          <TableCell>{entry.keywords.join(', ')}</TableCell>
                          <TableCell>{entry.author}</TableCell>
                          <TableCell>
                            <Button onClick={() => handleEdit(entry)}>Edit</Button>
                            <Button onClick={() => handleDelete(entry._id)}>Delete</Button>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={5} align="center">
                          No SEO entries available.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>

              <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <DialogTitle>Edit SEO Entry</DialogTitle>
                <DialogContent>
                  <DialogContentText>Edit the details of the SEO entry.</DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    name="title"
                    label="Title"
                    type="text"
                    fullWidth
                    value={updatedEntry.title}
                    onChange={handleChange}
                  />
                  <TextField
                    margin="dense"
                    name="description"
                    label="Description"
                    type="text"
                    fullWidth
                    value={updatedEntry.description}
                    onChange={handleChange}
                  />
                  <TextField
                    margin="dense"
                    name="keywords"
                    label="Keywords"
                    type="text"
                    fullWidth
                    value={updatedEntry.keywords.join(', ')}
                    onChange={(e) =>
                      setUpdatedEntry({
                        ...updatedEntry,
                        keywords: e.target.value.split(', '),
                      })
                    }
                  />
                  <TextField
                    margin="dense"
                    name="author"
                    label="Author"
                    type="text"
                    fullWidth
                    value={updatedEntry.author}
                    onChange={handleChange}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setIsModalOpen(false)} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handleUpdate} color="primary">
                    Update
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
        </div>
      
  );
};

SeoList.propTypes = {
  seoEntries: PropTypes.array.isRequired,
  fetchSeoEntries: PropTypes.func.isRequired,
};

export default SeoList;
