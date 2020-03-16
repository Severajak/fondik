const detectMobileBanner = () => {
  if (window.innerWidth > 415) return false;
  const banner = document.getElementById('mobile-fondik-banner');
  if (!banner) return false;
  if (banner.classList && banner.classList.contains('w-condition-invisible')) return false;
  return true;
};

export default detectMobileBanner;
