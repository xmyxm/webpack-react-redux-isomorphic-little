'use strict';

//import common from '../../common.json';

exports.layout = function(content, data) {
    return `
    <!DOCTYPE html>
    <html lang="en" style="font-size: 12px;">
    <head>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <title>前端栈</title>
        <meta name="description" content=""/>
        <meta name="format-detection" content="telephone=no">
        <meta name="format-detection" content="email=no"/>
        <link rel="stylesheet" type="text/css" href="http://qqweb.top/dist/css/wangEditor.css">
        <link href="http://127.0.0.1:9000/css/index.css" rel="stylesheet">
        <script type="text/javascript">
            (function(doc, win) {
                var fontSize,docEl = doc.documentElement,
                    resizeEvt = 'onorientationchange' in window ? 'orientationchange' : 'resize',
                    recalc = function() {
                        var clientWidth = docEl.clientWidth;
                        if (!clientWidth) return;
                        fontSize = 10 * (clientWidth / 320);
                        if(fontSize && fontSize <= 16){
                            docEl.style.fontSize = fontSize + 'px';
                        }
                    };
                if (!doc.addEventListener) return;
                win.addEventListener(resizeEvt, recalc, false);
                doc.addEventListener('DOMContentLoaded', recalc, false);
            })(document, window);
        </script>
    </head>
    <body>
        <div id="app"><div class="blogbox">${content}</div></div>
        <script type="text/javascript">
            window.__REDUX_DATA__ = '${JSON.stringify(data).replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")}';
        </script>
        <script type="text/javascript" src="http://127.0.0.1:9000/js/manifest.js"></script>
        <script type="text/javascript" src="http://127.0.0.1:9000/js/common.js"></script>
        <script type="text/javascript" src="http://127.0.0.1:9000/js/index.js"></script>
    </body>
    </html>
`;
};




















