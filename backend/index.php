<html lang="en" class=" -webkit-">
<head>
    <meta charset="UTF-8">
    <title>Kult Hookah & Craft</title>

    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    <style>
        #myCanvas {
            height: 50%;
            min-width: 1600px;
            width:100%;
            position: absolute;
            bottom: 0;
        }

        body {
            background: black url(https://s.cdpn.io/16327/texture_bg.jpg) no-repeat 50% 0px;
        }

        div {
            font-family: 'Exo 2', sans-serif;
            font-size: 24px;
            text-align: center;
            color: white;
            position: absolute;
            height: 100px;
            width: 200px;
            top: 50%;
            left: 50%;
            margin-top: -50px;
            margin-left: -100px;
        }

        div p {
            font-size: 15px;
        }
        /* Hello world */
        #bubble {
            font-size: 25px;
            font-family: Comic Sans MS, Verdana, monospace;
            color: #FFFFFF;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <!-- <div id="bubble"></div> -->
    <div class="buttons"id="buttons" style="z-index:2; margin-top: -155px;">
        <a class="btn white" id="waiter">Вызвать официанта</a>
        <a class="btn white" id="hookah">Вызвать кальянщика</a>
    </div>
    <div id="stub" style="display:none">
        <img src="http://hookah.s2u.su/img/RWFZoK_UWXc.png" alt="" style="max-width:200px; margin-top: -155px;">
        <h3 style="font-color: #ffffff">Мы уже в пути...</h3>
    </div>
    <canvas id="myCanvas" height="200" width="800" style="z-index:0;"></canvas>
    <script>
        canvasWidth = 2100;
        canvasHeight = 250;

        pCount = 0;


        pCollection = new Array();

        var puffs = 1;
        var particlesPerPuff = 2000;
        var img = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/85280/smoke2.png';

        var smokeImage = new Image();
        smokeImage.src = img;

        for (var i1 = 0; i1 < puffs; i1++)
        {
        var puffDelay = i1 * 10; //300 ms between puffs

        for (var i2 = 0; i2 < particlesPerPuff; i2++)
        {
            addNewParticle(i2 * 50 + puffDelay);
        }
        }


        draw(new Date().getTime(), 10);



        function addNewParticle(delay)
        {

        var p = {};
        p.top = canvasHeight;
        p.left = randBetween(-200, 800);

        p.start = new Date().getTime() + delay;
        p.life = 8000;
        p.speedUp = 30;


        p.speedRight = randBetween(0, 20);

        p.rot = randBetween(-1, 1);
        p.red = Math.floor(randBetween(0, 255));
        p.blue = Math.floor(randBetween(0, 255));
        p.green = Math.floor(randBetween(0, 255));


        p.startOpacity = .3;
        p.newTop = p.top;
        p.newLeft = p.left;
        p.size = 200;
        p.growth = 10;

        pCollection[pCount] = p;
        pCount++;


        }

        function draw(startT, totalT)
        {
        //Timing
        var timeDelta = new Date().getTime() - startT;
        var stillAlive = false;

        //Grab and clear the canvas
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.width, c.height);
        c.width = c.width;

        //Loop through particles
        for (var i = 0; i < pCount; i++)
        {
            //Grab the particle
            var p = pCollection[i];

            //Timing
            var td = new Date().getTime() - p.start;
            var frac = td / p.life;

            if (td > 0)
            {
            if (td <= p.life)
            {stillAlive = true;}

            //attributes that change over time
            var newTop = p.top - p.speedUp * (td / 1000);
            var newLeft = p.left + p.speedRight * (td / 1000);
            var newOpacity = Math.max(p.startOpacity * (1 - frac), 0);

            var newSize = p.size + p.growth * (td / 1000);
            p.newTop = newTop;
            p.newLeft = newLeft;

            //Draw!
            ctx.fillStyle = 'rgba(150,150,150,' + newOpacity + ')';
            ctx.globalAlpha = newOpacity;
            ctx.drawImage(smokeImage, newLeft, newTop, newSize, newSize);
            }
        }



        //Repeat if there's still a living particle
        if (stillAlive)
        {
            requestAnimationFrame(function () {draw(startT, totalT);});
        } else

        {
            clog(timeDelta + ": stopped");
        }
        }

        function randBetween(n1, n2)
        {
        var r = Math.random() * (n2 - n1) + n1;
        return r;
        }

        function randOffset(n, variance)
        {
        //e.g. variance could be 0.1 to go between 0.9 and 1.1
        var max = 1 + variance;
        var min = 1 - variance;
        var r = Math.random() * (max - min) + min;
        return n * r;
        }
    </script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="js/jquery.bubble.text.js"></script>
    <script src="js/script.js"></script>
    <script>
    $('.buttonContainer').click(function(){
    if($('.buttonContainer').hasClass('active')){
        $(this).removeClass('active');
        $('.complete').removeClass('fadein');
        $('#counter').fadeOut(100);
        $('.ball').fadeOut(100);
        count().stop;
    } else{
        $(this).addClass('active');
        $('#counter').fadeIn(200);
        $('.ball').fadeIn(200);
        count();
    }
});

