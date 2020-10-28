import Vue from 'vue'
import CustomModal from '~/components/common/CustomModal'
import AppHeader from '~/components/common/AppHeader'
import ToastNotification from '~/components/common/ToastNotification'

Vue.use(Vue)
Vue.component('CustomModal', CustomModal)
Vue.component('AppHeader', AppHeader)
Vue.component('ToastNotification', ToastNotification)
