import Vue from 'vue'

import { timestampFormatDate } from './date'

// 时间日期

export function timestampFormatYM(timestamp) { return timestampFormatDate(timestamp, 'YM') }

export function timestampFormatYMD(timestamp) { return timestampFormatDate(timestamp, 'YMD') }

export function timestampFormatYMDHM(timestamp) { return timestampFormatDate(timestamp, 'YMDHM') }

export function timestampFormatYMDHMS(timestamp) { return timestampFormatDate(timestamp, 'YMDHMS') }

export function timestampFormatHM(timestamp) { return timestampFormatDate(timestamp, 'HM') }

export function timestampFormatHMS(timestamp) { return timestampFormatDate(timestamp, 'HMS') }

// 注册过滤器
import * as filters from './enroll-filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
