import { getZones } from '../adsByGoogle/adZones.js';
import { adCodes, getAdCode, getSlotDefinition } from './adCodes.js';
import { debug } from '../debug.js';

// const headFunc = (zones) => {
// 	const callbacks = [];
// 	window.googletag = window.googletag || { cmd: [] };
// 	zones.forEach((zone) => {
// 		const { code, sizes, name } = adCodes[zone];
// 		callbacks.push(() => {
// 			googletag
// 				.defineSlot(getSlotDefinition(name), sizes, getAdCode(code))
// 				.addService(googletag.pubads());
// 		});
// 	});
//   debug('AdSense callbacks:');
//   debug(callbacks);
// 	googletag.cmd.push(() => {
// 		callbacks.map((c) => c());
// 		googletag.pubads().enableSingleRequest();
// 		googletag.enableServices();
// 	});
// };

const headFunc = () => {
	window.googletag = window.googletag || { cmd: [] };
	googletag.cmd.push(function () {
		googletag
			.defineSlot(
				'/22754793592/desktop_article_1bottom_300x250',
				[
					[250, 250],
					[300, 250],
					[336, 280],
					[750, 100],
					[750, 200],
					[750, 300],
				],
				'div-gpt-ad-1632608-2'
			)
			.addService(googletag.pubads());
		googletag
			.defineSlot(
				'/22754793592/desktop_article_1sidebar_300x250',
				[
					[250, 250],
					[300, 250],
				],
				'div-gpt-ad-1632608-3'
			)
			.addService(googletag.pubads());
		googletag
			.defineSlot(
				'/22754793592/desktop_article_2bottom_300x250',
				[
					[250, 250],
					[300, 250],
					[336, 280],
					[750, 100],
					[750, 200],
					[750, 300],
				],
				'div-gpt-ad-1632608-4'
			)
			.addService(googletag.pubads());
		googletag
			.defineSlot(
				'/22754793592/desktop_article_2sidebar_300x250',
				[
					[250, 250],
					[300, 250],
				],
				'div-gpt-ad-1632608-5'
			)
			.addService(googletag.pubads());
		googletag.pubads().enableSingleRequest();
		googletag.enableServices();
	});
};

const appendSingleBodyPart = (zone, positions) => {
	const elem = positions[zone];
	if (!elem) {
		debug(`Could not find zone ${zone} for AdSense ad`);
		debug(elem);
		debug(positions);
		return;
	}
	if (elem.innerHTML) {
		debug(`Ad position ${zone} has content - AdSense ad`);
		debug(elem);
		return;
	}
	const { code } = adCodes[zone];
	const root = document.createElement('div');
	const scriptTag = document.createElement('script');
	const currentAdCode = getAdCode(code);

	root.id = currentAdCode;
	scriptTag.type = 'text/javascript';
	scriptTag.text = `googletag.cmd.push(function(){googletag.display('${currentAdCode}')});`;
	root.appendChild(scriptTag);
	elem.appendChild(root);

	// make sure ad is visible
	elem.style.display = 'block';
};

const bodyFunc = (zones) => {
	const p = getZones();
	debug('Positions from AdSenseAds');
	debug(p);
	zones.map((z) => appendSingleBodyPart(z, p));
};

export const appendAdsenseAds = (zones) => {
	headFunc();
	bodyFunc(zones);
};
