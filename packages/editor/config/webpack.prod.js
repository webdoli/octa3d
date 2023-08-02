const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const domain = 'https://octa3d-editor.web.app/';


const prodConfig = {

    mode: 'production',
    // entry: './src/index.js',
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
    ],
    output: {
        filename: '[name].[contenthash].js',
        publicPath: `${ domain }`
    }

}

module.exports = merge( commonConfig, prodConfig );