const webpack = require( 'webpack' )
const path = require( 'path' )
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const production = process.env.NODE_ENV === 'production' ? '.min' : ''

const alias = {
    elements: path.resolve( __dirname, 'src/elements' )
}

module.exports = {
    watch: true,
    mode: 'development',
    entry: {
        test: './src/elements/index.js'
    },
    output: {
        path: path.resolve( __dirname, 'build' ),
        filename: '[name].bundle' + production + '.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 9000
    },
    resolve: {
        alias
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ]
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			}
		]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css',
        }),
    ]
}
