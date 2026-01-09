export const listSubdomains = (hostname: string) => {
	const parts = hostname.split('.');
	const primary = parts.slice(-2);
	const subs = parts.slice(0, -2);
	const all = [primary];

	for (let i = 0; i < subs.length; i++) {
		all.push(subs.slice(i).concat(primary));
	}

	return all.map((parts) => parts.join('.'));
};
