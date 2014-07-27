angular.module('iMuse', ['ui.router','chatRoom'])
  .run(['$rootScope', '$state', '$stateParams', function ($rootScope,   $state,   $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }]).
	config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .when('', '/login');
		$stateProvider
      .state('chatRoom',{
    		url:'/:userId/chat',
 		    templateUrl:'/pages/chatroom.html',
        controller: ['$scope','$stateParams','$rootScope',function($scope, $stateParams,$rootScope){
          $scope.userId = $stateParams.userId;
          $rootScope.hostName = $stateParams.userId;
          $rootScope.recMsgs = [];
        }]
      })
      .state('userList',{
        url:'/:userId/users',
        templateUrl:'/pages/trend.html'
      })
      .state('index',{
        url:'/login',
        templateUrl:'/pages/login.html'
      })
  }])




/**
 * 程序启动
 * @return {[type]} [description]
 */
angular.element(document).ready(function() {
  angular.bootstrap(document.body, ['iMuse']);
});


/**
 * socket.io 建立连接
 */




