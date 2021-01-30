import { debug } from '../debug.js';

/**
 * Returns holder and sky which includes ad zone
 * @param {Object} options Object specifying side and top
 */
const createSky = ({ side = 'right', top = 0 }) => {
	const holder = document.createElement('div');
	const sky = document.createElement('div');
	holder.appendChild(sky);

	// holder style
	holder.style.position = 'absolute';
	holder.style.top = top + 'px';
	holder.style.width = '300px';
	holder.style.bottom = 0;
	if (side === 'left') {
		holder.style.left = 0;
	} else {
		holder.style.right = 0;
	}

	// sky style
	sky.style.position = 'absolue';
	sky.style.width = '300px';
	sky.style.height = '600px';
	sky.id = 'ssp-zone-118569';
	debug('Holder and sky created:');
	debug({ holder, sky });
	return { holder, sky };
};

export { createSky };
