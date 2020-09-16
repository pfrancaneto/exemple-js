const express = require('express');
const server = express();

server
.use(express.static("public"))

.get('/', (req, res) => {
  return res.sendFile(__dirname + "/views/index.html")
})

.get('/classes', (req, res) => {
  return res.sendFile(__dirname + "/views/classes.html")
})
  
.listen(3300, () => {
  console.log('🚀 ⛱ server running'); 
})