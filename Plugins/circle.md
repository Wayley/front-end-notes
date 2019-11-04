```html
<!doctype html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>百分比</title>
    <style type="text/css">
        .yuan {
            width: 200px;
            height: 200px;
            margin: 0 auto;
            box-sizing: border-box;
            padding-top: 20px;
            text-align: center;
            background-color: #f1f1f1;
            border-radius: 50%;
            position: relative;
        }

        .yuan_bl1,
        .yuan_bl2,
        .yuan_bl3,
        .yuan_bl4 {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            position: absolute;
            left: 0;
            top: 0;
        }

        .yuan_bl1,
        .yuan_bl2 {
            background-color: #0BF052;
            -webkit-box-shadow: 0 0 1px 1px #fff inset;
            box-shadow: 0 0 1px 1px #fff inset;
        }

        .yuan_bl3,
        .yuan_bl4 {
            background-color: #f1f1f1;
        }

        .yuan_bl1,
        .yuan_bl3 {
            clip: rect(0 200px 100px 0);
        }

        .yuan_bl2,
        .yuan_bl4 {
            clip: rect(100px 200px 200px 0);
        }

        .yuan_text {
            width: 160px;
            height: 160px;
            line-height: 160px;
            box-sizing: border-box;
            padding-left: 10px;
            margin: 0 auto;
            color: green;
            font-size: 36px;
            font-family: "PingFangSC-Thin", "sans-serif", "STHeitiSC-Light", "微软雅黑", "Microsoft YaHei";
            background-color: #fff;
            border-radius: 50%;
            position: relative;
        }
    </style>
    <script type="text/javascript" src="jquery-1.7.2.js"></script>
</head>

<body>
    <div class="yuan">
        <div class="yuan_bl1"></div>
        <div class="yuan_text">25°</div>
    </div>
    <script>
        $(function() {
            //初始化
            var bl = parseInt($('.yuan_text').html());
            var rotatenum = bl;
            if (bl > 180) {
                var blhtml = '';
                rotatenum = bl - 180;
                blhtml += '<div class="yuan_bl2">';
                blhtml += '<div class="yuan_bl4" style="-webkit-transform:rotate(' + rotatenum + 'deg);transform:rotate(' + rotatenum + 'deg);"></div>';
                blhtml += '</div>';
                //$('.yuan_bl1').remove($('.yuan_bl3'));
                $('.yuan_bl1').after(blhtml);
            } else {
                var blhtml = '';
                blhtml += '<div class="yuan_bl3" style="-webkit-transform:rotate(' + rotatenum + 'deg);transform:rotate(' + rotatenum + 'deg);"></div>';
                $('.yuan_bl1').append(blhtml);
            }
        })
    </script>
</body>

</html>
```


```html
<!doctype html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>百分比</title>
    <style type="text/css">
        /**分数圆环**/

        .ring {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: #f1f3f6;
            overflow: hidden;
            position: relative;
        }

        .ring>div {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0px;
            top: 0px;
            transform: rotate(0deg);
            border-radius: 50%;
        }

        .ring .g1 {
            background: #3fb13a;
            transform: rotate(0deg);
            clip: rect(0px 80px 80px 40px);
        }

        .ring .g2 {
            background: #3fb13a;
            transform: rotate(-72deg);
            clip: rect(0px 40px 80px 0px);
        }

        .ring .rest {
            background: #f1f3f6;
            clip: rect(0px 40px 80px 0px);
            display: none;
        }

        .ring .num {
            font-weight: bold;
            font-size: 32px;
            color: #3fb13a;
            position: absolute;
            width: 66px;
            height: 66px;
            left: 7px;
            top: 7px;
            background: #fff;
            text-align: center;
            line-height: 66px;
        }
        /*10-0分*/
    </style>
    <!--<script type="text/javascript" src="jquery-1.7.2.js"></script>-->
</head>

<body>
    <div id="circleRoot" class="ring c5">
    </div>
    <script>
        window.onload = function() {
            // console.log(1)
            var items = {
                rest: 'rest',
                id: 'g2',
                ring: '',
                sum: 360,
                x: "50%°"
            }

            function circle(obj) {
                var circleHtml = '';
                circleHtml += '<div class="g1"></div><div id="g2" class="g2"></div><div id="rest" class="rest"></div><div id="sum" class="num">1.0</div>';
                document.getElementById('circleRoot').innerHTML = circleHtml;
                var x = parseInt(obj.x),
                    sum = parseInt(obj.sum);

                document.getElementById('sum').innerHTML = x;
                var scale = x / sum;
                var g2 = document.getElementById(obj.id);
                var rest = document.getElementById(obj.rest);
                var deg = 0;
                if (scale < 0.5) {
                    deg = (scale * 360 - 180) + 'deg';
                    document.getElementById(obj.id).style.display = 'none';
                    document.getElementById(obj.rest).style.display = 'block';
                    document.getElementById(obj.rest).style.transform = 'rotate(' + deg + ')';
                } else {
                    deg = (scale * 360 - 360) + 'deg';
                    document.getElementById(obj.id).style.transform = 'rotate(' + deg + ')';
                }
            }
            circle(items)
        }
    </script>
</body>

</html>
```