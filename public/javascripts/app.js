angular.module('iMuse', ['chatRoom']).
	config(['$stateProvider','$urlRouterProvider'], function($stateProvider, $urlRouterProvider) {
		$stateProvider
		 .state('chatRoom', {  //建立房间
                  url: "/:HashId/chatroom",
                  abstract: true,
                  templateUrl: "/pages/chatroom.html",
                  // resolve: {
                  //   schedules: ['Product','$stateParams',function(Product,$stateParams){
                  //       return Product.getMonitorScheduleByProduct($stateParams.productId)
                  //   }],
                  //   allBrowsers:['Browser', function(Browser){return Browser.getAllBrowser()}]
                  // },
                  // controller: ['$scope', 'schedules', 'allBrowsers', function($scope, schedules, allBrowsers){
                  //     $scope.schedules = schedules;
                  //     $scope.allBrowsers = allBrowsers;
                  // }]
              })
             .state('userList',{
       		url:'/',
       		abstract:true,
       		templateUrl:'/pages/chatRoom.html'
             })
      })


angular.element(document).ready(function() {
      angular.bootstrap(document.body, ['iMuse']);
});


// angular.bootstrap(document.body, ['iMuse']);