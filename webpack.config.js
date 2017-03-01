var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
    entry: './main.js',

    output: {
        path: './',
        filename: 'index.js',
    },

    devServer: {
        inline: true,
        port: 8080
    },

    resolve: {
        extensions: ['', '.js', '.styl', '.css']
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }        
        }, {
            test: /\.css$/,
            loader: 'style!css!autoprefixer?browsers=last 2 versions'
        }, {
            test: /\.styl$/,
            loader: 'style!css!autoprefixer?browsers=last 2 versions!stylus?resolve url'        
        }, {
            test: /\.(png|jpg)$/,
            loader: 'file-loader'        
        },]    
    },

    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
}

module.exports = config;
