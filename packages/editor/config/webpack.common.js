const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test:/\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]

}