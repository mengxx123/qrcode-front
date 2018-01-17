<template>
    <my-page title="关于">
        <div id="input-box" class="row">
            <div class="grid body" id="qrfile">
                <canvas style="border: 1px solid #CCC;" id="qr-canvas" width="360" height="360"></canvas>
                <div id="dropper" class="dropper" title="把您的二维码拖到这儿，即可识别内容">
                    <h2 id="canvas_ext_h2">把二维码拖进来识别内容</h2>
                    <div class="browser" id="canvas_ext_div">
                        <label>
                            <span>点击选择识别的二维码</span>
                            <input type="file" name="files" accept="image/*" onchange="handleFiles(this.files);" title="Click to upload qrcode">
                        </label>
                    </div>
                </div>
            </div>
            <div id="qrcode_content" class="alert success">二维码识别之后的内容显示在此处...</div>
        </div>

        <ui-article>
            <h2>工具介绍</h2>
            <ul class="new_tools_list">
                <li>本工具可以快捷的识别二维码图片中的文本内容，拖放图片到指定的位置，即可扫描出二维码中的信息，可以用于手机无法扫描或者害怕手机骚片中毒等情况。</li>
                <li class="strong green">也许你需要一个更好用Chrome离线插件，
                    。</li>
            </ul>
            <p>二维码可以印刷在报纸、杂志、广告、图书、包装等多种载体上，用户通过手机摄像头扫描二维码或输入二维码下面的号码快速便捷地浏览网页、下载图文、软件、音乐、视频、了解企业产品信息等。</p>
            <p>手机扫描二维码很简单，只需用扫描二维码的APP对准二维码即可。一般下载的手机浏览器就自带了二维码识别。但是有时候我们需要电脑识别二维码，比如一个应用APP很大，有几百M，用手机扫描下载不方便，这个时候不妨使用电脑扫描二维码然后下载，然后导入手机，这就很方便了。</p>
            <p>找到要扫描和识别的二维码图片，这里我就以百度的一个应用来示范。把这个二维码图片截图，保存下来。</p>
            <p>然后将图片拖放到本工具的白色区域，即可识别出二维码中的内容，非常方便！同时可以防止因为手机乱扫描二维码导致被骗！</p>
        </ui-article>
    </my-page>
</template>

<script>
    import UiArticle from "../../../vue-template/node_modules/yunser-ui-vue/src/article/index";
    export default {
        components: {UiArticle},
        data () {
            return {
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                window.load()
            }
        }
    }
</script>

<style lang="scss" scoped>
    .grid {
        background-image: -webkit-linear-gradient(top, transparent 39px, rgba(200, 200, 200, 0.5) 40px), -webkit-linear-gradient(left, transparent 39px, rgba(200, 200, 200, 0.5) 40px);
        background-image: -moz-linear-gradient(top, transparent 39px, rgba(200, 200, 200, 0.5) 40px), -moz-linear-gradient(left, transparent 39px, rgba(200, 200, 200, 0.5) 40px);
        background-image: -o-linear-gradient(top, transparent 39px, rgba(200, 200, 200, 0.5) 40px), -o-linear-gradient(left, transparent 39px, rgba(200, 200, 200, 0.5) 40px);
        background-image: -ms-linear-gradient(top, transparent 39px, rgba(200, 200, 200, 0.5) 40px), -ms-linear-gradient(left, transparent 39px, rgba(200, 200, 200, 0.5) 40px);
        background-image: linear-gradient(top, transparent 39px, rgba(200, 200, 200, 0.5) 40px), linear-gradient(left, transparent 39px, rgba(200, 200, 200, 0.5) 40px);
        -webkit-background-size: 40px 40px;
        -moz-background-size: 40px 40px;
        background-size: 40px 40px
    }

    .body {
        position: relative;
        border: 1px solid #c3c3c3;
        background: #e9e9e9;
        overflow: auto;
        max-height: 500px;
        min-height: 200px
    }

    .body canvas {
        margin: 0 auto;
        display: block;
        border: 1px solid rgba(0, 0, 0, 0.5);
        background: #fff
    }

    .body .dropper {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0
    }

    .body .dropper h2 {
        margin: 5% auto 0;
        text-align: center
    }

    div.browser label {
        background-color: #5a7bc2;
        padding: 5px 15px;
        color: white;
        padding: 6px 0;
        font-size: 40%;
        font-weight: bold;
        cursor: pointer;
        border-radius: 2px;
        position: relative;
        overflow: hidden;
        display: block;
        width: 260px;
        margin: 20px auto 0 auto;
        box-shadow: 2px 2px 2px #888
    }

    div.browser span {
        cursor: pointer
    }

    div.browser input {
        position: absolute;
        top: 0;
        right: 0;
        margin: 0;
        border: solid transparent;
        border-width: 0 0 100px 200px;
        opacity: .0;
        filter: alpha(opacity=0);
        -o-transform: translate(250px, -50px) scale(1);
        -moz-transform: translate(-300px, 0) scale(4);
        direction: ltr;
        cursor: pointer
    }

    div.browser label:hover {
        background-color: #427fed
    }
</style>
