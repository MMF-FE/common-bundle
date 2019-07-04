let path = require('path')
let merge = require('webpack-merge')

let baseConfig = {
    mode: 'production',
    output: {
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
    },
    resolve: {
        alias: {}
    }
}

// 主包配置
let MainConfig = merge({}, baseConfig, {
    entry: './lib/index.js',
    output: {
        filename: 'index.js'
    }
})

module.exports = [MainConfig]
