iMuse
=====

一个在线通信聊天系统，界面仿造WeChat，7.23 - 7.27建设中.....
CSS现在只写了布局，没有设计，到时候用bootstrap.css套用
#1.聊天系统设计			
> <img src="./doc/frame.png" alt="设计框图" />

```
 + 前端使用AngularJs来实现数据绑定，实现UI高可用
 + 后台使用ExpressJs构建Web服务
 + Socket.io 事件响应处理方式传播消息
 + Mogoose存储数据
```

##1.1 前端界面设计
	
1. 脑图设计				
> <img src="./doc/client-mind.png" width="600" height="400" alt="脑图" />

2. 原型交互图 
> <img src="./doc/draft-1.png" width="600" height="400" alt="交互草图" />		
------------
> <img src="./doc/draft-2.png" width="600" height="400" alt="交互草图" />

##1.2 前端详细设计
>
><img src="./doc/detail.png" width="700" height="400" alt="交互草图" />


##1.3 初步效果图			
+ 登入界面				
<img src="./doc/show-1.png" width="600" height="400" alt="交互草图" />   

+ 两个客户端建立连接			
<img src="./doc/show-2.png" width="600" height="400" alt="交互草图" />   

+ 双人会话				
<img src="./doc/show-3.png" width="600" height="400" alt="交互草图" />   

----------
注：	
+ 7.23 设计为王，思想为主，抓住主干，程序的细节是最后考虑的,angularjs的使用方式还是有点不熟练，思想熟悉的还可以

