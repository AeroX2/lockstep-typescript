const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'inline-source-map',
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    keep_fnames: /.*Packet/,
                    keep_classnames: /.*Packet/
                }
            })
        ]
    }
});
