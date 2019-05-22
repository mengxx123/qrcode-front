<template>
    <my-page title="二维码" :page="page">
        <!--<header class="layout-header navbar navbar-light">-->
            <!--<div class="container">-->
                            <!--<a class="nav-link" href="/qrcode" target="_blank">首页</a>-->
                            <!--<button id="download" class="btn btn-info" href="#">下载</button>-->
                            <!--<a class="nav-link" href="/qrcode/game" target="_blank" style="color: #f00">二维码小游戏</a>-->
                            <!--<a class="nav-link" href="/plugin/qrcode" target="_blank" style="color: #f00">浏览器插件</a>-->
        <!--</header>-->
        <div class="qrcode-box" v-if="screenWidth >= 660 || activeTab === '5'">
            <div id="qrcode" class="qrcode">
                <canvas id="canvas" width="500" height="500"></canvas>
                <canvas id="canvas2" width="500" height="500"></canvas>
            </div>
        </div>
        <div class="edit-tool">
            <ui-tabs class="tab-head" :value="activeTab" @change="handleTabChange">
                <ui-tab value="1" title="内容"/>
                <ui-tab value="2" title="基本"/>
                <ui-tab value="3" title="样式"/>
                <ui-tab value="4" title="高级"/>
                <ui-tab value="5" title="预览" v-if="screenWidth < 660" />
            </ui-tabs>
            <div class="ui-tab-content">
                <div v-if="activeTab === '1'" class="ui-tab-pane">
                    <div class="ui-form-item">
                        <label class="ui-form-label">类型</label>
                        <ui-select-field class="form-select" v-model="input.contentType">
                            <ui-menu-item value="website" title="网址"/>
                            <ui-menu-item value="wifi" title="WiFi"/>
                            <ui-menu-item value="card" title="名片"/>
                            <ui-menu-item value="phone" title="电话"/>
                        </ui-select-field>
                    </div>
                    <div id="editor-text-edit2" class="editor-box editor-text-ediotr-box">
                        <div v-if="input.contentType === 'website'">
                            <div class="form-horizontal">
                                <div class="ui-form-items">
                                    <div class="ui-form-item">
                                        <label class="ui-form-label">网址</label>
                                        <ui-text-field class="ui-form-widget form-text-field" v-model="input.text" hintText="支持文本、网址和电子邮箱" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="input.contentType === 'wifi'">
                            <div class="form-horizontal">
                                <div class="ui-form-items">
                                    <div class="ui-form-item">
                                        <label class="ui-form-label">WiFi账号</label>
                                        <ui-text-field class="ui-form-widget form-text-field" v-model="input.wifi.account" hintText="接入点 SSID" />
                                    </div>
                                    <div class="ui-form-item">
                                        <label class="ui-form-label">密码</label>
                                        <ui-text-field class="ui-form-widget form-text-field" v-model="input.wifi.password" />
                                    </div>
                                    <div class="ui-form-item">
                                        <label class="ui-form-label">加密类型</label>
                                        <ui-select-field class="ui-form-widget form-select" v-model="input.wifi.type">
                                            <ui-menu-item value="WPA" title="WPA/WPA2"/>
                                            <ui-menu-item value="WEP" title="WEP"/>
                                            <ui-menu-item value="nopass" title="无加密"/>
                                        </ui-select-field>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="input.contentType === 'card'">
                            <div class="form-horizontal">
                                <div class="ui-form-item">
                                    <label class="ui-form-label">姓名</label>
                                    <ui-text-field class="ui-form-widget form-text-field" v-model="input.card.name" />
                                </div>
                                <div class="ui-form-item">
                                    <label class="ui-form-label">电话</label>
                                    <ui-text-field class="ui-form-widget form-text-field" v-model="input.card.phone" />
                                </div>
                                <div class="ui-form-item">
                                    <label class="ui-form-label">电子邮箱</label>
                                    <ui-text-field class="ui-form-widget form-text-field" v-model="input.card.email" />
                                </div>
                                <div class="ui-form-item">
                                    <label class="ui-form-label">地址</label>
                                    <ui-text-field class="ui-form-widget form-text-field" v-model="input.card.address" />
                                </div>
                                <div class="ui-form-item">
                                    <label class="ui-form-label">网址</label>
                                    <ui-text-field class="ui-form-widget form-text-field" v-model="input.card.site" />
                                </div>

                                <div class="ui-form-item">
                                    <label class="ui-form-label">单位</label>
                                    <ui-text-field class="ui-form-widget form-text-field" v-model="input.card.org" />
                                </div>
                                <div class="ui-form-item">
                                    <label class="ui-form-label">职位</label>
                                    <ui-text-field class="ui-form-widget form-text-field" v-model="input.card.job" />
                                </div>
                            </div>
                        </div>
                        <div v-if="input.contentType === 'phone'">
                            <div class="form-horizontal">
                                <div class="ui-form-items">
                                    <div class="ui-form-item">
                                        <label class="ui-form-label">手机号码</label>
                                        <ui-text-field class="ui-form-widget form-text-field" v-model="input.phone" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- <ul id="sub-tab" class="nav nav-tabs">
                            <div class="nav-item active"><a class="nav-link" href="#tab20" data-toggle="tab">网址</a></div>
                            <div class="nav-item"><a class="nav-link" href="#tab21" data-toggle="tab">WiFi</a></div>
                            <div class="nav-item"><a class="nav-link" href="#tab22" data-toggle="tab">名片</a></div>
                            <div class="nav-item"><a class="nav-link" href="#tab23" data-toggle="tab">电话</a></div>
                        </ul> -->
                        <!-- <div class="tab-content sub-tab-content">
                            <div id="tab20" class="tab-pane fade active in">
                            </div>
                            <div id="tab21" class="tab-pane fade">
                                
                            </div>
                            <div id="tab22" class="tab-pane fade">
                                
                            </div>
                            <div id="tab23" class="tab-pane fade">
                                
                            </div>
                        </div> -->
                    </div>
                </div>
                <div v-if="activeTab === '2'" class="ui-tab-pane">
                    <div class="form-horizontal">
                        <div id="editor-text-edit2" class="editor-box editor-text-ediotr-box">
                            <div class="ui-form-items">
                                <h4 class="title">基本设置</h4>
                                <div class="ui-form-item">
                                    <label class="ui-form-label">大小</label>
                                    <ui-slider class="form-slider" v-model="input.size" :min="100" :max="800" :step="100"/>
                                </div>
                                <div class="ui-form-item">
                                    <label class="ui-form-label">容错</label>
                                    <ui-select-field class="form-select" v-model="input.quality">
                                        <ui-menu-item :value="0" title="最低"/>
                                        <ui-menu-item :value="1" title="低"/>
                                        <ui-menu-item :value="2" title="中"/>
                                        <ui-menu-item :value="3" title="高"/>
                                    </ui-select-field>
                                </div>
                                <div class="ui-form-item">
                                    <label class="ui-form-label">边距</label>
                                    <ui-slider class="form-slider" v-model="input.padding" :min="0" :max="100" :step="10"/>
                                </div>
                                <div class="ui-form-item">
                                    <label class="ui-form-label">旋转</label>
                                    <ui-slider class="form-slider" v-model="input.angle" :min="0" :max="360" :step="1"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="activeTab === '3'" class="ui-tab-pane">
                    <div class="form-horizontal">
                        <div class="ui-form-items">
                            <h4 class="title">填充</h4>
                            <div class="ui-form-item">
                                <label class="ui-form-label">样式</label>
                                <ui-select-field class="form-select" v-model="input.type">
                                    <ui-menu-item :value="0" title="直角"/>
                                    <ui-menu-item :value="1" title="圆圈"/>
                                    <ui-menu-item :value="2" title="液化"/>
                                </ui-select-field>
                            </div>
                            <div class="ui-form-item">
                                <label class="ui-form-label">颜色</label>
                                <ui-color-picker class="form-color-picker" v-model="input.color" />
                            </div>
                            <div class="ui-form-item">
                                <label class="ui-form-label">渐变</label>
                                <ui-checkbox class="ui-form-checkbox" v-model="input.isGradient" label=""/>
                            </div>
                            <div v-if="input.isGradient">
                                <div class="ui-form-item">
                                    <label class="ui-form-label">渐变方式</label>
                                    <div class="ui-form-widget-static">线性渐变</div>
                                </div>
                                <div class="ui-form-item">
                                    <label class="ui-form-label">颜色1</label>
                                    <ui-color-picker class="form-color-picker" v-model="input.gradientColor1" />
                                </div>
                                <div class="ui-form-item">
                                    <label class="ui-form-label">颜色2</label>
                                    <ui-color-picker class="form-color-picker" v-model="input.gradientColor2" />
                                </div>
                            </div>
                        </div>
                        <div class="ui-form-items">
                            <h4 class="title">背景</h4>
                            <div class="ui-form-item">
                                <label class="ui-form-label">背景色</label>
                                <ui-color-picker class="form-color-picker" v-model="input.bgColor" />
                            </div>
                            <div class="ui-form-item">
                                <label class="ui-form-label">背景图片</label>
                                <ui-raised-button label="上传" @click="uploadBgImage" /> 
                                <ui-raised-button label="删除" @click="input.bgImage = null" v-if="input.bgImage" style="margin-left: 8px;" /> 
                            </div>
                        </div>
                        <div class="ui-form-items">
                            <h4 class="title">模板</h4>
                            <ul id="style-list" class="style-list">
                                <li class="style-item"></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div v-if="activeTab === '4'" class="ui-tab-pane">
                    <ul id="index-list" class="index-list">
                        <div class="form-horizontal">
                            <div class="ui-form-items">
                                <h4 class="title">图标</h4>
                                <div class="ui-form-item">
                                    <label class="ui-form-label">图标</label>
                                    <ui-raised-button label="选择图标" @click="toggle" /> 
                                    <ui-raised-button label="删除图标" @click="removeIcon" v-if="input.src" /> 
                                </div>
                            </div>
                            <div class="ui-form-items" v-if="input.src">
                                <h4 class="title">图标样式</h4>
                                <div class="ui-form-item">
                                    <label class="ui-form-label">描边</label>
                                    <input v-model.number="input.stroke" class="ui-form-widget" type="number" value="0" min="0">
                                </div>
                            </div>
                        </div>
                        <div class="form-horizontal">
                            <div class="ui-form-items">
                                <h4 class="title">码眼</h4>
                                <div class="ui-form-item">
                                    <label class="ui-form-label">外框颜色</label>
                                    <ui-color-picker class="form-color-picker" v-model="input.eyeOutColor" />
                                </div>
                                <div class="ui-form-item">
                                    <label class="ui-form-label">内框颜色</label>
                                    <ui-color-picker class="form-color-picker" v-model="input.eyeInColor" />
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
                <div v-if="activeTab === '5'" class="ui-tab-pane">
                    <!-- <div class="qrcode-box">
                        <div id="qrcode" class="qrcode">
                            <canvas id="canvas" width="500" height="500"></canvas>
                            <canvas id="canvas2" width="500" height="500"></canvas>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
        <ui-drawer class="icon-box" right :open="open" :docked="false" @close="toggle()">
            <ui-appbar title="选择图标">
                <ui-icon-button icon="close" slot="left" @click="toggle" />
                <ui-icon-button icon="file_upload" slot="right" @click="upload" title="上传本地图片" />
                <ui-icon-button icon="all_inclusive" slot="right" @click="linkImage" title="从其他应用选择图片" />
            </ui-appbar>
            <div class="body">
                <ul class="icon-list">
                    <li v-for="icon in icons" @click="selectIcon(icon)">
                        <img :src="icon">
                    </li>
                </ul>
            </div>
        </ui-drawer>
    </my-page>
