import { MOBILE_BOT, MOBILE_MID, MOBILE_TOP } from '../../constants.js';
import { adCodes } from '../adsByGoogle/adCodes.js';
import { zones } from '../adsByGoogle/adZones.js';
import { appendAd } from '../adsByGoogle/appendAd.js';

const deploayMobileAds = () => {
	const activeZones = [MOBILE_TOP, MOBILE_MID, MOBILE_BOT];

	activeZones.forEach((zoneName) => {
		appendAd(adCodes[zoneName], zones[zoneName]);
	});
};

export default deploayMobileAds;
