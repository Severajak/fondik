import { adCodes } from '../adsByGoogle/adCodes.js';
import { zones } from '../adsByGoogle/adZones.js';
import { debug } from '../debug.js';
import { appendAd } from '../adsByGoogle/appendAd.js';
import { fixLeaderboard } from '../leaderboard/leaderboard.js';
import { LEADERBOARD, RECTANGLE, RECTANGLE2, SKY_SCRAPER } from '../../constants.js';

const deploayDesktopAds = () => {
	const activeZones = [RECTANGLE, RECTANGLE2, SKY_SCRAPER];

  debug('Deploying Google desktop ads to these zones:');
	debug(activeZones);

  activeZones.forEach((zoneName) => {
    appendAd(adCodes[zoneName], zones[zoneName]);
  });

	if (activeZones.indexOf(RECTANGLE2) > -1) {
		zones.rectangle2.style.width = window.innerWidth < 1135 ? '600px' : '750px';
	}
  if (activeZones.indexOf(LEADERBOARD) > -1) {
		fixLeaderboard();
	}
};

export default deploayDesktopAds;
