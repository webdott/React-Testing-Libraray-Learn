const { render, screen } = require('@testing-library/react');
const { BrowserRouter } = require('react-router-dom');
const { default: FollowersList } = require('../FollowersList');

const MockedFollowersList = () => {
	return (
		<BrowserRouter>
			<FollowersList />
		</BrowserRouter>
	);
};

describe('Followers List', () => {
	test('should render followers', async () => {
		render(<MockedFollowersList />);

		const follower = await screen.findByTestId('follower-item-0');
		expect(follower).toBeInTheDocument();
	});
});
