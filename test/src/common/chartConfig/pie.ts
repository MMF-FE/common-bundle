/**
 * 饼图默认配置
 */

// 颜色
import chartColors from './colors'

// 半径
const radius = ['30%', '70%']

// label
const baseLabel = {
    normal: {
        formatter: '{b}: {d}%',
        textStyle: {
            fontSize: 13,
            color: '#475669'
        }
    }
}

const baseLabelLine = {
    normal: {
        lineStyle: {
            color: '#E0E6ED'
        }
    }
}

const config = {
    color: chartColors,
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
        padding: [5, 10],
        backgroundColor: '#1F2D3D'
    },
    legend: {
        data: [],
        show: false
    },
    series: [
        {
            type: 'pie',
            radius: radius,
            data: [],
            label: baseLabel,
            labelLine: baseLabelLine
        }
    ]
}

export default config
