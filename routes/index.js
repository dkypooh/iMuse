
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'iMuse在线聊天系统' });
};