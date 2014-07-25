/**
 * mongoose数据库 Schema Model 
 * 
 */
/************************连接数据库***********************************/
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var conn = mongoose.connect("mongodb://127.0.0.1:27017/chatDB",function(err){
	if(err){
		console.log(err);
	}else{
		console.log("Connected to Mongodb");
	}
});


/**
 *  用户Schema
 */
exports.UsersSchema = new Schema({
	userName:String,
	friends:[String]
});


/**
 *  用户模型
 * @type {[type]}
 */
exports.Users = conn.model("Users",exports.UsersSchema);


/**
 * Seesion Schema
 */

exports.SessionSchema = new Schema({
	users:[String]
	// messages:[]	
})