</template>

<script>
    import qrcodeRender from '../qrcode-render'
    const Intent = window.Intent

    /**
     *
     *  UTF-8 data encode / decode
     *  http://www.webtoolkit.info/
     *
     **/
    function utf8Encode(string) {
        console.log(string)
        string = string.replace(/\r\n/g,'\n')
        var utftext = ''
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n)
            if (c < 128) {
                utftext += String.fromCharCode(c)
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192)
                utftext += String.fromCharCode((c & 63) | 128)
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224)
                utftext += String.fromCharCode(((c >> 6) & 63) | 128)
                utftext += String.fromCharCode((c & 63) | 128)
            }
        }
        return utftext
    }

    export default {
        data () {
            return {
                screenWidth: 0,
                activeTab: '1',
                input: {
                    contentType: 'website',
                    text: '',
                    wifi: {
                        account: '',
                        password: '',
                        type: 'WPA'
                    },
                    phone: '',
                    card: {
                        name: '',
                        phone: '',
                        email: '',
                        address: '',
                        // site: 'http://',
                        site: '',
                        org: '',
                        job: ''
                    },
                    type: 0,
                    size: 500,
                    padding: 20,
                    angle: 0,
                    quality: 3,
                    src: null,
                    stroke: 0,
                    color: '#000',
                    bgImage: null,
                    eyeOutColor: null, // 码眼外框颜色
                    eyeInColor: null,
                    bgColor: '#fff',
                    isGradient: false,
                    gradientColor1: '#459912',
                    gradientColor2: '#0cd9b4'
                },
                open: false,
                icons: [
                    '/static/qrcode/img/qq.png',
                    '/static/qrcode/img/phone.png',
                    '/static/qrcode/img/sina.png',
                    '/static/qrcode/img/taobao.png',
                    '/static/qrcode/img/tencent-weibo.png',
                    '/static/qrcode/img/www.png',
                    '/static/qrcode/img/youtube.png',
                    '/static/qrcode/img/alipay.png',
                    '/static/qrcode/img/weixin1.png',
                    '/static/qrcode/img/weixin2.png',
                    '/static/qrcode/img/weibo1.png',
                    '/static/qrcode/img/weibo2.png'
                ],
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'all_inclusive',
                            click: this.link,
                            title: '在其他应用打开图片'
                        }
                    ]
                }
            }
        },
        mounted() {
            this.init()
            window.addEventListener('resize', this.onResize = () => {
                this.screenWidth = window.innerWidth
            }, false)
            this.onResize()
        },
        destroyed() {
            window.removeEventListener('resize', this.onResize) 
        },
        methods: {
            uploadBgImage() {
                let _this = this
                var $fileInput = $('<input type="file">')
                $(document.body).append($fileInput)
                console.log(1)
                $fileInput.on('change', function () {
                    if ($(this).val()) {
                        var file = this.files[0]
                        var URL = window.URL || window.webkitURL
                        var imgURL = URL.createObjectURL(file)
                        _this.input.bgImage = imgURL
                        _this.makeCode()
                    }
                })
                $fileInput.hide()
                $fileInput.trigger('click')
            },
            upload() {
                let _this = this
                var $fileInput = $('<input type="file">')
                $(document.body).append($fileInput)
                console.log(1)
                $fileInput.on('change', function () {
                    if ($(this).val()) {
                        var file = this.files[0];　　//获取拖拽文件
                        var URL = window.URL || window.webkitURL
                        // 通过 file 生成目标 url
                        var imgURL = URL.createObjectURL(file)
                        /*// 用这个 URL 产生一个 <img> 将其显示出来
                            $('body').append($('<img/>').attr('src', imgURL))
                            // 使用下面这句可以在内存中释放对此 url 的伺服，跑了之后那个 URL 就无效了
                            // URL.revokeObjectURL(imgURL)
                            db.loadImageFile(fileList[0])
                            $('#open-dialog').dialog('hide');*/
                        console.log('上传图标', imgURL)
                        _this.input.src = imgURL
                        // makeCode()
                        //$('#image-selector').dialog('hide')

                        //that.imageSelectCall && that.imageSelectCall(imgURL)
                    }
                })
                $fileInput.hide()
                $fileInput.trigger('click')
            },
            toggle () {
                this.open = !this.open
            },
            handleTabChange(val) {
                this.activeTab = val
            },
            getText() {
                let _this = this
                var allText
                if (_this.input.contentType === 'website') {
                    allText = _this.input.text
                } else if (_this.input.contentType === 'wifi') {
                    var account = _this.input.wifi.account
                    var pwd = _this.input.wifi.password
                    var wifiType = _this.input.wifi.type
                    if (wifiType === 'nopass') {
                        pwd = 'null'
                    }
                    allText = 'WIFI:S:' + account + ';T:' + wifiType + ';P:' + pwd + ';'
                } else if (_this.input.contentType === 'card') {
                    var cardName = _this.input.card.name
                    var cardSite = _this.input.card.site
                    var cardTel = _this.input.card.phone
                    var cardEmail = _this.input.card.email
                    var cardAddress = _this.input.card.address
                    var cardOrg = _this.input.card.org
                    var cardTil = _this.input.card.job

                    allText = 'MECARD:'
                            + 'N:' + cardName + ';'
                            + (cardTil ? ('TEL:' + cardTel + ';') : '')
                            + (cardEmail ? ('EMAIL:' + cardEmail + ';') : '')
                            + (cardAddress ? ('ADR:' + cardAddress + ';') : '')
                            + ((cardSite === 'http://') ? '' : ('URL:' + cardSite + ';'))
                            + (cardOrg ? ('ORG:' + cardOrg + ';') : '')
                            + (cardTil ? ('TIL:' + cardTil + ';') : '')
                    //+ 'NOTE:' + cardNote + ';'
                    console.log(allText)
                } else if (_this.input.contentType === 'phone') {
                    allText = 'tel:' + _this.input.phone
                    console.log(allText)
                }
                return allText
            },
            selectIcon(icon) {
                this.input.src = icon
                this.open = false
            },
            removeIcon() {
                this.input.src = null
            },
            init() {
                // TODO 删除背景图片已经背景颜色冲突
                this.makeCode()
                this.initWebIntents()
            },
            makeCode() {
                let _this = this
                // if (!_this.input.text) {
                //     eui.msg('请输入地址')
                //     // elText.focus()
                //     return
                // }
                let gradient = null
                if (_this.input.isGradient) {
                    gradient = {
                        color1: _this.input.gradientColor1,
                        color2: _this.input.gradientColor2
                    }
                }

                let canvas = document.getElementById('canvas')
                if (!canvas) {
                    return
                }
                console.log('渲染')

                qrcodeRender('canvas', {
                    width: _this.input.size,
                    height: _this.input.size,
                    background: _this.input.bgColor,
                    foreground: _this.input.color,
                    cellSize: 8, //2-10
                    effect: {
                        key: 'round',
                        value: 0.2
                    },
                    text: utf8Encode(_this.getText()),
                    ecLevel: 'L',
                    mSize: 0.1,
                    mPosX: 0.5,
                    mPosY: 0.5,
                    label: 'no label',
                    fontname: 'sans',
                    fontcolor: '#FFF',
                    gradient: gradient,
                    padding: _this.input.padding,
                    quality: _this.input.quality,
                    type: _this.input.type,
                    angle: _this.input.angle,
                    src: _this.input.src,
                    stroke: _this.input.stroke,
                    bgImage: _this.input.bgImage,
                    eyeOutColor: _this.input.eyeOutColor,
                    eyeInColor: _this.input.eyeInColor
                })
            },
            download() {
                var canvas = document.getElementById("canvas"), ctx = canvas.getContext("2d")
                // draw to canvas...
                canvas.toBlob(function(blob) {
                    saveAs(blob, 'yunser.com-' + new Date().getTime() + '.png')
                })
            },
            initWebIntents() {
                if (!window.intent) {
                    return
                }
                this.page.menu.push({
                    type: 'icon',
                    icon: 'check',
                    click: this.finish,
                    title: '完成'
                })
            },
            finish() {
                let canvas = document.getElementById("canvas")
                let dataUrl = canvas.toDataURL('image/png', 1)
                window.intent.postResult(dataUrl, {
                    fileName: this.fileName || 'yunser.com-' + new Date().getTime() + '.png'
                })
                setTimeout(() => {
                    let owner = window.opener || window.parent
                    owner.window.close()
                }, 100)
            },
            link() {
                console.log('2121')
                let canvas = document.getElementById("canvas")
                let dataUrl = canvas.toDataURL('image/png', 1)
                let intent = new Intent({
                    action: 'http://webintent.yunser.com/?',
                    type: 'image/*',
                    data: dataUrl,
                    extras: {
                        fileName: this.fileName || 'yunser.com-' + new Date().getTime() + '.png'
                    }
                })
                navigator.startActivity(intent, (data, extras) => {
                    console.log('成功', data, extras)
                    // this.editor.setValue(data)
                    // if (extras && extras.fileName) {
                    //     this.fileName = extras.fileName
                    // }
                }, data => {
                    console.log('失败')
                })
            },
            linkImage() {
                let intent = new Intent({
                    action: 'http://webintent.yunser.com/?',
                    type: 'image/*'
                })
                navigator.startActivity(intent, (data, extras) => {
                    console.log('成功', data, extras)
                    this.input.src = data
                    // this.editor.setValue(data)
                    // if (extras && extras.fileName) {
                    //     this.fileName = extras.fileName
                    // }
                }, data => {
                    console.log('失败')
                })
            }
        },
        watch: {
            input: {
                deep: true,
                handler() {
                    this.makeCode()
                }
            },
            activeTab() {
                if (this.activeTab === '5') {
                    this.$nextTick(() => {
                        this.makeCode()
                    })
                }
            }
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
