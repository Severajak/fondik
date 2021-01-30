/*
< !--AdSense script-- >
<script data-ad-client="ca-pub-1062420095711039" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
*/
const googleHeadTag = () => {
	const scriptTag = document.createElement('script');
	scriptTag.dataset.adClient = 'ca-pub-1062420095711039';
	scriptTag.async = true;
	scriptTag.src =
		'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
	document.head.appendChild(scriptTag);
};

export { googleHeadTag };
