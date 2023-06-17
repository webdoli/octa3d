const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
//const packageJson = require('../package.json');
//const tmpDomain = 'https://octa3d-439a2.web.app/';

const prodConfig = {

    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/'
    },
    plugins: [

    ]

}

module.exports = merge( commonConfig, prodConfig );