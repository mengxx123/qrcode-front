<template>
    <div class="page page-index">
        <header class="layout-header navbar navbar-light">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse"
                            data-target="#navbar-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="/">二维码</a>
                </div>
                <div id="navbar-collapse" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav" id="menu-layoutit">
                        <!--<li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                                文件 <i class="caret"></i>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-right">
                                <li><a id="new" href="#">新建</a></li>
                                <li><a id="save" href="#">保存</a></li>
                                <li><a id="download" href="#">下载</a></li>
                            </ul>
                        </li>-->
                        <!--<li class="nav-item">
                            <a class="nav-link" href="/qrcode" target="_blank">首页</a>
                        </li>-->
                        <li class="nav-item navbar-form">
                            <button id="download" class="btn btn-info" href="#">下载</button>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav pull-right">
                        <li class="nav-item">
                            <a class="nav-link" href="/qrcode/game" target="_blank" style="color: #f00">二维码小游戏</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/plugin/qrcode" target="_blank" style="color: #f00">浏览器插件</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/" target="_blank">更多工具</a>
                        </li>
                    </ul>

                </div>
            </div>
        </header>
        <div class="layout-body">
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
                            <ul id="sub-tab" class="nav nav-tabs">
                                <div class="nav-item active"><a class="nav-link" href="#tab20" data-toggle="tab">网址</a></div>
                                <div class="nav-item"><a class="nav-link" href="#tab21" data-toggle="tab">WiFi</a></div>
                                <div class="nav-item"><a class="nav-link" href="#tab22" data-toggle="tab">名片</a></div>
                                <div class="nav-item"><a class="nav-link" href="#tab23" data-toggle="tab">电话</a></div>
                            </ul>
                            <div class="tab-content sub-tab-content">
                                <div id="tab20" class="tab-pane fade active in">
                                    <div class="form-horizontal">
                                        <div class="form-groups">
                                            <div class="form-group">
                                                <label class="control-label">网址</label>
                                                <textarea id="text" class="form-control" placeholder="支持文本、网址和电子邮箱">http://tool.yunser.com/</textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab21" class="tab-pane fade">
                                    <div class="form-horizontal">
                                        <div class="form-groups">
                                            <div class="form-group">
                                                <label class="control-label">WiFi账号</label>
                                                <textarea id="wifi-account" class="form-control" placeholder="接入点SSID"></textarea>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label">密码</label>
                                                <input id="wifi-pwd" class="form-control" type="text">
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label">加密类型</label>
                                                <select id="wifi-type" class="form-control">
                                                    <option value="WPA">WPA/WPA2</option>
                                                    <option value="WEP">WEP</option>
                                                    <option value="nopass">无加密</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab22" class="tab-pane fade">
                                    <div class="form-horizontal">
                                        <div class="form-group">
                                            <label class="control-label">姓名</label>
                                            <input id="card-name" class="form-control" type="text">
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">电话</label>
                                            <input id="card-tel" class="form-control" type="text">
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">电子邮箱</label>
                                            <input id="card-email" class="form-control" type="text">
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">地址</label>
                                            <input id="card-address" class="form-control" type="text" value="">
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">网址</label>
                                            <input id="card-site" class="form-control" type="text" value="http://">
                                        </div>

                                        <div class="form-group">
                                            <label class="control-label">单位</label>
                                            <input id="card-org" class="form-control" type="text" value="">
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">职位</label>
                                            <input id="card-til" class="form-control" type="text" value="">
                                        </div>
                                        <!--<div class="form-group">
                                            <label class="control-label">QQ</label>
                                            <input id="card-qq" class="form-control" type="text">
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">备注</label>
                                            <input id="card-note" class="form-control" type="text" value="">
                                        </div>-->
                                    </div>
                                </div>
                                <div id="tab23" class="tab-pane fade">
                                    <div class="form-horizontal">
                                        <div class="form-groups">
                                            <div class="form-group">
                                                <label class="control-label">手机号码</label>
                                                <input id="tel-phone" class="form-control" type="text">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


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
                                        <button id="icon" class="btn btn-primary" type="button">常用图标</button>
                                        <button id="upload" class="btn btn-primary" type="button">上传</button>
                                    </div>
                                </div>
                                <div class="form-groups">
                                    <h4 class="title">图标样式</h4>
                                    <div class="form-group">
                                        <label class="control-label">描边</label>
                                        <input id="stroke" class="form-control" type="number" value="0" min="0">
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
        </div>
        <ul id="icon-list" class="icon-list">
            <li><img src="/static/qrcode/img/qq.png"></li>
            <li><img src="/static/qrcode/img/phone.png"></li>
            <li><img src="/static/qrcode/img/sina.png"></li>
            <li><img src="/static/qrcode/img/taobao.png"></li>
            <li><img src="/static/qrcode/img/tencent-weibo.png"></li>
            <li><img src="/static/qrcode/img/www.png"></li>
            <li><img src="/static/qrcode/img/youtube.png"></li>
            <li><img src="/static/qrcode/img/alipay.png"></li>
            <li><img src="/static/qrcode/img/weixin1.png"></li>
            <li><img src="/static/qrcode/img/weixin2.png"></li>
            <li><img src="/static/qrcode/img/weibo1.png"></li>
            <li><img src="/static/qrcode/img/weibo2.png"></li>
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                var size = 500;
                var color = '#000000';
                var bgColor = '#ffffff';
                var gradient = null;
                var src = null;
                var stroke = 0; // 图标描边
                /*var gradient = {
                 color1: '#459912',
                 color2: '#0cd9b4'
                 };*/
                var textType = 0;
                var type = 0;
                var quality = 3;
                var padding = 20;
                var angle = 0;
                var bgImage = null;
                var eyeOutColor = null;
                var eyeInColor = null;

                /**
                 *
                 *  UTF-8 data encode / decode
                 *  http://www.webtoolkit.info/
                 *
                 **/
                function utf8Encode(string) {
                    console.log(string)
                    string = string.replace(/\r\n/g,'\n');
                    var utftext = '';
                    for (var n = 0; n < string.length; n++) {
                        var c = string.charCodeAt(n);
                        if (c < 128) {
                            utftext += String.fromCharCode(c);
                        }
                        else if((c > 127) && (c < 2048)) {
                            utftext += String.fromCharCode((c >> 6) | 192);
                            utftext += String.fromCharCode((c & 63) | 128);
                        }
                        else {
                            utftext += String.fromCharCode((c >> 12) | 224);
                            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                            utftext += String.fromCharCode((c & 63) | 128);
                        }
                    }
                    return utftext;
                }

                function makeCode () {
                    var allText;
                    var elText = document.getElementById('text');

                    if (textType === 0) {
                        allText = elText.value;
                    } else if (textType === 1) {
                        var account = document.getElementById('wifi-account').value;
                        var pwd = document.getElementById('wifi-pwd').value;
                        var wifiType = document.getElementById('wifi-type').value;
                        if (wifiType === 'nopass') {
                            pwd = 'null';
                        }
                        allText = 'WIFI:S:' + account + ';T:' + wifiType + ';P:' + pwd + ';';
                    } else if (textType === 2) {
                        var cardName = document.getElementById('card-name').value;
                        /*var cardQq = document.getElementById('card-qq').value;*/
                        var cardSite = document.getElementById('card-site').value;
                        var cardTel = document.getElementById('card-tel').value;
                        var cardEmail = document.getElementById('card-email').value;
                        var cardAddress = document.getElementById('card-address').value;
                        /*var cardNote = document.getElementById('card-note').value;*/
                        var cardOrg = document.getElementById('card-org').value;
                        var cardTil = document.getElementById('card-til').value;

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
                    } else if (textType === 3) {
                        var phone = document.getElementById('tel-phone').value;
                        allText = 'tel:' + phone;
                        console.log(allText)
                    }

                    //$('#qrcode').html('');
                    if (!elText.value) {
                        eui.msg('请输入地址');
                        elText.focus();
                        return;
                    }

                    $('#canvas').qrcode({
                        width: size,
                        height: size,
                        background: bgColor,
                        foreground: color,
                        cellSize: 8, //2-10
                        effect: {
                            key: 'round',
                            value: 0.2
                        },
                        text: utf8Encode(allText),
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
                        src: src,
                        stroke: stroke,
                        bgImage: bgImage,
                        eyeOutColor: eyeOutColor,
                        eyeInColor: eyeInColor
                    });
                }

                makeCode();

                $('#color').colorpicker({}).on('changeColor', function (e) {
                    color = e.color;
                    makeCode();
                });
                $('#bg-color').colorpicker({}).on('changeColor', function (e) {
                    bgColor = e.color;
                    bgImage = null;
                    makeCode();
                });
                // 码眼外框颜色
                $('#editor-eye-out-color').colorpicker({}).on('changeColor', function (e) {
                    eyeOutColor = e.color;
                    makeCode();
                });
                $('#editor-eye-in-color').colorpicker({}).on('changeColor', function (e) {
                    eyeInColor = e.color;
                    makeCode();
                });

                $('#gradient').on('click', function () {
                    if ($(this).is(':checked')) {
                        gradient = {
                            color1: '#459912',
                            color2: '#0cd9b4'
                        }
                        $('#gradient-box').show();
                        $('#gradient-color1').val('#459912');
                        $('#gradient-color2').val('#0cd9b4');
                        makeCode();
                    } else {
                        gradient = null;
                        $('#gradient-box').hide();
                    }
                });
                $('#gradient-color1').colorpicker({}).on('changeColor', function (e) {
                    gradient.color1 = e.color;
                    makeCode();
                });
                $('#gradient-color2').colorpicker({}).on('changeColor', function (e) {
                    gradient.color2 = e.color;
                    makeCode();
                });

                $('#text, #wifi-account, #wifi-pwd, #tel-phone').on('input', function () {
                    console.log('input')
                    makeCode();
                });

                $('#card-name, #card-tel, #card-qq, #card-email, #card-site, #card-note, #card-address, #card-org, #card-til').on('input', function () {
                    console.log('input')
                    makeCode();
                });

                $('#wifi-type').on('change', function () {
                    makeCode();
                });

                $('#size').range({
                    value: size,
                    min: 200,
                    max: 800,
                    step: 100
                }).on('slide', function (e) {
                    size = e.value;
                    makeCode();
                });

                $('#angle').range({
                    value: angle,
                    min: 0,
                    max: 360,
                    step: 1
                }).on('slide', function (e) {
                    angle = e.value;
                    makeCode();
                });


                $('#type').on('change', function () {
                    textType = $('#type option:selected').val();
                    makeCode();
                });

                $('#stroke').on('input', function () {
                    stroke = parseInt(this.value);
                    makeCode();
                });

                $('#padding').range({
                    value: padding,
                    min: 0,
                    max: 100,
                    step: 10
                }).on('slide', function (e) {
                    padding = e.value;
                    makeCode();
                });

                $('#editor-quality').on('change', function () {
                    quality = parseInt(this.value);
                    makeCode();
                });


                $('#quality').range({
                    value: quality,
                    min: 0,
                    max: 3,
                    step: 1
                }).on('slideStop', function (e) {
                    quality = e.value;
                    makeCode();
                });

                $('#sub-tab').find('a[data-toggle="tab"]').on('shown.ui.tab', function (e) {
                    textType = $(e.target).parent().index();
                    console.log('啦啦', textType)
                    makeCode();
                });

                $('#icon').on('click', function () {
                    $('#icon-list').dialog({
                        title: '选择图标',
                        btn: '取消'
                    });
                });

                $('#icon-list').on('click', 'img', function () {
                    src = this.src;
                    makeCode();
                    $('#icon-list').dialog('hide');
                });

                $('#download').on('click', function () {
                    var canvas = document.getElementById("canvas"), ctx = canvas.getContext("2d");
                    // draw to canvas...
                    canvas.toBlob(function(blob) {
                        saveAs(blob, 'yunser.com-' + new Date().getTime() + '.png');
                    });
                });

                $('#canvas2').on('click', function () {
                    alert(1);
                });

                $('#upload').on('click', function () {
                    var $fileInput = $('<input type="file">');
                    $(document.body).append($fileInput);
                    console.log(1);
                    $fileInput.on('change', function () {
                        if ($(this).val()) {
                            var file = this.files[0];　　//获取拖拽文件
                            var URL = window.URL || window.webkitURL;
                            // 通过 file 生成目标 url
                            var imgURL = URL.createObjectURL(file);
                            /*// 用这个 URL 产生一个 <img> 将其显示出来
                             $('body').append($('<img/>').attr('src', imgURL));
                             // 使用下面这句可以在内存中释放对此 url 的伺服，跑了之后那个 URL 就无效了
                             // URL.revokeObjectURL(imgURL);
                             db.loadImageFile(fileList[0]);
                             $('#open-dialog').dialog('hide');*/
                            src = imgURL;
                            makeCode();
                            //$('#image-selector').dialog('hide');

                            //that.imageSelectCall && that.imageSelectCall(imgURL);
                        }
                    });
                    $fileInput.hide();
                    $fileInput.trigger('click');
                });


                $('#upload-bg').on('click', function () {
                    var $fileInput = $('<input type="file">');
                    $(document.body).append($fileInput);
                    console.log(1);
                    $fileInput.on('change', function () {
                        if ($(this).val()) {
                            var file = this.files[0];　　//获取拖拽文件
                            var URL = window.URL || window.webkitURL;
                            // 通过 file 生成目标 url
                            var imgURL = URL.createObjectURL(file);
                            /*// 用这个 URL 产生一个 <img> 将其显示出来
                             $('body').append($('<img/>').attr('src', imgURL));
                             // 使用下面这句可以在内存中释放对此 url 的伺服，跑了之后那个 URL 就无效了
                             // URL.revokeObjectURL(imgURL);
                             db.loadImageFile(fileList[0]);
                             $('#open-dialog').dialog('hide');*/
                            bgImage = imgURL;
                            makeCode();
                            //$('#image-selector').dialog('hide');

                            //that.imageSelectCall && that.imageSelectCall(imgURL);
                        }
                    });
                    $fileInput.hide();
                    $fileInput.trigger('click');
                });
            }
        }
    }
</script>

<style scoped>

</style>
