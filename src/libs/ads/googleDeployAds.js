import { adCodes } from '../adsByGoogle/adCodes.js';
import { zones } from '../adsByGoogle/adZones.js';
import { debug } from '../debug.js';
import { appendAd } from '../adsByGoogle/appendAd.js';
import { fixLeaderboard } from '../leaderboard/leaderboard.js';
import {
	LEADERBOARD,
	RECTANGLE,
	RECTANGLE2,
	SKY_SCRAPER,
	MOBILE_TOP,
	MOBILE_MID,
	MOBILE_BOT,
} from '../../constants.js';

const apendListOfAds = (activeZones) => {
	activeZones.forEach((zoneName) => {
    const adCode = adCodes[zoneName];
    const zone = zones[zoneName];
    debug('Deploying Google ads:');
    debug({zoneName, adCode, zone});
		if (adCode && zone) {
			appendAd(adCode, zone);
		}
	});
};

const deployDesktopAds = () => {
	const activeZones = [RECTANGLE, RECTANGLE2, SKY_SCRAPER];
	debug('Deploying Google desktop ads to these zones:');
	debug(activeZones);

	apendListOfAds(activeZones);

	if (activeZones.indexOf(RECTANGLE2) > -1) {
		if (zones[RECTANGLE2]) {
			zones[RECTANGLE2].style.width =
				window.innerWidth < 1135 ? '600px' : '750px';
		}
	}
	if (activeZones.indexOf(LEADERBOARD) > -1) {
		fixLeaderboard();
	}
};

const deployMobileAds = () => {
	const activeZones = [MOBILE_TOP, MOBILE_MID, MOBILE_BOT];

	apendListOfAds(activeZones);
};

export { deployDesktopAds, deployMobileAds };
