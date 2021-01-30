const fixLeaderboard = () => {
	const dropDowns = Array.prototype.slice.call(
		document.querySelectorAll("[class^='dropdown-section']"),
		0
	);
	dropDowns.forEach(function (elem) {
		elem.style.marginTop = '350px';
	});
};

export { fixLeaderboard };
