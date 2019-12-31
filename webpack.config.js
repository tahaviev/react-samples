const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/react']
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin()]
};