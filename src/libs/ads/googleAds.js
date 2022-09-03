import { deployMobileAds } from './googleDeployAds';
import { setupSky } from '../stickySky/stickySky.js';
import { VIEWPORT_BREAKPOINT } from '../../constants';
import { deployDesktopAdsenseAds } from '../adsense/adsenseDesktopAds';

export const callGoogleAds = () => {
	let count = 0;
	const timer = window.setInterval(() => {
		if (window.adsbygoogle) {
			if (window.innerWidth >= VIEWPORT_BREAKPOINT) {
				setupSky({ side: 'right', top: 325 });
				deployDesktopAdsenseAds();
				// deployDesktopAds();
			} else {
				deployMobileAds();
			}
			clearInterval(timer);
		}
		if (count > 10) {
			clearInterval(timer);
		}
		count++;
	}, 100);
};
