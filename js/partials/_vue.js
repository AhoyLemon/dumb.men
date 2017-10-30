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

      var sizeDiff = ((Math.floor(Math.random() * 100) + 1));
      
      var s = (3 * (sizeDiff / 100));
      
      //var s = 0.35 + ((Math.random() * 60) / 100);
      //var s = sizeDiff;
      
      var tX = (-100 + (Math.random() * 200)) + '%';
      //var tY = (-100 + (Math.random() * 200)) + '%';
      //var aD = (Math.floor((Math.random() * 600) + 260) / 100) + 's';
      var aD = 3 + 's';
      
      
      
      
      
      
      var drop = {
        file: self.men[r].file,
        //scale: t,
        seconds: {
          animationDuration: aD
        },
        styleObject: {
          transform: 'translateX('+tX+') scale('+s+')'
          //animationDuration: aD
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
    function doSomething() {}

    (function loop() {
      var rand = Math.round(Math.random() * (1800 - 200)) + 200;
      setTimeout(function() {
        //alert('A');
        self.newRaindrop();
        loop();  
      }, rand);
    }());
  }
});