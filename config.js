module.exports = {
	proxy: {
		type: 'http',
		host: 'localhost'
	},
	http_rewrite: {
		host: '192.168.5.167',
		port: 8080,
		path: '/spiderserver-webapp/proxy'
	}
}