/**
 * Ajax 请求处理
 * @type {[type]}
 */
var chatModel = require('./api/Mongoose_CRUD');
exports.queryUsers = function(req,res){
	chatModel.queryUsers(req.query['id'],function(_err,_data){
		if(_err){
			console.log(_err);
			return;
		}
		res.json(_data);
	})
}

exports.addUser = function(req,res){
	// var _buff = req.body;
	// var docs = new chatModel.Users(userName:'Lily',friends:['tony','tom','lucy']);
	// 

}

exports.delUser = function(){
	
}