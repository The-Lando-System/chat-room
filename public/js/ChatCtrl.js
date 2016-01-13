myApp.controller('chatController', function($scope) {
  $scope.welcome = 'Chat Room!';

  $scope.message = '';
  $scope.sendMessage = function(){
    console.log('sup');
    socket.emit('chat message', $scope.message);
    $scope.message = '';
  };

  $scope.messages = [];
  var socket = io();
  socket.on('chat message', function(msg){
    console.log('hey');
    $scope.messages.push(msg);
    $scope.$apply();
  });

});