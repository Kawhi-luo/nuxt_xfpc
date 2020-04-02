const getTargetHost = (DevelopEnv) => {
	switch (DevelopEnv) {
		//  开发环境
		case 'dev':
			console.log('9832')
			return 'http://112.27.198.15:9832';
		// 测试
		case 'test':
			console.log('9834')
			return 'http://112.27.198.15:9834';
		// 生产
		case 'managepro':
			console.log('www')
			return 'http://www.gsafetycloud.com';
		// 预生产
		case 'managepre':
			console.log('test')
			return 'http://test.gsafetycloud.com';
		default:
			console.log('dev')
			return 'http://112.27.198.15:9832';
	}
};

export default {
	apiHost: getTargetHost(process.env.DevelopEnv),
	service: {
		maintenance: '/api/v1.1/maintenance-service',
		monitor_url: '/api/v1/monitorCenter',
		e_record_url: '/api/v1/eRecord',
		pic_url: '/image',
		moblie_url: '/api/v1/fire-society',
		special_base_url: '/zuul/api/v1/fire-society',
		// v1
		// base_url: '/api/v1/fire-society',
		// base_socket_url: '/firesocietywebsocket',
		// v2
		base_url: '/api/v2/fire-society-service',
		base_socket_url: '/firesocietywebsocket-v2',
	},
	// websocket地址
	wsHost: "",
}
