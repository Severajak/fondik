import stickySky from '../stickySky/stickySky.js';

/**
 * @returns {Boolean} Has desktopSky been rendered?
 */
const desktopSky = () => {
  if (window.innerWidth < 990) return false;
  const banner = document.getElementById('desktop-fondik-banner');
  if (!banner) return false;
  if (banner.classList && banner.classList.contains('w-condition-invisible')) return false;
  console.log('rendering custom desktop banner');
  renderDesktopSky(banner);
  return true;
};

const renderDesktopSky = (banner) => {
  const sky = stickySky();
  const skyHolder = document.querySelector('.skyscraperholder');
  // stick skyHolder to the top (normaly has top: 325px;)
  skyHolder.style.top = 0;
  banner.classList.remove('banner-secret');
  sky.appendChild(banner);
  sky.style.display = 'block';
};

export default desktopSky;
