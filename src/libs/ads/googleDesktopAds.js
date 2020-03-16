import ads from '../adsByGoogle/adCodes.js';

const zones = {
	rectangle: document.getElementById('ssp-zone-118579'),
	rectangle2: document.getElementById('ssp-zone-118574'),
	skyscrapper: document.getElementById('ssp-zone-118569'),
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
		console.warn('Failed to call the Google thing (desktopAds).');
		console.warn(e);
	}
};

const deploayDesktopAds = () => {
	if (zones.rectangle && zones.rectangle2 && zones.skyscrapper ) {
		// make sure sky doesn't go over bottom rect
		document.querySelector('.skyscraperholder').style.bottom = '300px';
		// no topSponzor so this
		document.querySelector('.skyscraperholder').style.top = 0;

		const rectangle = ads.rectangle;
		appendAd(rectangle, zones.rectangle);
		const rectangle2 = ads.rectangle2;
		zones.rectangle2.style.width = '750px';
		appendAd(rectangle2, zones.rectangle2);
		const skyscrapper = ads.skyscrapper;
		appendAd(skyscrapper, zones.skyscrapper);
	}
};

export default deploayDesktopAds;
