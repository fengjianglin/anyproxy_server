
anyproxy_rule usage:

服务器端

1. 安装anyproxy
	npm install -g anyproxy --registry https://registry.npm.taobao.org info underscore

2. git clone git@code.csdn.net:CSDN_Dev/anyproxy_rule.git

3. cd anyproxy_rule

4. 生成证书：
	anyproxy --root , 肯能需要sudo (sudo anyproxy --root)

5. sudo anyproxy -i --rule rule_response_data.js (参数-i是解析HTTPS的意思)

6. 地址
	Web控制台：http://localhost:8002/
	获取证书地址：http://localhost:8002/fetchCrtFile
	证书二维码：http://localhost:8002/qr_root

7. 代理设置端口：8001

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

客户端

1. 安装证书

2. 设置代理