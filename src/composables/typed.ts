import Typed from 'typed.js'
import { watch } from 'vue'
import { MaybeElementRef, unrefElement, tryOnUnmounted } from '@vueuse/core'
import type { TypedOptions } from 'typed.js'

export function useTypedJS(target: MaybeElementRef, options: TypedOptions) {
  let typed: Typed | undefined

  const start = () => typed && typed.start()
  const stop = () => typed && typed.stop()
  const toggle = () => typed && typed.toggle()
  const reset = () => typed && typed.reset()

  watch(target, () => {
    const el = unrefElement(target)

    if (!el)
      return

    typed = new Typed(el, options)
  }, {
    flush: 'post',
  })

  tryOnUnmounted(() => typed && typed.destroy())

  return {
    start,
    stop,
    toggle,
    reset,
  }
}
