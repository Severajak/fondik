import callAds from './libs/ads/callAds.js';
import googleAds from './libs/ads/googleAds.js';
import { utmToLinks, getUtm } from './libs/utm/persistentUtm.js';
/* custom bannery ne
import desktopSky from './libs/customBanners/desktopSky.js';
import detectMobileBanner from './libs/customBanners/mobileStickyBottom.js';
*/

const setupAdvertisment = () => {
	utmToLinks();
	/* custom bannery ne
	if (desktopSky() || detectMobileBanner()) {
		console.log('custom banner');
		return;
	}
	*/
	const pathname = window.location.pathname;
	const countPaths = (pathname.match(/\//g) || []).length;
	// if less then 2 "/" -> not an article, either homepage or section
	if (countPaths < 2) {
		console.log('HP or section - not calling any ads');
		return;
	}

	const utm = getUtm();
	if (utm && utm.indexOf('utm_source=www.seznam.cz') !== -1) {
		console.log('seznam ads');
		callAds();
	} else {
		console.log('google ads');
		googleAds();
	}
};

setupAdvertisment();
