import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import { UserModule } from '~/types'

export const install: UserModule = () => {
  dayjs.extend(LocalizedFormat)
}
