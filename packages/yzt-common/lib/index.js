import * as Dayjs from 'dayjs'
import * as Axios from 'axios'
import * as Cookies from 'js-cookie'
import UAParser from 'ua-parser-js'
import * as Lodash from 'lodash'
import * as Sentry from '@sentry/browser'

// dayjs 插件
import customParseFormat from 'dayjs/plugin/customParseFormat'
import duration from 'dayjs/plugin/duration'
Dayjs.extend(duration)
Dayjs.extend(customParseFormat)

// sentry 不安建议用 CDN 的方式加载
const sobc_ = Sentry

export { Dayjs, Axios, Cookies, Lodash, UAParser, sobc_ }
