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

const style = 'style';
const adSlot = 'data-ad-slot';
const adFormat = 'data-ad-format';
const responsive = 'data-full-width-responsive';

export const adCodes = {
	[RECTANGLE]: [
		[style, 'display:block'],
		[adSlot, '5471762845'],
		[adFormat, 'auto'],
		[responsive, 'true'],
	],
	[RECTANGLE2]: [
		[style, 'display:block'],
		[adSlot, '1511518294'],
		[adFormat, 'auto'],
		[responsive, 'true'],
	],
	[SKY_SCRAPER]: [
		[style, 'display:block'],
		[adSlot, '2102545239'],
		[adFormat, 'auto'],
		[responsive, 'true'],
	],
	[TOP_SPONZOR]: [
		[style, 'display:inline-block;width:300px;height:300px'],
		[adSlot, '9201387779'],
	],
	[LEADERBOARD]: [
		[style, 'display:inline-block;width:970px;height:210px'],
		[adSlot, '5429663725'],
	],
	[MOBILE_TOP]: [
		[style, 'display:block'],
		[adSlot, '2999181162'],
		[adFormat, 'auto'],
		[responsive, 'true'],
	],
	[MOBILE_MID]: [
		[style, 'display:block'],
		[adSlot, '5537235662'],
		[adFormat, 'auto'],
		[responsive, 'true'],
	],
	[MOBILE_BOT]: [
		[style, 'display:block'],
		[adSlot, '1390941241'],
		[adFormat, 'auto'],
		[responsive, 'true'],
	],
};
