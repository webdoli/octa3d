const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const CopyPlugin = require('copy-webpack-plugin');

const devConfig = {

    mode: 'development',
    output: {
        publicPath: 'http://localhost:8080/'
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
            },
            shared: packageJson.dependencies,
        }),
        // new CopyPlugin({
        //     patterns: [
        //         {
        //             from: path.resolve('src/img/*'),
        //             to: path.resolve('dist'),
        //             context: 'src',
        //         }
        //     ]
        // })
    ]

}

module.exports = merge( commonConfig, devConfig );