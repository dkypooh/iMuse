/**
 * Ajax 请求服务
 */

var model = require('./api/DataModel');
exports.getActiveUsers = function(req,res){
	var _obj = model.ActiveUsers();
	res.json(_obj);
}