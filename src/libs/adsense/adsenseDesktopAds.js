import {
	RECTANGLE,
	RECTANGLE2,
	SKY_SCRAPER,
	TOP_SPONZOR,
} from '../../constants';
import { appendAdsenseAds } from './appendAds';
import { debug } from '../debug.js';
import { adSenseSrc } from './adCodes';

const deployAds = () => {
	const activeZones = [RECTANGLE, RECTANGLE2, SKY_SCRAPER, TOP_SPONZOR];
	debug('Deploying AdSense desktop ads to these zones:');
	debug(activeZones);
	appendAdsenseAds(activeZones);
};

const appendScript = (cb) => {
	const scriptTag = document.createElement('script');
	scriptTag.src = adSenseSrc;
	document.head.appendChild(scriptTag);
	scriptTag.addEventListener('load', cb);
};

export const deployDesktopAdsenseAds = () => {
	appendScript(deployAds);
};
