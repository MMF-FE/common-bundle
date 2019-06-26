let path = require('path')
let merge = require('webpack-merge')

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
    },
    resolve: {}
}

// 主包配置
let MainConfig = merge({}, baseConfig, {
    entry: './lib/index.js',
    output: {
        filename: 'index.js'
    }
})

// xlsx 配置
let XlsxConfig = merge({}, baseConfig, {
    entry: './lib/xlsx.js',
    output: {
        filename: 'xlsx.js'
    },
    resolve: {
        alias: {
            xlsx: 'xlsx/dist/xlsx.js'
        }
    }
})

module.exports = [MainConfig, XlsxConfig]
