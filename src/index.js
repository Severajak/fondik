import seznamAds from './libs/ads/seznamAds.js';
import googleAds from './libs/ads/googleAds.js';
import { debug } from './libs/debug.js';
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
		debug('HP or section - not calling any ads');
		return;
	}

	const utm = getUtm();
	if (utm && utm.indexOf('utm_source=www.seznam.cz') !== -1) {
		debug('seznam ads');
		seznamAds();
	} else {
		debug('google ads');
		googleAds();
	}
};

setupAdvertisment();
