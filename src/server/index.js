import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackConfig from '../../webpack.config-front';

// Routers
import frontRouter from './routers/frontRouter';
import apiRouter from './routers/apiRouter';

const app = express();
const port = 3000;
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
    noInfo: false, publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static(path.join(__dirname, "../dist")));

app.use("/api", apiRouter(express.Router()));
app.get("/*", frontRouter);

app.listen(port);

export default app;