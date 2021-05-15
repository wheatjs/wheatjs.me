import dayjs from 'dayjs'
export * from './dark'

export function formatDate(d: string | Date) {
  return dayjs(d).format('ll')
}
