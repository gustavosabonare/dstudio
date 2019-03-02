import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import router from './router';
import webpackConfig from '../../webpack.config-front';


const app = express();
const port = 3000;
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
    noInfo: false, publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static(path.join(__dirname, "../dist")));

app.get("/*", router);

app.listen(port);

export default app;