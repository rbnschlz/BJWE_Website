var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var LessPluginCleanCSS = require('less-plugin-clean-css');

const ExtractScreenCSS = new ExtractTextPlugin({ filename: "../css/main.css" });


module.exports = {
	context: __dirname + "/assets",
	entry: './js/input.js',
	output: {
		path: __dirname + '/assets/js',
		filename: 'output.js'
	},

	module: {
        loaders: [
            { test: /\.less$/, loader: ExtractScreenCSS.extract({
                fallbackLoader: "style-loader",
                loader: "css?minimize!postcss!less"
            }) },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
            	loader: "url-loader?limit=10000&mimetype=application/font-woff" },
			{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
				loader: "file-loader" }
        ]
    },

    plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			_: "lodash"
		}),

		new webpack.optimize.LimitChunkCountPlugin({maxChunks: 0}),

		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			output: {
			    comments: false
			},
		}),

		ExtractScreenCSS
	],
};



