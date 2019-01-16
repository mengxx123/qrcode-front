<template>
    <my-page title="二维码v2" :page="page">
        <input type="file" @change="fileChange" />
        <ui-text-field v-model="text" label="内容" />
        <vue-qr :text="text" :bgSrc="bgSrc" :callback="test" qid="testid"></vue-qr>
    </my-page>
</template>

<script>
    import VueQr from 'vue-qr'

    export default {
        data () {
            return {
                bgSrc: null,
                text: '123',
                page: {
                    menu: [
                        // {
                        //     type: 'icon',
                        //     icon: 'all_inclusive',
                        //     click: this.link,
                        //     title: '在其他应用打开图片'
                        // }
                    ]
                }
            }
        },
        mounted() {
        },
        destroyed() {
        },
        methods: {
            test(dataUrl, id) {
                console.log(dataUrl, id)
            },
            fileChange(e) {
                let file = e.target.files[0]
                let reader = new FileReader()
                reader.onload = e => {
                    this.bgSrc = e.target.result
                    console.log(e)
                }
                reader.readAsDataURL(file)

            }
        },
        watch: {
        },
        components: {
            VueQr
        }
    }
</script>

<style lang="scss" scoped>
.tab-head {
    margin-bottom: 16px;
}
.icon-box {
    width: 100%;
    max-width: 400px;
    .body {
        position: absolute;
        top: 64px;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 16px;
        overflow: auto;
    }
}

</style>
