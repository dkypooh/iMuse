/**
*  Module
* Description
*/

// 服务功能模块
(function(){
	var _chatservice = angular.module('chatServices',[]);
	_chatservice.factory('userService', ['$http', function($http){
		return {
			_$getActiveUsers:function(_userId){
			  return $http({
            method: 'GET',
            params:{id:_userId},
            cache:true,
            url: '/getActiveUsers'
        }).then(function(response){
            return response.data;
        }, function(response){
            return [];
        });
			},
			_$getAllUsers:function(){
				return $http({
            method: 'GET',
            //params:{id:testId, type:type},
            cache:true,
            url: '/getAllUsers'
        }).then(function(response){
            return response.data;
        }, function(response){
            return [];
        });
			}
		}
	}]);
	// 全局变量
  _chatservice.value('commonVALUE',{sockets:{},nowHash:'',userName:'',recvMsg:[]}); //公用值

  // 公共函数服务
  _chatservice.factory('utilFunction',function(){
		return {
			_$createHash:function(){
				var _arr = [].slice.call(arguments,0),
						_str = ""; 
				_arr = _arr.sort(); //顺序无关
				_arr.forEach(function(item){
					_str +=item;
				})
				return md5(_str);
			}
		}
  });

  // 消息推送服务
  _chatservice.factory('msgService', ['commonVALUE',function($comm){
  	return {
  		_$sendMsg:function(_hash,_buff){
  			if(!$comm.sockets[_hash]){
  				console.log("还没有创建聊天Socket");
  				return;
  			}
  			$comm.sockets[_hash].emit('client send message',{user:$comm.userName,body:_buff}); //发送消息
  		},
  		_$recvMsg:function(){

  		}
  	}
  }]);


})();


// 指令功能模块
(function(){
	var _chatDirectives = angular.module('chatDirectives',[]);
	_chatDirectives.directive('search', ['$scope', function(){ // 搜索指令
		return {
			link: function($scope, iElm, iAttrs, controller) {			
			}
		};
	}]);

	_chatDirectives.directive('recMsg',function(){ //接受消息指令
		return {
			restrict:'AE',
			replace:'true',
			template:'<h3>hello</h3>',
			link:function($scope, iElm, iAttrs, controller){
				iElm.bind('click',function(){
					alert("sss");
				})
			}
		}
	})

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
	var _chat = angular.module('chatRoom',['chatServices','chatDirectives']);

	//头部控制器
	_chat.controller('headerCtrl', ['$scope', function($scope){
		
	}])
	
	//主页控制器
	_chat.controller('indexCtrl',['$scope','$rootScope','commonVALUE',function($scope,$rootScope,commonVALUE){
		//commonVALUE.userName = $scope.userId;
	}]); 

	// 聊天页控制器
	_chat.controller('chatCtrl', ['$scope','userService',function($scope){
		 
	}]);

	_chat.controller('activeUsersCtrl', ['$scope','$rootScope','userService','commonVALUE','utilFunction',function($scope,$rootScope,services,$comm,util){
		  var _obj = services._$getActiveUsers($scope.userId);
		  $comm.userName = $scope.userId; //获取用户Id
		  _obj.then(function(data){
		  	$scope.list = data[0]['friends'];
		  });
		  //点击建立连接
		  $scope.onConnect = function(_item){ //建立连接Socket 连接
	  		var trimData = function(_data){
					var ret = {};
					if(_data.user == $comm.userName){
						ret.p = 'left'
					}else{
						ret.p = 'right'
					}
					ret.msg = _data.body;
					console.log('ret');
					console.log(ret);
					return ret;
				}
		  	
		  	$rootScope.hostName = _item;
				$comm.nowHash = util._$createHash(_item,$comm.userName); // Hash唯一标示
				if(!$comm.sockets[$comm.nowHash]){
					console.log('create connection')
					$comm.sockets[$comm.nowHash] = io.connect('http://localhost');
					$comm.sockets[$comm.nowHash].emit('client create private room',{hash:$comm.nowHash,user:_item}); //加入房间
				  $comm.sockets[$comm.nowHash].on("new member add",function(data){
				 		console.log(data);
				 	});
				 	$comm.sockets[$comm.nowHash].on('chating',function(data){
						$rootScope.recMsgs.push(trimData(data));
						$rootScope.$apply();
					})
				}else{
					console.log("你已经建立过房间了,不需要再建立");
				}
			}
	}]);

	_chat.controller('recieveMsgCtrl', ['$scope','msgService','$rootScope','commonVALUE',function($scope,services,$rootScope,$comm){
		// 	// $scope._temp = $comm.recvMsg;
		// 	// $scope.$watch('_temp',function(){
		// 	// 	$scope.recMsgs = $comm.recvMsg;
		// 	// },true)
		// $scope.recMsgs = $rootScope.recMsgs;
		//$scope.recMsgs = [{p:'left',msg:'自己的消息'},{p:'left',msg:'自己的消息'},{p:'right',msg:'别人的消息'}]
	}]);

	_chat.controller('sendMsgCtrl', ['$scope','msgService','$rootScope','commonVALUE',function($scope,services,$rootScope,$comm){
		$scope.msgBody = "";
	
		$scope.send = function(){
				if(!$comm.nowHash){
					console.log("请先选择用户!");
					return;
				};
				console.log('send message')
				services._$sendMsg($comm.nowHash,$scope.msgBody);	
				
		
		}
	}]);

	// 用于列表控制器
	_chat.controller('trendCtrl', ['$scope', function($scope){
		$scope.info = "没有选择用户";
	}]);

	_chat.controller('usersCtrl', ['$scope','userService','commonVALUE','utilFunction',function($scope,services,commonVALUE,util){
		// $scope.usersList = services._$getAllUsers();
	}])

	// 登入控制器
	_chat.controller('loginCtrl',['$scope','$location','userService',function($scope,$location,services){
		$scope.login = function(){
			//改变 URL
			location.hash = "#/"+$scope.loginName+"/chat";
		}
	}])

})();





