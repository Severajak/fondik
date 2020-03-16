import callAds from './libs/ads/callAds.js';
// import googleAds from './libs/ads/googleAds.js';
import { utmToLinks, getUtm } from './libs/utm/persistentUtm.js';
import desktopSky from './libs/customBanners/desktopSky.js';
import detectMobileBanner from './libs/customBanners/mobileStickyBottom.js';

const setupAdvertisment = () => {
	utmToLinks();
	if (desktopSky() || detectMobileBanner()) {
		console.log('custom banner');
		return;
	}
	// TODO: nevolat reklamy pokud mobilní banner
	const utm = getUtm();
	if (utm && utm.includes('utm_source=www.seznam.cz')) {
		callAds();
	}
	// else {
	// 	console.log('google ads');
	// 	googleAds();
	// }
};

setupAdvertisment();
