import ads from '../adsByGoogle/adCodes.js';
import { debug } from '../debug.js';
import { appendAd } from '../adsByGoogle/appendAd.js';
import { fixLeaderboard } from '../leaderboard/leaderboard.js';

const deploayDesktopAds = () => {
	const zones = {
		rectangle: document.getElementById('ssp-zone-118579'),
		rectangle2: document.getElementById('ssp-zone-118574'),
		skyscrapper: document.getElementById('ssp-zone-118569'),
		topSponzor: document.getElementById('ssp-zone-118564'),
		leaderBoard: document.getElementById('ssp-zone-118559'),
	};
	debug('Deploying Google desktop ads to these zones:');
	debug(zones);
	if (zones.rectangle) {
		const rectangle = ads.rectangle;
		appendAd(rectangle, zones.rectangle);
	}
	if (zones.rectangle2) {
		const rectangle2 = ads.rectangle2;
		const newWidth = window.innerWidth < 1135 ? '600px' : '750px';
		zones.rectangle2.style.width = newWidth;
		appendAd(rectangle2, zones.rectangle2);
	}
	if (zones.skyscrapper) {
		debug('Deploying Skyscraper');
		const skyscrapper = ads.skyscrapper;
		appendAd(skyscrapper, zones.skyscrapper);
	}
	if (zones.topSponzor) {
		debug('Deploying TopSponzor');
		zones.topSponzor.style.left = 0;
		const topSponzor = ads.topSponzor;
		appendAd(topSponzor, zones.topSponzor);
	}
	if (zones.leaderBoard) {
		debug('Deploying leaderBoard');
		const leaderBoard = ads.leaderBoard;
		fixLeaderboard();
		appendAd(leaderBoard, zones.leaderBoard);
	}
};

export default deploayDesktopAds;
