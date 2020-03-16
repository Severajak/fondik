const mobileAds = () => {
  let adCallCounter = 0;
  const squares = [
    document.getElementById('ssp-zone-118584'),
    document.getElementById('ssp-zone-118589'),
    document.getElementById('ssp-zone-118594')
  ];
  if (
    squares[0] &&
    squares[1] &&
    squares[2] &&
    sssp
  ) {
    // webflow strugles with hiding elements so I had to set height and margin-bottom to 0
    squares.forEach((square) => {
      square.style.height = '300px';
      square.style.marginBottom = '75px';
    });
    console.log('Calling Seznam mobile ads');
    sssp.getAds([
      {
        "zoneId": 118584,			// unikátní identifikátor reklamní zóny
        "id": "ssp-zone-118584",	// ID elementu, do kterého se vypisuje reklama
        "width": 480,			// maximální šířka reklamy v zóně
        "height": 480			// maximální výška reklamy v zóně
      },
      {
        "zoneId": 118589,			// unikátní identifikátor reklamní zóny
        "id": "ssp-zone-118589",	// ID elementu, do kterého se vypisuje reklama
        "width": 300,			// maximální šířka reklamy v zóně
        "height": 300			// maximální výška reklamy v zóně
      },
      {
        "zoneId": 118594,			// unikátní identifikátor reklamní zóny
        "id": "ssp-zone-118594",	// ID elementu, do kterého se vypisuje reklama
        "width": 300,			// maximální šířka reklamy v zóně
        "height": 300			// maximální výška reklamy v zóně
      }
    ]);
  } else {
    adCallCounter++;
    if (adCallCounter < 5) { window.setTimeout(mobileAds, 500); } // this checks the flag every 500 milliseconds
  }
}

export default mobileAds;
