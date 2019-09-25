const getUtm = () => {
	const url = window.location.href;
	if (!url.includes('?')) {
		return false;
	}
	const utm = url.split('?')[1];
	return utm;
};

const utmToLinks = () => {
	const utm = getUtm();
	if (!utm) {
		return null;
	}
	const links = document.querySelectorAll('a');
	links.forEach((link) => {
		const currentUrl = link.href;
		if (currentUrl.includes('www.fondik.cz')) {
			link.href = currentUrl + '?' + utm;
		}
	});
};

export default utmToLinks;
