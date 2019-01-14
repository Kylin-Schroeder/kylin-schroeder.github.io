var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope, $window) {
  $scope.links = [
    {'link':'https://www.broadcastify.com/listen/feed/25047/web'},
        {'link':'https://www.broadcastify.com/listen/feed/22617/web'},
            {'link':'https://www.broadcastify.com/listen/feed/29605/web'}
              {'link':'https://www.broadcastify.com/listen/feed/25602/web'}


    ];
  
      $scope.openLinks = function(){
        var urls = '';
        angular.forEach($scope.links, function(item){
            $window.open("redirect.html?" + item.link);
            
    });

  };
  
  
});
