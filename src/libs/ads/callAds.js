import callDesktop from './seznamDesktopAds.js';
import callMobile from './seznamMobileAds.js';

const callAds = () => {
  if (window.innerWidth >= 990) {
    callDesktop();
  } else if (window.innerWidth < 990) {
    callMobile();
  }
};

export default callAds;
