const express = require('express');
const app = express();

app.get('/healthz', require('./endpoints/healthz'));

app.listen(8000);
