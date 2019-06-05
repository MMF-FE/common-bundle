let path = require('path')
let merge = require('webpack-merge')

let baseConfig = {
    mode: 'production',
    output: {
        path: path.join(__dirname, './dist'),
        libraryTarget: 'commonjs'
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
    entry: './src/index.js',
    output: {
        filename: 'index.js'
    }
})

// vue-echarts 配置
let VueEchartsConfig = merge({}, baseConfig, {
    entry: './src/vue-echarts.js',
    output: {
        filename: 'vue-echarts.js'
    },
    resolve: {
        alias: {
            'vue-echarts': 'vue-echarts/dist/vue-echarts.js'
        }
    }
})

// xlsx 配置
let XlsxConfig = merge({}, baseConfig, {
    entry: './src/xlsx.js',
    output: {
        filename: 'xlsx.js'
    },
    resolve: {
        alias: {
            xlsx: 'xlsx/dist/xlsx.js'
        }
    }
})

module.exports = [MainConfig, VueEchartsConfig, XlsxConfig]
