$(function () {

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


});
