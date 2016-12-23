var querystring = require('querystring');
var http = require('http');

module.exports = {
    
    replaceServerResDataAsync: function(req,res,serverResData,callback) {
        
        if(/html/i.test(res.headers['content-type'])){
            var warning = "<h2 style='text-align:center;color:red;'>Proxy</h2>"
            callback(warning + serverResData.toString());
        } else {
            callback(serverResData);
        }

        try {
            if(req.headers['host'].indexOf('weixin.qq.com') > -1 && (contentType.indexOf('text') > -1 || contentType.indexOf('json') > -1)){
                

                var post_data = querystring.stringify({
                    'url' : req.url,
                    'contentType' : contentType,
                    'source': serverResData.toString()
                });
                var post_options = {
                    host: '192.168.5.167',
                    port: '8080',
                    path: '/spiderserver-webapp/proxy',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Content-Length': Buffer.byteLength(post_data)
                    }
                };
                var post_req = http.request(post_options);

                post_req.on('error', function(e) { 
                    console.log(e); 
                });

                post_req.write(post_data);
                post_req.end();
            }
        } catch(e) {
            console.log(e);
        }
    }
};