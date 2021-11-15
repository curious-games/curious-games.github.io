<template>
  <div id='container'></div>
</template>

<script>
  /* eslint-disable */
  import bodymovin from 'bodymovin';
  export default { 
    mounted () {

      var winHeight = window.innerHeight;
      var animDuration = winHeight * 4;
      var animationData;

      animationData = (function () {
          var json = null;
          $.ajax({
              'async': false,
              'global': false,
              'url': "/img/sequence/robodog-md/data.json",
              'dataType': "json",
              'success': function (data) {
                  json = data;
              }
          });
          return json;
      })(); 

      var animData = {
        container: document.getElementById('container'),
        renderer: 'html',
        loop: false,
        autoplay: false,
        animationData: animationData,
      };

      var anim = bodymovin.loadAnimation(animData);
      window.addEventListener('scroll', function() {
        animatebodymovin(animDuration, anim);
      });

      function animatebodymovin(duration, animObject) {
        var scrollPosition = window.scrollY;
        var maxFrames = animObject.totalFrames;
        var frame = (maxFrames / 100) * (scrollPosition / (duration / 100));
        animObject.goToAndStop(frame, true);
      }

      function loadJSON(callback) {   

        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', '/img/sequence/robodog-md/data.json', true);
        xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
            console.log(xobj.responseText)
          }
        };
        xobj.send(null);  
      }


    }

  }
</script>


<style scoped>
  body, html{
    margin: 0;
    width: 100%;
    height: 500vh;
    background-color: #e4e4e4;
    color: #212121;
    font-family: sans-serif;
    scroll-behavior: smooth;
  }

  #container{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  .trigger {
    position: fixed;
    z-index: 30;
    bottom: 2vh;
    right: 20vw;
    transform: translateX(-50%);
    width: 90vw;
    padding: 15px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 0.7em;
  }
  p {
    text-align: center;
    position: fixed;
    width: 100%;
    bottom: 0;
    font-size: 11px;
  }
</style>