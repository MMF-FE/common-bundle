module.exports = {
    configureWebpack: config => {
        return {
            externals: {
                vue: 'Vue',
                lodash: 'Lodash',
                vuex: 'Vuex',
                dayjs: 'Dayjs',
                axios: 'Axios',
                momment: 'momment',
                mathjs: 'Mathjs',
                'vue-router': 'VueRouter',
                'vue-lazyload': 'VueLazyLoad',
                'vuex-class': 'VuexClass',
                'vue-class-component': 'VueClassComponent',
                'vue-property-decorator': 'VuePropertyDecorator',
                'js-cookie': 'Cookies',
                'ua-parser-js': 'UAParser'
            }
        }
    }
}
