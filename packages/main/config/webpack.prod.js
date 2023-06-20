const { merge } = require('webpack-merge');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const CopyPlugin = require('copy-webpack-plugin');

const assetsDomain = 'https://octa3d-assets.web.app/';

const prodConfig = {

    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                assets: `assets@${assetsDomain}/remoteEntry.js`
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

module.exports = merge( commonConfig, prodConfig )