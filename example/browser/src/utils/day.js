
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime' // 导入插件
import 'dayjs/locale/zh-cn' // 导入本地化语言

dayjs.extend(relativeTime) // 使用插件
dayjs.locale('zh-cn') // 使用本地化语言
export default dayjs