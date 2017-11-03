// jshint -W117
var app = new Vue({
  el: '#app',
  data: {
    men: dumbMen,
    masks: [ 'heart-1', 'heart-2', 'heart-3', 'heart-4' ],
    filePath: 'img/men/squares/',
    raindrops: [],
    recentMen: []
  },
  methods: {
    newRaindrop: function() {
      var self = this;
      var r = Math.floor(Math.random()*self.men.length);
      
      if (self.recentMen.includes(self.men[r].file)) {
        self.newRaindrop();
      } else {
        self.recentMen.push(self.men[r].file);
        if (self.recentMen.length > 22) {
          self.recentMen.shift();
        }
      }
      
      var dropClass = self.masks[Math.floor(Math.random()*self.masks.length)];

      var sizeDiff = ((Math.floor(Math.random() * 100) + 1) / 100);
      //alert(sizeDiff);
      
      var minSize = 0.05;
      var maxSize = 1.05;
      
      var s = minSize + (sizeDiff * (maxSize - minSize));
      var tX = (-40 + Math.floor(Math.random() * 80)) + 'vw';
      
      // Fall speed
      var minSpeed = 2;
      var maxSpeed = 18;
      var aD = maxSpeed - ((maxSpeed - minSpeed) * sizeDiff) + 's';
      
      var rot = (-16 + (Math.random() * 32)) + 'deg';
      var shd = Math.floor(30 * sizeDiff) + 'px';
      
      var drop = {
        file: self.men[r].file,
        class: dropClass,
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
        $('#Raindrops .drop:first-child').remove();
      }
      
    }
  },
  mounted: function () {
    var self = this;
    //self.newRaindrop();
    self.newRaindrop();
    function doSomething() {}

    (function loop() {
      var rand = Math.round(Math.random() * (1600  - 600)) + 600;
      setTimeout(function() {
        //alert('A');
        self.newRaindrop();
        loop();  
      }, rand);
    }());
  }
});