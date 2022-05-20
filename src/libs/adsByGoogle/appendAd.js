import { debug } from '../debug.js';

const appendAd = (adAttributes, zone) => {
	const script = document.createElement('script');
	const ins = document.createElement('ins');
	script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
	adAttributes.forEach(([name, value]) => {
		ins.setAttribute(name, value);
	});
	ins.setAttribute('class', 'adsbygoogle');
	ins.setAttribute('data-ad-client', 'ca-pub-1062420095711039');

	zone.style.display = 'block';

	zone.appendChild(ins);
	zone.appendChild(script);
	try {
		(adsbygoogle = window.adsbygoogle || []).push({});
	} catch (e) {
		debug('Failed to call Google ad', 'error');
		debug(e);
	}
};

export { appendAd };
