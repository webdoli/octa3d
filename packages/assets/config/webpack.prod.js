const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const domain = 'https://octa3d-assets.web.app/';


const prodConfig = {

    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: `${ domain }`
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'assets',
            filename: 'remoteEntry.js',
            exposes: {
                './Assets': './src/bootstrap'
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

module.exports = merge( commonConfig, prodConfig );