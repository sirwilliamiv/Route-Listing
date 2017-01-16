// console.log("hey"
//

var app = angular.module('bestHighways', ['ngRoute'])


//Routes
app.config( function($routeProvider) {
  $routeProvider
  .when('/blueridgeparkway', {
    controller:'FirstCtrl',
    templateUrl:'route1.html'
  })
  .when('/route66', {
    controller: 'SecondCtrl',
    templateUrl: 'route2.html'
  })
  .when('/', {
    controller: 'ListingCtrl',
    templateUrl: 'listing.html'
  })
  .when('/404', {

    templateUrl: '404.html'
  })
  .otherwise({
    redirectTo: '/404'
  })

})


//Controllers
app.controller('FirstCtrl', function($scope) {
  $scope.highwayName = "Blue Ridge Parkway"
  $scope.highwayDescription = "The Blue Ridge Parkway is a National Parkway and All-American Road in the United States, noted for its scenic beauty."
})

app.controller('SecondCtrl', function($scope) {
  $scope.highwayName = "Route 66"
  $scope.highwayDescription = "U.S. Route 66, also known as the Will Rogers Highway, the Main Street of America or the Mother Road, was one of the original highways within the U.S. Highway System."
})

app.controller('ListingCtrl', function($scope) {
  // $scope.blue = Blue Ridge Parkway
  // $scope.route = Route 66
})
