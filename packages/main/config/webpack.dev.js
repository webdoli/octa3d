const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const devConfig = {

    mode: 'development',
    output: {
        publicPath: 'auto',
    },
    devServer: {
        port: 8080,
        historyApiFallback: true
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'main',
            remotes: {
                assets:'assets@http://localhost:8081/remoteEntry.js',
                editor:'editor@http://localhost:8082/remoteEntry.js'
            },
            shared: packageJson.dependencies,
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