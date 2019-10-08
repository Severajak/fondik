import stickySky from './libs/stickySky/stickySky.js';
import callAds from './libs/ads/callAds.js';
import { utmToLinks, getUtm } from './libs/utm/persistentUtm.js';

utmToLinks();
const utm = getUtm();
if (utm.includes('utm_source=www.seznam.cz') && utm.includes('utm_medium=sekce-z-internetu')) {
	console.log('calling Seznam ads');
	stickySky();
	callAds();
} else {
	console.log('calling Google ads');
	(adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: "ca-pub-1062420095711039",
    enable_page_level_ads: true
  });
}
