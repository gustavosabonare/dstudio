import express from 'express';
import router from './router';
import path from 'path';
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "../dist")));

app.get("/*", router);

app.listen(port);

export default app;