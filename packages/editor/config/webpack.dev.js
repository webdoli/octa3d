const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const devConfig = {

    mode: 'development',
    output: {
        publicPath: 'http://localhost:8082/'
    },
    devServer: {
        port: 8082,
        historyApiFallback: true
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'editor',
            filename: 'remoteEntry.js',
            exposes: {
                './Editor': './src/bootstrap'
            },
            shared: packageJson.dependencies
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve('static')
                }
            ]
        })
    ]

}

module.exports = merge( commonConfig, devConfig );