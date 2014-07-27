/**
 * Mongoose CRUD操作
 * 
 */

var dbModel = require('./DataModel');

exports.queryUsers = function(_userId,_cb){ //查询某个用户的所有好友
	dbModel.Users.find({userName:_userId},_cb);
}

exports.getAllUsers = function(_cb){
	dbModel.Users.find(_cb);
}

exports.addUser = function(_data,_cb){
	var collection = new dbModel.Users({userName:_data.username,friends:_data.friends});
	collection.save(_cb);
}

exports.updUser = function(_data,_cb){
	// dbModel.Users.findOneAndUpdate({userName:_data.userId},{userName})
}
exports.delUsers = function(_userids){
	_userids.forEach(function(item){
		dbModel.Users.findOneAndRemove({userName:item},function(err){
			console.log(err);
		});
	})
}

exports.delFriends = function(_userId,_delObj){
	//dbModel.Users.findOne({'userName':})
}

exports.addFriends = function(_userId){

}

