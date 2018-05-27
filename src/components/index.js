import page from './page'
import colorPicker from './color-picker/dialog.vue'

export default {
    install: function (Vue) {
        Vue.component('my-page', page)
        Vue.component('ui-color-picker', colorPicker)
    }
}
