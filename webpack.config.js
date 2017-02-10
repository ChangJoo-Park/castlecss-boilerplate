var webpack = require('webpack');

module.exports = {
    entry: "./js/scripts.js",
    output: {
        path: __dirname+'/dist/js',
        filename: "scripts.min.js"
    },
    plugins: [
    	new webpack.optimize.UglifyJsPlugin()
    ]
};