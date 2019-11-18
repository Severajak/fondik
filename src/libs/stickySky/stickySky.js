const checkIfReady = (options) => {
	let counter = 0;
  if ( document.querySelector('.skyscraperholder') && document.querySelector('.skyscraper') ) {
		const holder = document.querySelector('.skyscraperholder');
		const sky = document.querySelector('.skyscraper');
		window.addEventListener('scroll', () => {
			stick(holder, sky, options);
		});
	} else if ( counter < 20 ) {
		window.setTimeout(checkIfReady, 100); // this checks the flag every 100 milliseconds
		counter++;
	}
}

const stick = (holder, sky, options) => {
	let bot = 600;
	let top = 0;
	if (options && options.bottom && options.top) {
		bot = options.bottom;
		top = options.top;
	}
  const rect = holder.getBoundingClientRect();
  if (rect.bottom > bot && rect.top < top) {
		sky.style.position = 'fixed';
		sky.style.top = '25px';
		sky.style.bottom = '';
  } else if (rect.bottom <= 600) {
		sky.style.position = 'absolute';
		sky.style.top = '';
		sky.style.bottom = '0';
  } else if (rect.top >= 0) {
		sky.style.position = 'absolute';
		sky.style.top = '25px';
		sky.style.bottom = '';
  }
}

export default checkIfReady;
