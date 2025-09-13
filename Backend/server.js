require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const { handleChatRequest } = require('./chatController');

const app = express();
app.use(bodyParser.json());

app.post('/api/chat', handleChatRequest);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
