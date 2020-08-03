import * as Dayjs from 'dayjs'
import * as Axios from 'axios'
import * as Cookies from 'js-cookie'
import UAParser from 'ua-parser-js'
import * as Lodash from 'lodash'
import * as Sentry from '@sentry/browser'

// sentry 不安建议用 CDN 的方式加载
const sobc_ = Sentry

export { Dayjs, Axios, Cookies, Lodash, UAParser, sobc_ }
