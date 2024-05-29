import { GET__COURSES, UPDATE_COURSE_LECTURES } from "./courseTypes";
import axios from "axios";

export const getCourses = (courseInfo) => {
  console.log(courseInfo)
  return {
    type: GET__COURSES,
    payload: courseInfo,
  };
};


export const fetchAllCourseInfo = () => {
  return (dispatch) => {
    const axiosInstance = axios.create({baseURL : process.env.REACT_APP_API_URL})
    axiosInstance.get("/get-data-courses", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("auth_token"),
      },
    })
      .then((result) => {
        dispatch(getCourses(result.data.courses));
        console.log(result.data.courses)
        
      })
      .catch((err) => {
        console.log(err);
      });
  
  };
};
export const fetchCourseInfo = (userId) => {
  return (dispatch) => {
    const axiosInstance = axios.create({baseURL : process.env.REACT_APP_API_URL})
    axiosInstance.get(`/get-teacher-courses/${userId}`, { // Changed quotes to backticks
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: "Bearer " + localStorage.getItem("auth_token"),
      },
    })
      .then((result) => {
        dispatch(getCourses(result.data.courses));
        console.log(result.data.courses)
      })
      .catch((err) => {
        console.log(err);
      });
  };
};



export const deleteCourseItem = (courseId) => {
  return (dispatch) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });
      try {
        axiosInstance.delete("/delete", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("auth_token"),
            "Content-Type": "application/json",
          },
          data: {
            courseId
          }
        })
        .then(() => {
          dispatch(fetchCourseInfo());
          alert("Course deleted successfully");
        })
        .catch((err) => {
          console.log(err);
        });
      } catch (err) {
        console.log(err);
      }
    }
  };
};




