import { createSky } from './createSky.js';
import { debug } from '../debug.js';

const preparePage = ({ side = 'right', top = 0 }) => {
	const page = document.querySelector('.post-content-text');
	debug('Element to which sky should be appended:');
	debug({ page });
	if (!page) return;
	if (side === 'right') {
		debug('Preparing page for the sky on the RIGHT SIDE');
		page.style.padding = '20px 325px 0 25px';
	} else {
		debug('Preparing page for the sky on the LEFT SIDE');
		page.style.padding = '20px 0 0 365px';
	}
	const { holder, sky } = createSky({ side, top });
	debug('Holder and sky to be appended:');
	debug({ holder, sky });
	page.appendChild(holder);
	return { holder, sky };
};

export { preparePage };
