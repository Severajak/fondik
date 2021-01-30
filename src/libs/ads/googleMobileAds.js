import ads from '../adsByGoogle/adCodes.js';
import { appendAd } from '../adsByGoogle/appendAd.js';

const deploayMobileAds = () => {
	const zones = {
		mobileSquareTop: document.getElementById('ssp-zone-118584'),
		mobileSquareMid: document.getElementById('ssp-zone-118589'),
		mobileSquareBot: document.getElementById('ssp-zone-118594'),
	};
	if (zones.mobileSquareTop && zones.mobileSquareMid && zones.mobileSquareBot) {
		const mobileSquareTop = ads.mobileSquareTop;
		appendAd(mobileSquareTop, zones.mobileSquareTop);
		const mobileSquareMid = ads.mobileSquareMid;
		appendAd(mobileSquareMid, zones.mobileSquareMid);
		const mobileSquareBot = ads.mobileSquareBot;
		appendAd(mobileSquareBot, zones.mobileSquareBot);
		console.log('Google mobile ads deployed');
	}
};

export default deploayMobileAds;
