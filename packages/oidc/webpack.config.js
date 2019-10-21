let path = require('path')
let merge = require('webpack-merge')

let baseConfig = {
    mode: 'production',
    output: {
        path: path.join(__dirname, '../../dist/oidc'),
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
    },
    resolve: {
        alias: {
            'oidc-client': 'oidc-client/lib/oidc-client.rsa256.min.js'
        }
    }
})

module.exports = [MainConfig]
