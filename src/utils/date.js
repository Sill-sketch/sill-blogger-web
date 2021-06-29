
/*
 * 转换为日期格式【时间戳】
 */
export function timestampFormatDate(timestamp, formate) {
  if (!timestamp) {
    return ''
  }

  var date = new Date(timestamp)
  var y = date.getFullYear()
  var m = date.getMonth() + 1
  var d = date.getDate()
  var h = date.getHours()
  var mm = date.getMinutes()
  var s = date.getSeconds()

  switch (formate) {
    case 'YM': return `${y}-${prefix0(m)}`
    case 'YMD': return `${y}-${prefix0(m)}-${prefix0(d)}`
    case 'YMDHM': return `${y}-${prefix0(m)}-${prefix0(d)}\t${prefix0(h)}:${prefix0(mm)}`
    case 'YMDHMS': return `${y}-${prefix0(m)}-${prefix0(d)}\t${prefix0(h)}:${prefix0(mm)}:${prefix0(s)}`

    case 'HM': return `${prefix0(h)}:${prefix0(mm)}}`
    case 'HMS': return `${prefix0(h)}:${prefix0(mm)}:${prefix0(s)}`
  }
}

function prefix0(val) { return val < 10 ? `0${val}` : val }
