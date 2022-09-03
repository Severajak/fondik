import { getZones } from '../adsByGoogle/adZones.js';
import { adCodes, getAdCode, getSlotDefinition } from './adCodes.js';
import { debug } from '../debug.js';

const headFunc = (zones) => {
	const callbacks = [];
	window.googletag = window.googletag || { cmd: [] };
	zones.forEach((zone) => {
		const { code, sizes, name } = adCodes[zone];
		callbacks.push(() => {
			googletag
				.defineSlot(getSlotDefinition(name), sizes, getAdCode(code))
				.addService(googletag.pubads());
		});
	});
	googletag.cmd.push(() => {
		callbacks.map((c) => c());
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
	headFunc(zones);
	bodyFunc(zones);
};
