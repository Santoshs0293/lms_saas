const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { MONGO_URI, SECRET_KEY } = require("./config/keys");
const shortid = require('shortid');
require('dotenv').config();
const http = require('http');
const socketIo = require('socket.io');


// Middleware
app.use("/uploads", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/auth", require("./routes/authRoute"));
app.use("/", require("./routes/courseRoute"));
app.use("/users", require("./routes/userRoute"));
app.use("/enroll-course", require("./routes/enrollRoute"));
app.use("/cart", require("./routes/cartRoutes"));
app.use("/api", require("./routes/codeRoute"));
app.use('/metadata', require("./routes/metadataRoute"));
app.use("/blockly", require("./routes/BlocklyRoute"));
app.use('/api', require("./routes/BlocklyRoute"));

app.post('/api/run', async (req, res) => {
  const { userId, code, language } = req.body;
  const output = await monacoEdit(language, code);
  const codeRecord = new Blockly({ userId, generatedCode: code, output }); // Changed to Blockly model
  await codeRecord.save();
  res.send({ output });
});

const monacoEdit = async (language, code) => {
  try {
    // eslint-disable-next-line no-eval
    const result = eval(code);
    return result.toString();
  } catch (error) {
    return error.toString();
  }
};



// Deploy
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Database and server setup
const PORT = process.env.PORT || 5000;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Database connected...");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
    console.log("Error occurred");
  });


  
  const server = http.createServer(app);
  const io = socketIo(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });
  
  io.on('connection', (socket) => {
    console.log('New client connected');
  
    socket.on('workspace-change', (data) => {
      socket.broadcast.emit('workspace-change', data);
    });
  
    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
  
  server.listen(4000, () => console.log('Server is running on port 4000'));