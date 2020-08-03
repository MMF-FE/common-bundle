require('../../../dist/yzt-common/index')

describe('测试 yzt 通用包', () => {
    test('所有的包都应该在 window 里面', () => {
        expect(window).toHaveProperty('Dayjs')
        expect(window).toHaveProperty('Axios')
        expect(window).toHaveProperty('Cookies')
        expect(window).toHaveProperty('Lodash')
        expect(window).toHaveProperty('UAParser')
        expect(window).toHaveProperty('sobc_')
    })

    test('Lodash', () => {
        expect(window.Lodash).toHaveProperty('VERSION')
        expect(window.Lodash).toHaveProperty('clone')
        expect(window.Lodash).toHaveProperty('cloneDeep')
        expect(window.Lodash).toHaveProperty('chunk')
        expect(window.Lodash).toHaveProperty('sortedLastIndex')
    })

    test('Dayjs', () => {
        let date = window.Dayjs()
        expect(date).toHaveProperty('format')
    })
})
