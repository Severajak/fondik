import getBranding from './seznamBranding.js';

const desktopAds = () => {
  if (!sssp) return;
  const ads = [
    {
      "zoneId": 118564,
      "id": "ssp-zone-118564",
      "width": 300,
      "height": 300
    },
    {
      "zoneId": 118569,
      "id": "ssp-zone-118569",
      "width": 300,
      "height": 600
    },
    {
      "zoneId": 118574,
      "id": "ssp-zone-118574",
      "width": 480,
      "height": 300
    },
    {
      "zoneId": 118579,
      "id": "ssp-zone-118579",
      "width": 970,
      "height": 310
    }
  ];
  let adRequest = [];

  ads.forEach(ad => {
    const zone = document.getElementById(ad.id);
    if (!zone) return;
    zone.style.display = 'block';
    adRequest.push(ad);
  });

  const dropDowns = Array.prototype.slice.call(document.querySelectorAll("[class^='dropdown-section']"), 0);
  dropDowns.forEach(function (elem) {
    elem.style.marginTop = '350px';
  });

  // if branding
  if (window.innerWidth >= 1366) {
    const brandingRequest = getBranding();
    adRequest.push(brandingRequest);
  } else {
    // Ask for leaderboard
    const leaderboardRequest = {
      zoneId: 118559,
      width: 970,
      height: 210,
      id: 'ssp-zone-118559'
    }
    adRequest.push(leaderboardRequest);
  }

  console.log('Calling Seznam desktop ads');
  sssp.getAds(adRequest);
}

export default desktopAds;
