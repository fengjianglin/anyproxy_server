
anyproxy_rule usage:

---
服务器端

https://nodejs.org/en/download/package-manager/

1. 安装anyproxy

    npm install -g anyproxy --registry https://registry.npm.taobao.org info underscore

2. 生成证书：

    anyproxy --root , 可能需要sudo (sudo anyproxy --root)

3. git clone git@code.csdn.net:CSDN_Dev/anyproxy_rule.git

4. cd anyproxy_rule， 启动服务执行：

    nohup sudo anyproxy -i --rule rule_response_data.js &  
    
    注：参数-i是解析HTTPS的意思

6. 地址

    Web控制台：http://x.csdn.net:8002/
    
    获取证书地址：http://x.csdn.net:8002/fetchCrtFile
    
	证书二维码：http://x.csdn.net:8002/qr_root

7. 代理设置端口：8001

---


手机客户端

1. 安装证书

	下载地址：http://x.csdn.net:8002/fetchCrtFile
	
2. 设置http代理

	host: x.csdn.net
    
	post: 8001
    
---    