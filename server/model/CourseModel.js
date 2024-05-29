const mongoose = require("mongoose");


const courseSchema = mongoose.Schema(

  
  {
    courseName: {
      type: String,
      
    },
    courseDescription: {
      type: String,
      
    },

    courseThumbnail: {
      type: String,
     
    },

    courseLink :{
      type: String,
     
    },
    coursePrice : {
      type: Number,
 
    },

    coursePdf: {
      type: String,
    
    },

    role:{
      type: String,
 
  },

  
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
},
lectures: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lecture'
  }
],
  },
  {
    timestamps: true,
  }
);



const CourseModel = mongoose.model("Course", courseSchema);

module.exports = CourseModel;