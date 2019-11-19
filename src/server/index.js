import express from 'express';
import path from 'path';
import morgan from 'morgan';

// Routers
import frontRouter from './routers/frontRouter';
import apiRouter from './routers/apiRouter';

const app = express();
const port = process.env.PORT_WEB || 3000;

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, "../dist")));

app.use("/api", apiRouter(express.Router()));
app.get("/*", frontRouter);

app.listen(port);

export default app;