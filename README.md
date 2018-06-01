## 使用方法
Set config in `config/user.config` file

```
{
    //七牛的ak和sk
	"access_key" : "xxxxx",   
	"secret_key" : "xxxxx",
    //七牛的bucket名字和链接
	"bucket_name" : "xxxxx",
	"bucket_url" : "xxxxx",
    //当前repo的文件访问地址
	"repo_url" : "https://raw.githubusercontent.com/we11cheng/WCOnlineIpaInstall/master/"
}
```
bucket_name，bucket_url获取方式:
如图所示
![](http://p2bzzkn05.bkt.clouddn.com/18-4-16/14187784.jpg)
 七牛云ak sk获取方式:登录七牛云->个人中心->秘钥管理
 
 把需要发布的ipa放到项目ipas文件夹内。
 
 执行脚本

```
admindeMacBook-Pro-3:~ admin$ cd WCOnlineIpaInstall/
admindeMacBook-Pro-3:WCOnlineIpaInstall admin$ Python3 ./upload.py ipas/Target.ipa 
[NewT66y.ipa] uploading......
[NewT66y-AppIcon60x60@2x.png] uploading......
[NewT66y.html] uploading......
Please push local branch to remote, Then open http://p2bzzkn05.bkt.clouddn.com/NewT66y.html install
admindeMacBook-Pro-3:WCOnlineIpaInstall admin$ 

```
打开<http://p2bzzkn05.bkt.clouddn.com/NewT66y.html>

如图
![](http://p2bzzkn05.bkt.clouddn.com/18-4-16/95646189.jpg)
手机打开点击一键安装即可。原理就是企业证书安装原理。
安装完成后需要手动信任证书。
使用过程有问题的欢迎大家讨论。

感谢作者：<https://github.com/AloneMonkey/OnlineIpaInstall>

## 新增PP助手下载越狱版本IPA方法
切换到工程Other目录，执行命令 1:Python3 ipa.py 2:输入索索词，获取ipa下载地址。    
喜欢请star。你的star是我最大的动力。

## 更新日志
- 2018-6-1 新增node搭建简单服务器接收请求返回数据。   

#### 使用方法（新建项目，不想新建可以直接使用我的工程）。见项目工程gwcExpress文件夹。
- 检查是否安装node ```node -v```
- 检查是否安装npm ```npm -v```
- 全局安装express-generator 
```npm install -g express-generator
```
- 创建一个名为myapp的express应用程序
```express --view=pug myapp
```
- npm start 在浏览器输入localhost:3000/users。
- 其他接口直接在myapp/api/路径下添加js文件。参考demo.js

![](http://p2bzzkn05.bkt.clouddn.com/18-6-1/94791486.jpg)
![](http://p2bzzkn05.bkt.clouddn.com/18-6-1/38456809.jpg)
