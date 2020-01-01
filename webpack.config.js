const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    resolve: {
        extensions: ['.js', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/react', '@babel/typescript']
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin()]
};