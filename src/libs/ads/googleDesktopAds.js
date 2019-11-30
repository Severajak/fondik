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
		// make place for skyscrapper
		document.querySelector('.post-content-text').style.padding = '20px 325px 0 25px';
		// make sure sky doesn't go over bottom rect
		// document.querySelector('.skyscraperholder').style.bottom = '300px';
		// no topSponzor so this
		document.querySelector('.skyscraperholder').style.top = 0;

		const textBox = document.querySelector('.post-description-box');
		const textBoxWidth = textBox && textBox.offsetWidth;

		// if small display, make sure rectangles don't overlap with sky
		if (textBoxWidth) {
			zones.rectangle.style.width = textBoxWidth + 'px';
			zones.rectangle2.style.width = textBoxWidth + 'px';
		}

		const rectangle = ads.rectangle;
		appendAd(rectangle, zones.rectangle);
		const rectangle2 = ads.rectangle2;
		appendAd(rectangle2, zones.rectangle2);
		const skyscrapper = ads.skyscrapper;
		appendAd(skyscrapper, zones.skyscrapper);
	}
};

export default deploayDesktopAds;
