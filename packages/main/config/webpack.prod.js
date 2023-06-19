const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
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
                marketing: `assets@${assetsDomain}/remoteEntry.js`
            },
            shared: packageJson.dependencies,
        }),
    ]

}

module.exports = merge( commonConfig, prodConfig );