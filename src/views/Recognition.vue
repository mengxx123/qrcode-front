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
    </my-page>
</template>

<script>
    export default {
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
