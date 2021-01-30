import { preparePage } from './preparePage.js';
import { debug } from '../debug.js';

const setupSky = (options) => {
	debug('Starting skyscraper setup');
	const side = options.side || 'right';
	const top = options.top || 0;
	const obj = preparePage({ side, top });
	if (!obj) return;
	const { holder, sky } = obj;
	debug('Got holder and sky');
	debug({ holder, sky });
	window.addEventListener('scroll', () => {
		stick(holder, sky, options);
	});
};

const stick = (holder, sky, options) => {
	let bot = 600;
	let top = 0;
	if (options && options.bottom && options.top) {
		bot = options.bottom;
		top = options.top;
	}
	const rect = holder.getBoundingClientRect();
	if (rect.bottom > bot && rect.top < top) {
		sky.style.position = 'fixed';
		sky.style.top = '25px';
		sky.style.bottom = '';
	} else if (rect.bottom <= 600) {
		sky.style.position = 'absolute';
		sky.style.top = '';
		sky.style.bottom = '0';
	} else if (rect.top >= 0) {
		sky.style.position = 'absolute';
		sky.style.top = '25px';
		sky.style.bottom = '';
	}
};

export { setupSky };
