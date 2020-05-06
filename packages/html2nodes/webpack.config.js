let path = require('path')
let merge = require('webpack-merge')

let baseConfig = {
    mode: 'production',
    output: {
        path: path.join(__dirname, '../../dist/html2nodes'),
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
    entry: './src/Parser.js',
    output: {
        filename: 'index.js'
    }
})

module.exports = [MainConfig]
