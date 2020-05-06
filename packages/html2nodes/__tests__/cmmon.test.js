require('../../../dist/html2nodes/index')

describe('测试 html2nodes 包', () => {
    test('所有的包都应该在 window 里面', () => {
        expect(window).toHaveProperty('html2nodes')
    })
})
