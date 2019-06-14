import '@fancyapps/fancybox';


let app = {
    init() {
        func.jsCanvas();
    }
};

let func = {
    jsCanvas() {
      let canvas = document.getElementById('big-stars');
      let ctx = canvas.getContext('2d');

      let colors = document.getElementsByClassName('js-color');
      let bgCanvas = document.getElementById('bgCanvas');
  
      for(let i = 0; i < colors.length; i++) {
        colors[i].addEventListener('click', function() {
          var color = this.getAttribute('data-color');
          bgCanvas.style.backgroundColor = color;
        });
      };

      let whiteBg = document.getElementById('big-stars');

      whiteBg.addEventListener('click', function(){
        bgCanvas.style.backgroundColor = '#ffffff';
      })
    }
};

$(function () {

    app.init();

});
