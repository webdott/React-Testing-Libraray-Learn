import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
	test('Header renders whatever title is passed to it', () => {
		render(<Header title={'My Header'} />);

		const headingElement = screen.getByRole('heading', { name: 'My Header' });
		expect(headingElement).toBeInTheDocument();
	});
});