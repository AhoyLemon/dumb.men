// jshint -W117
var app = new Vue({
  el: '#app',
  data: {
    men: dumbMen,
    filePath: 'img/men/',
    raindrops: []
  },
  methods: {
    newRaindrop: function() {
      var self = this;
      var r = Math.floor(Math.random()*self.men.length);

      var sizeDiff = ((Math.floor(Math.random() * 100) + 1) / 100);
      
      var s = 0.3 + (sizeDiff * 0.7);
      var tX = (-100 + (Math.random() * 200)) + '%';
      var aD = 7 - (3 * sizeDiff) + 's';
      var rot = (-4 + (Math.random() * 8)) + 'deg';
      var shd = Math.floor(30 * sizeDiff) + 'px'
      
      var drop = {
        file: self.men[r].file,
        //scale: t,
        seconds: {
          animationDuration: aD,
          zIndex: (sizeDiff * 1000)
        },
        styleObject: {
          transform: 'translateX('+tX+') scale('+s+') rotate('+rot+')', 
          boxShadow: '0 0 '+shd+' rgba(0,0,0,0.5)'
        }
      };
      self.raindrops.push(drop);
      if (self.raindrops.length > 20) {
        //self.raindrops.shift();
      }
    }
  },
  mounted: function () {
    var self = this;
    //self.newRaindrop();
    self.newRaindrop();
    function doSomething() {}

    (function loop() {
      var rand = Math.round(Math.random() * (100  - 200)) + 200;
      setTimeout(function() {
        //alert('A');
        self.newRaindrop();
        loop();  
      }, rand);
    }());
  }
});