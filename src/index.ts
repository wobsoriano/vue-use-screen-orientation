import { onMounted, onUnmounted, ref } from 'vue-demi'

function useScreenOrientation() {
  const portrait = window.matchMedia('(orientation: portrait)')
  const orientation = ref(portrait.matches ? 'portrait' : 'landscape')

  function orientationListener(e: MediaQueryListEvent) {
    orientation.value = e.matches ? 'portrait' : 'landscape'
  }

  onMounted(() => {
    portrait.addEventListener('change', orientationListener)
  })

  onUnmounted(() => {
    portrait.removeEventListener('change', orientationListener)
  })

  return orientation
}

export {
  useScreenOrientation,
  useScreenOrientation as default,
}
