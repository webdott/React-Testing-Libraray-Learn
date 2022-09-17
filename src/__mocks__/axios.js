const mockedResponse = {
	data: {
		results: [
			{
				name: {
					first: 'Uchechukwu',
					last: 'Nwafor',
				},
				picture: {
					large: 'https://randomuser.me/api/portraits',
				},
				login: {
					username: 'webdot',
				},
			},
		],
	},
};

const axios = {
	get: jest.fn().mockResolvedValue(mockedResponse),
};

export default axios;
