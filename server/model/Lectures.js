const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  videoUrl: { type: String},
  pdfUrl : {type: String},
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
   
},
 
});


const LectureModel = mongoose.model("Lecture", lectureSchema);

module.exports = LectureModel;