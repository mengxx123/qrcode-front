<template>
    <my-page title="二维码" :page="page">
        <!--<header class="layout-header navbar navbar-light">-->
            <!--<div class="container">-->
                            <!--<a class="nav-link" href="/qrcode" target="_blank">首页</a>-->
                            <!--<button id="download" class="btn btn-info" href="#">下载</button>-->
                            <!--<a class="nav-link" href="/qrcode/game" target="_blank" style="color: #f00">二维码小游戏</a>-->
                            <!--<a class="nav-link" href="/plugin/qrcode" target="_blank" style="color: #f00">浏览器插件</a>-->
        <!--</header>-->
        <div class="qrcode-box">
            <div id="qrcode" class="qrcode">
                <canvas id="canvas" width="500" height="500"></canvas>
                <canvas id="canvas2" width="500" height="500"></canvas>
            </div>
        </div>
        <div class="edit-tool">
            <ul id="tool-tab" class="nav nav-tabs">
                <div class="nav-item active"><a class="nav-link" href="#tab10" data-toggle="tab">内容</a></div>
                <div class="nav-item"><a class="nav-link" href="#tab11" data-toggle="tab">基本</a></div>
                <div class="nav-item"><a class="nav-link" href="#tab12" data-toggle="tab">样式</a></div>
                <div class="nav-item"><a class="nav-link" href="#tab13" data-toggle="tab">图标</a></div>
                <div class="nav-item"><a class="nav-link" href="#tab14" data-toggle="tab">码眼</a></div>
            </ul>
            <div class="tab-content">
                <div id="tab10" class="tab-pane fade active in">

                    <div id="editor-text-edit2" class="editor-box editor-text-ediotr-box">
                        <ui-tabs class="tab-head" :value="activeTab" @change="handleTabChange">
                            <ui-tab value="website" title="网址"/>
                            <ui-tab value="wifi" title="WiFi"/>
                            <ui-tab value="card" title="名片"/>
                            <ui-tab value="phone" title="电话"/>
                        </ui-tabs>
                        <div v-if="activeTab === 'website'">
                            <div class="form-horizontal">
                                <div class="form-groups">
                                    <div class="form-group">
                                        <label class="control-label">网址</label>
                                        <textarea v-model="input.text" class="form-control" placeholder="支持文本、网址和电子邮箱"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="activeTab === 'wifi'">
                            <div class="form-horizontal">
                                <div class="form-groups">
                                    <div class="form-group">
                                        <label class="control-label">WiFi账号</label>
                                        <textarea v-model="input.wifi.account" class="form-control" placeholder="接入点SSID"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">密码</label>
                                        <input v-model="input.wifi.password" class="form-control" type="text">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">加密类型</label>
                                        <select v-model="input.wifi.type" class="form-control">
                                            <option value="WPA">WPA/WPA2</option>
                                            <option value="WEP">WEP</option>
                                            <option value="nopass">无加密</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="activeTab === 'card'">
                            <div class="form-horizontal">
                                <div class="form-group">
                                    <label class="control-label">姓名</label>
                                    <input v-model="input.card.name" class="form-control" type="text">
                                </div>
                                <div class="form-group">
                                    <label class="control-label">电话</label>
                                    <input v-model="input.card.phone" class="form-control" type="text">
                                </div>
                                <div class="form-group">
                                    <label class="control-label">电子邮箱</label>
                                    <input v-model="input.card.email" class="form-control" type="text">
                                </div>
                                <div class="form-group">
                                    <label class="control-label">地址</label>
                                    <input v-model="input.card.address" class="form-control" type="text" value="">
                                </div>
                                <div class="form-group">
                                    <label class="control-label">网址</label>
                                    <input v-model="input.card.site" class="form-control" type="text" value="http://">
                                </div>

                                <div class="form-group">
                                    <label class="control-label">单位</label>
                                    <input v-model="input.card.org" class="form-control" type="text" value="">
                                </div>
                                <div class="form-group">
                                    <label class="control-label">职位</label>
                                    <input v-model="input.card.job" class="form-control" type="text" value="">
                                </div>
                            </div>
                        </div>
                        <div v-if="activeTab === 'phone'">
                            <div class="form-horizontal">
                                <div class="form-groups">
                                    <div class="form-group">
                                        <label class="control-label">手机号码</label>
                                        <input v-model="input.phone" class="form-control" type="text">
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
                <div id="tab11" class="tab-pane fade">
                    <div class="form-horizontal">
                        <div id="editor-text-edit2" class="editor-box editor-text-ediotr-box">
                            <div class="form-groups">
                                <h4 class="title">基本设置</h4>
                                <div class="form-group">
                                    <label class="control-label"></label>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">大小</label>
                                    <!-- <ui-slider class="demo-slider" v-model="value1"/> -->
                                    <div id="size"></div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">容错</label>
                                    <!--<div id="quality"></div>-->
                                    <select id="editor-quality" class="form-control">
                                        <option value="0">最低</option>
                                        <option value="1">低</option>
                                        <option value="2">中</option>
                                        <option value="3" selected>高</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">边距</label>
                                    <div id="padding"></div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">旋转</label>
                                    <div id="angle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab12" class="tab-pane fade">
                    <div class="form-horizontal">
                        <div class="form-groups">
                            <h4 class="title">填充</h4>
                            <div class="form-group">
                                <label class="control-label">样式</label>
                                <select id="type" class="form-control">
                                    <option value="0" selected>直角</option>
                                    <option value="1">圆圈</option>
                                    <option value="2">液化</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="control-label">颜色</label>
                                <input id="color" class="form-control">
                            </div>
                            <div class="form-group">
                                <label class="control-label">渐变</label>
                                <label class="checkbox-inline"><input id="gradient" type="checkbox">开启</label>
                            </div>
                            <div id="gradient-box" class="gradient-box">
                                <div class="form-group">
                                    <label class="control-label">渐变方式</label>
                                    <div class="form-control-static">线性渐变</div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">颜色1</label>
                                    <input id="gradient-color1" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label class="control-label">颜色2</label>
                                    <input id="gradient-color2" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="form-groups">
                            <h4 class="title">背景</h4>
                            <div class="form-group">
                                <label class="control-label">背景色</label>
                                <input id="bg-color" class="form-control">
                            </div>
                            <div class="form-group">
                                <label class="control-label">背景图片</label>
                                <button id="upload-bg" class="btn btn-default" type="button">上传</button>
                            </div>
                        </div>
                        <div class="form-groups">
                            <h4 class="title">模板</h4>
                            <ul id="style-list" class="style-list">
                                <li class="style-item"></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="tab13" class="tab-pane fade">
                    <ul id="index-list" class="index-list">
                        <div class="form-horizontal">
                            <div class="form-groups">
                                <h4 class="title">图标</h4>
                                <div class="form-group">
                                    <label class="control-label">图标</label>
                                    <ui-raised-button label="选择图标" @click="toggle" /> 
                                    <ui-raised-button label="删除图标" @click="removeIcon" v-if="input.src" /> 
                                </div>
                            </div>
                            <div class="form-groups" v-if="input.src">
                                <h4 class="title">图标样式</h4>
                                <div class="form-group">
                                    <label class="control-label">描边</label>
                                    <input v-model.number="input.stroke" class="form-control" type="number" value="0" min="0">
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
                <div id="tab14" class="tab-pane fade">
                    <div class="form-horizontal">
                        <div class="form-groups">
                            <h4 class="title">颜色</h4>
                            <div class="form-group">
                                <label class="control-label">外框颜色</label>
                                <input id="editor-eye-out-color" class="form-control">
                            </div>
                            <div class="form-group">
                                <label class="control-label">内框颜色</label>
                                <input id="editor-eye-in-color" class="form-control">
                            </div>
                        </div>
                    </div>
                </div><!-- /.tab-pane -->
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
                activeTab: 'website',
                input: {
                    text: 'https://tool.yunser.com/',
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
                        site: '',
                        org: '',
                        job: ''
                    },
                    src: null,
                    stroke: 0,
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
        },
        methods: {
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
                this.makeCode()
            },
            getText() {
                let _this = this
                var allText
                if (_this.activeTab === 'website') {
                    allText = _this.input.text
                } else if (_this.activeTab === 'wifi') {
                    var account = _this.input.wifi.account
                    var pwd = _this.input.wifi.password
                    var wifiType = _this.input.wifi.type
                    if (wifiType === 'nopass') {
                        pwd = 'null'
                    }
                    allText = 'WIFI:S:' + account + ';T:' + wifiType + ';P:' + pwd + ';'
                } else if (_this.activeTab === 'card') {
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
                } else if (_this.activeTab === 'phone') {
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
                let _this = this
                var size = 500
                var color = '#000000'
                var bgColor = '#ffffff'
                var gradient = null
                /*var gradient = {
                 color1: '#459912',
                 color2: '#0cd9b4'
                 };*/
                var type = 0
                var quality = 3
                var padding = 20
                var angle = 0
                var bgImage = null
                var eyeOutColor = null
                var eyeInColor = null

                function makeCode () {
                    // if (!_this.input.text) {
                    //     eui.msg('请输入地址')
                    //     // elText.focus()
                    //     return
                    // }

                    qrcodeRender('canvas', {
                        width: size,
                        height: size,
                        background: bgColor,
                        foreground: color,
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
                        padding: padding,
                        quality: quality,
                        type: type,
                        angle: angle,
                        src: _this.input.src,
                        stroke: _this.input.stroke,
                        bgImage: bgImage,
                        eyeOutColor: eyeOutColor,
                        eyeInColor: eyeInColor
                    })
                }

                makeCode()
                this.makeCode = makeCode

                $('#color').colorpicker({}).on('changeColor', function (e) {
                    color = e.color
                    makeCode()
                })
                $('#bg-color').colorpicker({}).on('changeColor', function (e) {
                    bgColor = e.color
                    bgImage = null
                    makeCode()
                })
                // 码眼外框颜色
                $('#editor-eye-out-color').colorpicker({}).on('changeColor', function (e) {
                    eyeOutColor = e.color
                    makeCode()
                })
                $('#editor-eye-in-color').colorpicker({}).on('changeColor', function (e) {
                    eyeInColor = e.color
                    makeCode()
                })

                $('#gradient').on('click', function () {
                    if ($(this).is(':checked')) {
                        gradient = {
                            color1: '#459912',
                            color2: '#0cd9b4'
                        }
                        $('#gradient-box').show()
                        $('#gradient-color1').val('#459912')
                        $('#gradient-color2').val('#0cd9b4')
                        makeCode()
                    } else {
                        gradient = null
                        $('#gradient-box').hide()
                    }
                })
                $('#gradient-color1').colorpicker({}).on('changeColor', function (e) {
                    gradient.color1 = e.color
                    makeCode()
                })
                $('#gradient-color2').colorpicker({}).on('changeColor', function (e) {
                    gradient.color2 = e.color
                    makeCode()
                })

                $('#size').range({
                    value: size,
                    min: 200,
                    max: 800,
                    step: 100
                }).on('slide', function (e) {
                    size = e.value
                    makeCode()
                })

                $('#angle').range({
                    value: angle,
                    min: 0,
                    max: 360,
                    step: 1
                }).on('slide', function (e) {
                    angle = e.value
                    makeCode()
                })


                $('#type').on('change', function () {
                    type = $('#type option:selected').val()
                    makeCode()
                })

                $('#padding').range({
                    value: padding,
                    min: 0,
                    max: 100,
                    step: 10
                }).on('slide', function (e) {
                    padding = e.value
                    makeCode()
                })

                $('#editor-quality').on('change', function () {
                    quality = parseInt(this.value)
                    makeCode()
                })


                $('#quality').range({
                    value: quality,
                    min: 0,
                    max: 3,
                    step: 1
                }).on('slideStop', function (e) {
                    quality = e.value
                    makeCode()
                })

                $('#icon').on('click', function () {
                    $('#icon-list').dialog({
                        title: '选择图标',
                        btn: '取消'
                    })
                })


                $('#download').on('click', function () {
                    var canvas = document.getElementById("canvas"), ctx = canvas.getContext("2d")
                    // draw to canvas...
                    canvas.toBlob(function(blob) {
                        saveAs(blob, 'yunser.com-' + new Date().getTime() + '.png')
                    })
                })

                $('#canvas2').on('click', function () {
                    alert(1)
                })

                $('#upload-bg').on('click', function () {
                    var $fileInput = $('<input type="file">')
                    $(document.body).append($fileInput)
                    console.log(1)
                    $fileInput.on('change', function () {
                        if ($(this).val()) {
                            var file = this.files[0]
                            var URL = window.URL || window.webkitURL
                            var imgURL = URL.createObjectURL(file)
                            bgImage = imgURL
                            makeCode()
                        }
                    })
                    $fileInput.hide()
                    $fileInput.trigger('click')
                })

                this.initWebIntents()
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
