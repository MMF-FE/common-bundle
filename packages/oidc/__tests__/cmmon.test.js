require('../../../dist/oidc/index')

describe('测试 oidc', () => {
    test('所有的包都应该在 window 里面', () => {
        expect(window).toHaveProperty('__YZT_OIDC')
    })
})
