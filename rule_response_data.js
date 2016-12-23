var querystring = require('querystring');
var http = require('http');

module.exports = {
    
    replaceServerResDataAsync: function(req,res,serverResData,callback) {

        var contentType = res.headers['content-type'];
        var host = req.headers['host'];
        
        if(/html/i.test(contentType)){
            var warning = "<h2 style='text-align:center;color:red;'>Proxy</h2>"
            callback(warning + serverResData.toString());
        } else {
            callback(serverResData);
        }

        try {
            if(/mp\.weixin\.qq\.com/i.test(host) && /text|json/i.test(contentType)){

                var post_data = querystring.stringify({
                    'host': host,
                    'path' : req.url,
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