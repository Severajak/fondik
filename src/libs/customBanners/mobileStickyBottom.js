const detectMobileBanner = () => {
  if (window.innerWidth > 415) return false;
  const banner = document.getElementById('mobile-fondik-banner');
  if (!banner) return false;
  if (banner.classList && banner.classList.contains('w-condition-invisible')) return false;
  renderMobileBanner(banner);
  return true;
};

const renderMobileBanner = (banner) => {
  let bannerReady = false;
  const initBanner = () => {
    banner.style.marginBottom = - banner.offsetHeight + 'px';
    banner.style.opacity = 1;
    bannerReady = true;
  };
  if (banner.querySelector('img').complete) {
    console.log('banner ready immediately');
    initBanner(banner);
  } else {
    banner.querySelector('img').onload = () => {
      console.log('banner ready from onload');
      initBanner(banner);
    };
  }
  const scrollBreaker = document.querySelector('.in-article-detail-holder');
  if (!scrollBreaker) return;
  window.addEventListener('scroll', () => {
    const scroll = scrollBreaker.getBoundingClientRect().bottom;
    if (scroll <= 0 && bannerReady) {
      banner.style.transition = 'all ease-out .7s';
      banner.style.marginBottom = '0px';
    }
  });
};

export default detectMobileBanner;
