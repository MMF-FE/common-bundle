require('../../../dist/vue2/index')
require('../../../dist/vue2/vue-echarts')

describe('测试 vue2', () => {
    test('所有的包都应该在 window 里面', () => {
        expect(window).toHaveProperty('Vue')
        expect(window).toHaveProperty('Vuex')
        expect(window).toHaveProperty('VueRouter')
        expect(window).toHaveProperty('VueLazyLoad')
        expect(window).toHaveProperty('VueClassComponent')
        expect(window).toHaveProperty('VuePropertyDecorator')
        expect(window).toHaveProperty('VueSvgIcon')
        expect(window).toHaveProperty('Echarts')
    })
})
