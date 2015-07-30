(function(angular) {
  'use strict';
angular.module('akSlider', [])
  .directive('akSlider',  function() {
    return { scope: {},
      template: '<div class="container">'+
          '<img src="{{mainImg}}" id="topImage" class="topImage" />'+
        '</div>'+
        '<div  ng-show="thumbnails">'+
          '<div ng-repeat="image in images track by $index">'+
            '<div class="col-md-2 col-sm-3 col-xs-4 thumbBox">'+
              '<img ng-src="{{image.sr}}" class="thumb" id="img{{thumbID+$index}}" ng-click="setTopImage(\'img\'+thumbID+$index)" />'+
            '</div>'+
          '</div>'+
      '</div>',
 
      link: function(scope, element, attr) {

        var interval; //duration for each slide staying on. Using the delay attribute's value if given else 5000. 
        interval= attr.delay || 5000;  // delay after each iteration 
        
        var imgX=0; 
        scope.thumbID=attr.id;
        
        // the thumnail attribute, default is true to show it.
        scope.thumbnails = attr.thumbnail=="false" ? 0: 1; 
        
        var tt = document.getElementById(attr.id);
        scope.topImg = tt.querySelectorAll('img')[0];

        
        scope.images = JSON.parse(attr.images);
        
        var ti= scope.images.length-1;
        scope.mainImg = scope.images[ti].sr;
        
        // set the defaul animation class to zoom, if none is given
        scope.anim = attr.anim || 'zoom';
        scope.topImg.classList.add(scope.anim);
        
       scope.setImage = function(img,id){
          scope.oldImg = scope.topImg.getAttribute('src');
          document.getElementById(id).setAttribute('src',scope.oldImg);
          scope.topImg.setAttribute('src',img);
     };        
     
     setTimeout(function () { // wait for DOM to load completly

           scope.imagesTag=tt.querySelectorAll('.thumbBox img');
           scope.cntr=scope.images.length;  //total number of images

          scope.setTopImage = function(id){  // set top image if a thumb is clicked 
            var imgNew=document.getElementById(id).getAttribute('src');
            scope.setImage(imgNew,id);
             };          
       
         function nextImg(){  
           if(imgX<1){
             scope.setImage(scope.images[imgX].sr,scope.imagesTag[imgX].id);
           } else {
             scope.setImage(scope.images[imgX].sr,scope.imagesTag[imgX-1].id);
           }  
           imgX++;
           if ( imgX+1 > scope.cntr ) {
             imgX = 0; //set start image to 0 if the counter is reached to end. 
           } 
          }
         //animationiteration  -- basic Idea from David Walsh & Modernizer
         
         function whichIterationEvent(){
           var t, el = document.createElement("fakeelement");

           var animations = {
             "animation"      : "animationiteration",
             "OAnimation"     : "oAnimationIteration",
             "MozAnimation"   : "animationiteration",
             "WebkitAnimation": "webkitAnimationIteration"
           }
           for (t in animations){
             if (el.style[t] !== undefined){
               return animations[t];
             }
           } 
         }
         var iterationEvent = whichIterationEvent();
         
         // loop through images and show 
         iterationEvent && element.on(iterationEvent, function() {
              scope.topImg.classList.remove(scope.anim); // for making delay to work between iterations
            setTimeout(function(){  // need the delay, as there is no delay option between each iteration  
                scope.topImg.classList.add(scope.anim);
                nextImg();
            }, interval);  

         }); 

      },1000);  // DOM waiting
    
      } //link
    };
  });
})(window.angular);
