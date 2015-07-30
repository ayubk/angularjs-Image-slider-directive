(function(angular) {
  'use strict';
angular.module('SO', ['akSlider'])  
.controller('ProductCtrl', function($scope){
      // objects array of all the images for each slider you want to use. 
        $scope.images3 = [
         {"sr":"http://lorempixel.com/output/technics-q-c-600-300-1.jpg"},
         {"sr":"http://lorempixel.com/output/technics-q-c-400-300-3.jpg"},
         {"sr":"http://lorempixel.com/output/technics-q-c-600-300-4.jpg"},
         {"sr":"http://lorempixel.com/output/technics-q-c-400-300-2.jpg"},
         {"sr":"http://lorempixel.com/output/technics-q-c-400-300-6.jpg"},
         {"sr":"http://lorempixel.com/output/technics-q-c-400-300-7.jpg"},
         {"sr":"http://lorempixel.com/output/technics-q-c-400-300-5.jpg"},
         {"sr":"http://lorempixel.com/output/technics-q-c-400-300-8.jpg"},
         {"sr":"http://lorempixel.com/output/technics-q-c-400-300-9.jpg"}         
      ]; 
    $scope.images = [
         {"sr":"http://lorempixel.com/output/fashion-q-c-600-400-1.jpg"},
         {"sr":"http://lorempixel.com/output/fashion-q-c-640-400-5.jpg"},
         {"sr":"http://lorempixel.com/output/fashion-q-c-400-300-7.jpg"},
         {"sr":"http://lorempixel.com/output/fashion-q-c-400-300-8.jpg"},
         {"sr":"http://lorempixel.com/output/fashion-q-c-400-300-3.jpg"},
         {"sr":"http://lorempixel.com/output/fashion-q-c-400-300-10.jpg"},
         {"sr":"http://lorempixel.com/output/fashion-q-c-400-300-2.jpg"}
      ]; 
      $scope.images2 = [
         {"sr":"http://lorempixel.com/output/nature-q-c-600-300-1.jpg"},
         {"sr":"http://lorempixel.com/output/nature-q-c-400-300-3.jpg"},
         {"sr":"http://lorempixel.com/output/nature-q-c-600-300-4.jpg"},
         {"sr":"http://lorempixel.com/output/nature-q-c-400-300-5.jpg"},
         {"sr":"http://lorempixel.com/output/nature-q-c-400-300-6.jpg"},
         {"sr":"http://lorempixel.com/output/nature-q-c-400-300-7.jpg"}
      ]; 
});
})(window.angular); 
