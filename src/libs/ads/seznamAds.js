import callDesktop from './seznamDesktopAds.js';
import callMobile from './seznamMobileAds.js';
import { setupSky } from '../stickySky/stickySky.js';
import { VIEWPORT_BREAKPOINT } from '../../constants.js';

const seznamAds = () => {
	if (window.innerWidth >= VIEWPORT_BREAKPOINT) {
		setupSky({ side: 'right', top: 325 });
		callDesktop();
	} else {
		callMobile();
	}
};

export default seznamAds;
