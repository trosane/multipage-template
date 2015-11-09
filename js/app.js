// Create app
angular.module('myApp', ['ui.router'])

// Configure app
.config(function($stateProvider) {
  $stateProvider.state('landing', { // Landing page
  url:'/',
  templateUrl: 'templates/landing.html', // HTML fragment
  controller: 'HomeController', // Which controller 
  })
  .state('content', { // Landing page
  url:'/content',
  templateUrl: 'templates/content.html', // HTML fragment
  controller: 'ContentController', // Which controller 
  })
  .state('about', { // Landing page
  url:'/about',
  templateUrl: 'templates/about.html', // HTML fragment
  controller: 'AboutController', // Which controller 
  })
})

// Landing page controller: define $scope.number as a number
.controller('HomeController', function($scope){
  $scope.info = "Some info"
  $scope.number = 10;
})


// About page controller: define $scope.about as a string
.controller('AboutController', function($scope){
  $scope.info = "Some info"
  $scope.about = "Hello"
})


// Content controller: define $scope.url as an image
.controller('ContentController', function($scope){
  $scope.info = "Some info"
  $scope.url = "http://www.planwallpaper.com/static/images/Winter-Tiger-Wild-Cat-Images.jpg"
})


