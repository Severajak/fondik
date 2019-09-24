import getBranding from './seznamBranding.js';

const desktopAds = () => {
  let adCallCounter = 0;
  if (
    document.getElementById('ssp-zone-118559') &&
    document.getElementById('ssp-zone-118564') &&
    document.getElementById('ssp-zone-118569') &&
    document.getElementById('ssp-zone-118574') &&
    document.getElementById('ssp-zone-118579') &&
    sssp
  ) {
    document.querySelector('.post-content-text').style.padding = '20px 325px 0 25px';
    document.getElementById('ssp-zone-118559').style.display = 'block';
    document.getElementById('ssp-zone-118564').style.display = 'block';
    document.getElementById('ssp-zone-118569').style.display = 'block';
    document.getElementById('ssp-zone-118574').style.display = 'block';
    document.getElementById('ssp-zone-118579').style.display = 'block';
    const dropDowns = Array.prototype.slice.call(document.querySelectorAll("[class^='dropdown-section']"), 0);
    dropDowns.forEach(function (elem) {
      elem.style.marginTop = '350px';
    });

    const adRequest = [
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
        id: "ssp-zone-118559"
      }
      adRequest.push(leaderboardRequest);
    }
    sssp.getAds(adRequest);
  } else {
    adCallCounter++;
    if (adCallCounter < 5) { window.setTimeout(desktopAds, 500); } /* this checks the flag every 100 milliseconds*/
  }
}

export default desktopAds;
