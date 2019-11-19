import callAds from './libs/ads/callAds.js';
import googleAds from './libs/ads/googleAds.js';
import { utmToLinks, getUtm } from './libs/utm/persistentUtm.js';

utmToLinks();
const utm = getUtm();
if (utm && utm.includes('utm_source=www.seznam.cz')) {
	console.log('calling Seznam ads');
	callAds();
} else {
	console.log('Calling Google ads');
	googleAds();
}
