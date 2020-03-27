const detectMobileBanner = () => {
  if (window.innerWidth > 415) return false;
  const banner = document.getElementById('mobile-fondik-banner');
  if (!banner) return false;
  if (banner.classList && banner.classList.contains('w-condition-invisible')) return false;
  renderMobileBanner(banner);
  return true;
};

const renderMobileBanner = (banner) => {
  banner.style.marginBottom = - banner.offsetHeight + 'px';
  banner.style.opacity = 1;
  const scrollBreaker = document.querySelector('.in-article-detail-holder');
  if (!scrollBreaker) return;
  window.addEventListener('scroll', () => {
    const scroll = scrollBreaker.getBoundingClientRect().bottom;
    if (scroll <= 0) {
      banner.style.transition = 'all ease-out .7s';
      banner.style.marginBottom = '0px';
    }
  });
};

export default detectMobileBanner;
