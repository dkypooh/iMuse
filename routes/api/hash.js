var md5 = require("MD5");

exports.checkHash = function(_hash){
	var val='';
	return val;
}

exports.getValue = function(_hash){

}

/**
 * 名字来生成Hash值,再加入盐值
 * @param  {[type]} _name [description]
 * @return {[type]}       [description]
 */
exports.createHash = function(_name){
	var _salt = Number(new Date()) //时间戳当成盐值
		, _buf  = _name + _salt
	  , _hash = md5(_buf);
	return _hash;
	
}