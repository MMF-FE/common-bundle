require('../dist/index')
require('../dist/vue-echarts')

describe('测试 yzt vue2', () => {
    test('所有的包都应该在 window 里面', () => {
        expect(window).toHaveProperty('__YZT_Vue')
        expect(window).toHaveProperty('__YZT_Vuex')
        expect(window).toHaveProperty('__YZT_VueRouter')
        expect(window).toHaveProperty('__YZT_VueLazyLoad')
        expect(window).toHaveProperty('__YZT_VueClassComponent')
        expect(window).toHaveProperty('__YZT_VuePropertyDecorator')
        expect(window).toHaveProperty('__YZT_VueECharts')
    })
})
