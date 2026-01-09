import Cookie from 'js-cookie';
import {listSubdomains} from './urls';

export type CookieSameSite = 'strict' | 'lax' | 'none';

export const getCookieNames = () =>
	document.cookie.split(';').reduce((names, cookie) => {
		const [name] = cookie.split('=', 2);
		return name ? names.concat(name.trim()) : names;
	}, [] as string[]);

export const getCookie = (name: string) => Cookie.get(name);

export const setCookie = (
	name: string,
	value = '',
	days = 0,
	domain?: string,
	sameSite?: CookieSameSite
) => {
	Cookie.set(name, value, {
		expires: days,
		domain,
		sameSite
	});
};

export const deleteCookie = (name: string, path = '/', domain?: string) => {
	// If no domain is specified, we try deleting the cookie
	// on the current domain or any of its subdomains.
	const domains = domain ? [domain] : listSubdomains(location.hostname);

	domains.forEach((domain) => {
		Cookie.remove(name, {
			path,
			domain
		});
	});
};
