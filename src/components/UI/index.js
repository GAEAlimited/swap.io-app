import SvgIcon from './SvgIcon.vue'
import SwapButton from './SwapButton.vue'
import SwapCopyButton from './SwapCopyButton.vue'
import SwapButtonGoBack from './SwapButtonGoBack.vue'
import SwapCopyWrapper from './SwapCopyWrapper.vue'
import SwapSkeleton from './SwapSkeleton.vue'

export default {
  install(Vue) {
    Vue.component('SvgIcon', SvgIcon)
    Vue.component('SwapButton', SwapButton)
    Vue.component('SwapCopyButton', SwapCopyButton)
    Vue.component('SwapButtonGoBack', SwapButtonGoBack)
    Vue.component('SwapCopyWrapper', SwapCopyWrapper)
    Vue.component('SwapSkeleton', SwapSkeleton)
  }
}
