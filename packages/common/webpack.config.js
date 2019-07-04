let path = require('path')
let merge = require('webpack-merge')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')

let baseConfig = {
    mode: 'production',
    output: {
        path: path.join(__dirname, '../../dist/common'),
        libraryTarget: 'window'
    },
    node: {
        setImmediate: false,
        process: false,
        Buffer: false,
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    }
}

// 主包配置
let MainConfig = merge({}, baseConfig, {
    entry: './lib/index.js',
    output: {
        filename: 'index.js'
    },
    resolve: {},
    module: {},
    plugins: [
        new MomentLocalesPlugin({
            localesToKeep: ['zh-cn', 'zh-hk', 'zh-tw']
        })
    ]
})

module.exports = [MainConfig]
