import ads from '../adsByGoogle/adCodes.js';

const zones = {
	mobileSquareTop: document.getElementById('ssp-zone-118584'),
	mobileSquareMid: document.getElementById('ssp-zone-118589'),
	mobileSquareBot: document.getElementById('ssp-zone-118594'),
};

const appendAd = (ad, zone) => {
	const script = document.createElement('script');
	const ins = document.createElement('ins');

	script.src = ad.script;
	ad.attributes.forEach((attribute) => {
		ins.setAttribute(attribute.name, attribute.value);
	});

	zone.style.display = 'block';

	zone.appendChild(ins);
	zone.appendChild(script);
	try {
		(adsbygoogle = window.adsbygoogle || []).push({});
	} catch (e) {
		console.warn('Failed to call the Google thing (mobileAds).');
		console.warn(e);
	}
};

const deploayMobileAds = () => {
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
