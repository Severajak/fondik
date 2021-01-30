import callDesktop from './seznamDesktopAds.js';
import callMobile from './seznamMobileAds.js';
import { setupSky } from '../stickySky/stickySky.js';

const callAds = () => {
	if (window.innerWidth >= 990) {
		setupSky({ side: 'right', top: 325 });
		callDesktop();
	} else if (window.innerWidth < 990) {
		callMobile();
	}
};

export default callAds;
