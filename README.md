# angularjs-Image-slider-directive

AngularJS Image slider directive - Easy to use image slider  with thumbnails, infinite number of images and multiple image sliders on a page.

I have seen lot of good image sliders, but I want a very simple to use. So I created one and want to share with others, who also looking for a simple and easy to use image slider directive, that they can also modiy easily. 

I love simplicity, and I want to make things simpler. 


Defaul Options:

  Show thumbnails:  true.
  
  Duration of each slide stay:  5 seconds.
  
  Animation style is: Zoom .
  
  
The CSS is very simple and are few lines, so you can include it in a style tag, no need to have a separate CSS file.  
You can add your own animation classes if you want.

Animation classes included are:

zoom  - the default class
fade 
slideleft
slideright
slideup
slidedown


Usage:

HTML: 

  Simplest form:  
    This will work fine with all the default options.
    
   <ak-slider id="b1"  images="{{images3}}"></ak-slider> 
   
   if you want the slider without thumbnail then set the thumnail to false:
   
   <ak-slider id="b1"  images="{{images3}}" thumbnail="false"></ak-slider> 
   
   For having differnt style of animation other than zoom and delay less or greater than 5 seconds: 
   
    <ak-slider id="b1"  images="{{images3}}" delay="4000" anim="slideup"></ak-slider>  
   
 

If you are using more than one slider on a page then you must give each tag a unique id attribute.


JS:

  Include the akSlider module name as dependency in your main app module:
  
    var app = angular.module('SO', ['akSlider']);
    
    Provide an array of objects containing the images, for each slider in the following format:
    
    $scope.myImages = [
         {"sr":"http://lorempixel.com/output/technics-q-c-600-300-1.jpg"},
         {"sr":"http://lorempixel.com/output/technics-q-c-400-300-3.jpg"},
         {"sr":"http://lorempixel.com/output/technics-q-c-600-300-4.jpg"}
         ];
    
    Note:  the Id "sr" is required.
    
  Thats all !...
  

I hope you will enjoy it, I will appreciate your feedback.

Happy sliding :)

Ayub


