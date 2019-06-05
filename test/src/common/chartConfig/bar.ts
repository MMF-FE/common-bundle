/**
 * 柱状图默认配置
 */

 // 颜色
 import chartColors from './colors'

 export default {
    color: chartColors,
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
        padding: [5, 10],
        backgroundColor: '#1F2D3D'
    },
    xAxis: {
        name: '',
        nameTextStyle: {
            color: '#5B697B',
            fontSize: 13,
            verticalAlign: 'bottom',
            padding: [20, 0, 0, 0]
        },
        nameLocation: 'start',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#475669',
                fontSize: 12
            }
        },
        splitLine: {
            lineStyle: {
                color: ['#D3DCE6'],
                opacity: 0.5
            }
        }
    },
    yAxis: {
        data: [],
        axisLabel: {
            margin: 15,
            textStyle: {
                color: '#5B697B',
                fontSize: 13
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        z: 10
    },
    series: [{
        type: 'bar',
        name: '',
        barWidth: 12,
        data: []
    }],
}
