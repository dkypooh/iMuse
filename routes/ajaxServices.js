/**
 * Ajax 请求服务
 */

var chatModel = require('./api/DataModel');

exports.getActiveUsers = function(req,res){
	chatModel.Users.find({userName:req.query['id']},function(err,docs){
		res.json(docs);
	});
}
