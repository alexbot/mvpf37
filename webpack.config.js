var path = require('path');
var APP_DIR = path.resolve(__dirname, 'components');

module.exports = {
    entry: APP_DIR + '/app.jsx',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react', 'stage-2']
            }
        }]
    },
};