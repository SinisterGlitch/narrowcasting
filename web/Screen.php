<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <script src="/foundation/js/vendor/jquery.js"></script>
    <style>
        html,body {
            background-color:black;
            margin:0px;
            padding:0px;
        }
        #slideshow {
            width: 100%;
            height: 100%;
        }

        #slideshow > div {
            position: absolute;
            top: 0px;
            left: 0px;
        }
    </style>
    <script>
    $(function() {
        url = 'http://localhost:10088/app_dev.php/webservice/screen/14/key/7s18ebnhufk8g08o4w08840kcgw0wg8';
        $.getJSON(url, function (data) {
            $.each(data, function (key, value) {
                $( "#slideshow" ).append('<div><img src="' + value.path + '" style="display:block"/></div>');
            });
        });
    });

    $(function() {
        $("#slideshow > div:gt(0)").hide();

        setInterval(function() {
            $('#slideshow > div:first')
                .fadeOut(3000)
                .next()
                .fadeIn(3000)
                .end()
                .appendTo('#slideshow');
        },  3000);
    });
    </script>
</head>
<body>
<div id="slideshow"></div>
</body>
</html>