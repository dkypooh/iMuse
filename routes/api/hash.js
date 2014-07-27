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
exports.createHash = function(){
	var _arr  = [].slice.call(arguments,0),
			_hash = '';
		_arr = _arr.sort();
	_arr.forEach(function(item){
		_hash += item;
	});
	return md5(_hash);
}