import {listSubdomains} from './urls';

test('listSubdomains', () => {
	expect(listSubdomains('localhost')).toEqual(
		expect.arrayContaining(['localhost'])
	);

	expect(listSubdomains('foo.com')).toEqual(
		expect.arrayContaining(['foo.com'])
	);

	expect(listSubdomains('foo.bar.com')).toEqual(
		expect.arrayContaining(['bar.com', 'foo.bar.com'])
	);

	expect(listSubdomains('foo.bar.baz.com')).toEqual(
		expect.arrayContaining(['baz.com', 'bar.baz.com', 'foo.bar.baz.com'])
	);
});