//Loading
function count(){
    $({countNum: $('#counter').text()}).animate({countNum: 100}, {
      duration: 5000,
      easing:'linear',
      step: function() {
         $('#counter').text(Math.floor(this.countNum) + '%');
      },
      complete: function() {
         $('#counter').fadeOut(200);
         $('.complete').addClass('fadein');
         $('.ball').fadeOut(200);
          $('#button').fadeOut(100);
          setTimeout(function() {
               $('.buttonContainer').removeClass('active');
              $('.complete').removeClass('fadein');
              $('#button').fadeIn(200);
        }, 1000);
      }
    });
}
// Hidden div onclick button
document.getElementById('waiter').onclick = function() {
    document.getElementById('buttons').style.display = 'none';
    document.getElementById('stub').style.display = 'block';
    resCall("Официанта", getAllUrlParams().table);
}
document.getElementById('hookah').onclick = function() {
    document.getElementById('buttons').style.display = 'none';
    document.getElementById('stub').style.display = 'block';
    resCall("Кальянщика", getAllUrlParams().table);
}
//JSON respone
var resCall = function(staff, table){
    $.ajax({
        url: '/api/index.php',
        data: 'staff=' + staff + '&table=' + table,
        method: 'POST',
        dataType: 'json',
        success: function(data){
            console.log(data);
        }
    });
}
//Get param url
function getAllUrlParams(url) {

// извлекаем строку из URL или объекта window
var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

// объект для хранения параметров
var obj = {};

// если есть строка запроса
if (queryString) {

  // данные после знака # будут опущены
  queryString = queryString.split('#')[0];

  // разделяем параметры
  var arr = queryString.split('&');

  for (var i=0; i<arr.length; i++) {
    // разделяем параметр на ключ => значение
    var a = arr[i].split('=');

    // обработка данных вида: list[]=thing1&list[]=thing2
    var paramNum = undefined;
    var paramName = a[0].replace(/\[\d*\]/, function(v) {
      paramNum = v.slice(1,-1);
      return '';
    });

    // передача значения параметра ('true' если значение не задано)
    var paramValue = typeof(a[1])==='undefined' ? true : a[1];

    // преобразование регистра
    paramName = paramName.toLowerCase();
    paramValue = paramValue.toLowerCase();

    // если ключ параметра уже задан
    if (obj[paramName]) {
      // преобразуем текущее значение в массив
      if (typeof obj[paramName] === 'string') {
        obj[paramName] = [obj[paramName]];
      }
      // если не задан индекс...
      if (typeof paramNum === 'undefined') {
        // помещаем значение в конец массива
        obj[paramName].push(paramValue);
      }
      // если индекс задан...
      else {
        // размещаем элемент по заданному индексу
        obj[paramName][paramNum] = paramValue;
      }
    }
    // если параметр не задан, делаем это вручную
    else {
      obj[paramName] = paramValue;
    }
  }
}

return obj;
}
</script>
</body>
</html>