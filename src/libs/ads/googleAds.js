import googleDesktopAds from './googleDesktopAds';
import googleMobileAds from './googleMobileAds';
import { setupSky } from '../stickySky/stickySky.js';

const callGoogleAds = () => {
	let count = 0;
	const timer = window.setInterval(() => {
		if (window.adsbygoogle) {
			if (window.innerWidth >= 990) {
				setupSky({ side: 'right', top: 325 });
				googleDesktopAds();
				clearInterval(timer);
			} else {
				googleMobileAds();
				clearInterval(timer);
			}
		}
		if (count > 10) {
			clearInterval(timer);
		}
		count++;
	}, 100);
};

export default callGoogleAds;
