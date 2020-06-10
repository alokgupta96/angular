const express = require('express');
const app = express();
const fallback = require('express-history-api-fallback');
let root = 'dist/ems';
app.use(express.static(root)).use(fallback('index.html', {root}));
const PORT = 3023;
app.listen(PORT, ()=>{
  console.log('connected...'+PORT);  
})