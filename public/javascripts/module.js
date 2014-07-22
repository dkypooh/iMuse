/**
*  Module
*
* Description
*/



// 服务功能模块
(function(){
	var _chatservice = angular.module('chatServices',[]);
	_chatservice.factory('msgService', ['$http', function($http){
		return {
			_$getActiveUsers:function(){
			  return $http({
            method: 'GET',
            //params:{id:testId, type:type},
            cache:true,
            url: '/getActiveUsers'
        }).then(function(response){
            return response.data;
        }, function(response){
            return [];
        });
			}
		}
	}]);

	_chatservice.service('UserListService', ['$http', function(){
		this._$getAllUsers = function(){

		};

	}]);

})();


// 指令功能模块
(function(){
	var _chatDirectives = angular.module('chatDirectives',[]);
	_chatDirectives.directive('search', ['$scope', function(){
		// Runs during compile
		return {
			// name: '',
			// priority: 1,
			// terminal: true,
			// scope: {}, // {} = isolate, true = child, false/undefined = no change
			// controller: function($scope, $element, $attrs, $transclude) {},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			// templateUrl: '',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {
				
			}
		};
	}]);

})();

// // 过滤功能模块
(function(){
	var _chatfilter = angular.module('chatFilters',[]);

	_chatfilter.filter("search",['$filter',function($filter){
		return function(_input){

		}
	}])

})();


//  chatRoom 页面功能模块
(function(){
	var _chat = angular.module('chatRoom',['chatServices']);
	_chat.controller('activeUsersCtrl', ['$scope','msgService',function($scope,services){
		  $scope.list = services._$getActiveUsers();
			//$scope.list = "test"
	}]);

	_chat.controller('chatRoomCtrl', ['$scope', function($scope){
		
	}]);

	_chat.controller('recieveMsgCtrl', ['', function(){
		
	}]);

	_chat.controller('sendMsgCtrl', ['', function(){
		
	}]);

})();