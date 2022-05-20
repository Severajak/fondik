import {
	LEADERBOARD,
	MOBILE_BOT,
	MOBILE_MID,
	MOBILE_TOP,
	RECTANGLE,
	RECTANGLE2,
	SKY_SCRAPER,
	TOP_SPONZOR,
} from '../../constants';

const zoneMap = [
	[RECTANGLE, 'ssp-zone-118579'],
	[RECTANGLE2, 'ssp-zone-118574'],
	[SKY_SCRAPER, 'ssp-zone-118569'],
	[TOP_SPONZOR, 'ssp-zone-118564'],
	[LEADERBOARD, 'ssp-zone-118559'],
	[MOBILE_TOP, 'ssp-zone-118584'],
	[MOBILE_MID, 'ssp-zone-118589'],
	[MOBILE_BOT, 'ssp-zone-118594'],
];

export const getZones = () => zoneMap.reduce((prev, cur) => {
  try {
    prev[cur[0]] = document.getElementById(cur[1]);
  } catch(e) {
    console.warn(`Could not get ${cur[1]}`)
  }
  return prev;
}, {});
