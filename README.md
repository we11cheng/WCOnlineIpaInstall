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
切换到工程Other目录，执行命令 
1:Python3 ipa.py 
2:输入索索词，获取ipa下载地址。    
3:喜欢请star。你的star是我最大的动力。

eg:
```
admindeMBP-4:WCOnlineIpaInstall admin$ cd Other/
admindeMBP-4:Other admin$ ls
ipa.py
admindeMBP-4:Other admin$ python3 ipa.py 
Close certificate verify...
Input the search key word: 美图 秀秀
Detail url: https://www.25pp.com/ios/detail_537102/
Orgin download url: aHR0cDovL3IxMS4yNXBwLmNvbS9zb2Z0LzIwMTgvMDYvMDYvMjAxODA2MDZfMTE5NDRfMjE4OTgwMTQwOTg2LmlwYQ==
Down url: b'http://r11.25pp.com/soft/2018/06/06/20180606_11944_218980140986.ipa'
admindeMBP-4:Other admin$ 
```
