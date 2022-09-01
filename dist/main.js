!(function () {
	'use strict';
	const e = (e, t) => {
		if (2e3 === e.width) {
			const e = document.querySelector('.leaderboardwrapper'),
				t = document.querySelector('.post-content-text'),
				o = document.querySelector('.post-content'),
				n = document.querySelector('.top'),
				s = document.querySelector('.go-up-section'),
				d = document.getElementById('ssp-zone-118579'),
				l = [
					document.querySelector('.dropdown-section-1'),
					document.querySelector('.dropdown-section-2'),
					document.querySelector('.dropdown-section-3'),
				];
			if (
				(l.forEach((e) => {
					(e.style.marginTop = '0'),
						(e.style.position = ''),
						(e.parentElement.style.opacity = 0);
				}),
				document
					.querySelectorAll("[data-ix^='show-dropdown-']")
					.forEach((e, t) => {
						e.addEventListener('click', () => {
							l.forEach((e) => {
								(e.parentElement.style.opacity = 0),
									setTimeout(() => {
										e.style.position = '';
									}, 200);
							}),
								'block' != l[t].style.display &&
									setTimeout(() => {
										(l[t].parentElement.style.opacity = 1),
											(l[t].style.position = 'relative');
									}, 200);
						});
					}),
				o
					? ((o.parentElement.style.width = '1100px'),
					  (o.style.marginTop = '180px'))
					: document
							.querySelectorAll('.post-content-text')
							.forEach(function (e) {
								const t = e.parentElement;
								(t.style.width = '1060px'), (t.style.margin = '180px auto');
							}),
				document.querySelectorAll('.post-content-text').length > 1)
			) {
				const e = document.querySelectorAll('.post-content-text')[1];
				(e.style.top = '180px'),
					(e.style.background = 'white'),
					(e.style.paddingLeft = '25px');
			}
			(e.style.display = 'none'),
				(t.style.background = 'white'),
				(n.style.width = '1060px'),
				(n.style.margin = 'auto'),
				(n.style.transform = 'translateY(226px)'),
				(s.style.padding = '30px'),
				(s.style.width = '1060px'),
				(s.style.margin = 'auto'),
				(s.style.background = 'white'),
				(d.style.transform = 'translateX(-20px)');
		}
		return (
			(document.getElementById('ssp-zone-118559').style.display = 'block'),
			sssp.writeAd(e, t)
		);
	};
	const t = () => {
		Array.prototype.slice
			.call(document.querySelectorAll("[class^='dropdown-section']"), 0)
			.forEach(function (e) {
				e.style.marginTop = '350px';
			});
	};
	var o = () => {
		if (!sssp) return;
		let o = [];
		if (
			([
				{ zoneId: 118564, id: 'ssp-zone-118564', width: 300, height: 300 },
				{ zoneId: 118569, id: 'ssp-zone-118569', width: 300, height: 600 },
				{ zoneId: 118574, id: 'ssp-zone-118574', width: 480, height: 300 },
				{ zoneId: 118579, id: 'ssp-zone-118579', width: 970, height: 310 },
			].forEach((e) => {
				const t = document.getElementById(e.id);
				t && ((t.style.display = 'block'), o.push(e));
			}),
			t(),
			window.innerWidth >= 1366)
		) {
			const t =
				(document.body.insertAdjacentHTML(
					'afterbegin',
					'<div id="ssp-branding-118559"></div>'
				),
				{
					zoneId: 118559,
					width: 2e3,
					id: 'ssp-branding-118559',
					callback: e,
					elements: [
						{ id: 'ssp-zone-118559', width: 970 },
						{ id: 'ssp-branding-118559', width: 2e3, height: 1400 },
					],
				});
			o.push(t);
		} else {
			const e = {
				zoneId: 118559,
				width: 970,
				height: 210,
				id: 'ssp-zone-118559',
			};
			o.push(e);
		}
		console.log('Calling Seznam desktop ads'), sssp.getAds(o);
	};
	const n = () => {
		let e = 0;
		const t = [
			document.getElementById('ssp-zone-118584'),
			document.getElementById('ssp-zone-118589'),
			document.getElementById('ssp-zone-118594'),
		];
		t[0] && t[1] && t[2] && sssp
			? (t.forEach((e) => {
					(e.style.height = '300px'), (e.style.marginBottom = '75px');
			  }),
			  console.log('Calling Seznam mobile ads'),
			  sssp.getAds([
					{ zoneId: 118584, id: 'ssp-zone-118584', width: 480, height: 480 },
					{ zoneId: 118589, id: 'ssp-zone-118589', width: 300, height: 300 },
					{ zoneId: 118594, id: 'ssp-zone-118594', width: 300, height: 300 },
			  ]))
			: (e++, e < 5 && window.setTimeout(n, 500));
	};
	var s = n;
	const d = 'indigo',
		l = '#fff',
		i = -1 !== window.location.search.indexOf('adsdebug=1'),
		r = function (e) {
			let t =
				arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'log';
			if (!i || !e) return;
			const o = 'display: inline-block; color: '
				.concat(l, '; background: ')
				.concat(d, '; padding: 1px 4px; border-radius: 3px;');
			console[t]('%cFondikAds', o, e);
		},
		c = (e) => {
			r('Starting skyscraper setup');
			const t = ((e) => {
				let { side: t = 'right', top: o = 0 } = e;
				const n = document.querySelector('.post-content-text');
				if ((r('Element to which sky should be appended:'), r({ page: n }), !n))
					return;
				'right' === t
					? (r('Preparing page for the sky on the RIGHT SIDE'),
					  (n.style.padding = '20px 325px 0 25px'))
					: (r('Preparing page for the sky on the LEFT SIDE'),
					  (n.style.padding = '20px 0 0 365px'));
				const { holder: s, sky: d } = ((e) => {
					let { side: t = 'right', top: o = 0 } = e;
					const n = document.createElement('div'),
						s = document.createElement('div');
					return (
						n.appendChild(s),
						(n.style.position = 'absolute'),
						(n.style.top = o + 'px'),
						(n.style.width = '300px'),
						(n.style.bottom = 0),
						'left' === t ? (n.style.left = 0) : (n.style.right = 0),
						(s.style.position = 'absolue'),
						(s.style.width = '300px'),
						(s.style.height = '600px'),
						(s.id = 'ssp-zone-118569'),
						r('Holder and sky created:'),
						r({ holder: n, sky: s }),
						{ holder: n, sky: s }
					);
				})({ side: t, top: o });
				return (
					r('Holder and sky to be appended:'),
					r({ holder: s, sky: d }),
					n.appendChild(s),
					{ holder: s, sky: d }
				);
			})({ side: e.side || 'right', top: e.top || 0 });
			if (!t) return;
			const { holder: o, sky: n } = t;
			r('Got holder and sky'),
				r({ holder: o, sky: n }),
				window.addEventListener('scroll', () => {
					a(o, n, e);
				});
		},
		a = (e, t, o) => {
			let n = 600,
				s = 0;
			o && o.bottom && o.top && ((n = o.bottom), (s = o.top));
			const d = e.getBoundingClientRect();
			d.bottom > n && d.top < s
				? ((t.style.position = 'fixed'),
				  (t.style.top = '25px'),
				  (t.style.bottom = ''))
				: d.bottom <= 600
				? ((t.style.position = 'absolute'),
				  (t.style.top = ''),
				  (t.style.bottom = '0'))
				: d.top >= 0 &&
				  ((t.style.position = 'absolute'),
				  (t.style.top = '25px'),
				  (t.style.bottom = ''));
		},
		p = 'leaderBoard',
		y = 'rectangle',
		u = 'rectangle2',
		h = 'skyscraper',
		g = 'topSponzor',
		m = 'mobileSquareTop',
		w = 'mobileSquareMid',
		b = 'mobileSquareBot';
	const f = 'style',
		x = 'data-ad-slot',
		z = 'data-ad-format',
		k = 'data-full-width-responsive',
		E = {
			[y]: [
				[f, 'display:block'],
				[x, '5471762845'],
				[z, 'auto'],
				[k, 'true'],
			],
			[u]: [
				[f, 'display:block'],
				[x, '1511518294'],
				[z, 'auto'],
				[k, 'true'],
			],
			[h]: [
				[f, 'display:block'],
				[x, '2102545239'],
				[z, 'auto'],
				[k, 'true'],
			],
			[g]: [
				[f, 'display:inline-block;width:300px;height:300px'],
				[x, '9201387779'],
			],
			[p]: [
				[f, 'display:inline-block;width:970px;height:210px'],
				[x, '5429663725'],
			],
			[m]: [
				[f, 'display:block'],
				[x, '2999181162'],
				[z, 'auto'],
				[k, 'true'],
			],
			[w]: [
				[f, 'display:block'],
				[x, '5537235662'],
				[z, 'auto'],
				[k, 'true'],
			],
			[b]: [
				[f, 'display:block'],
				[x, '1390941241'],
				[z, 'auto'],
				[k, 'true'],
			],
		},
		S = [
			[y, 'ssp-zone-118579'],
			[u, 'ssp-zone-118574'],
			[h, 'ssp-zone-118569'],
			[g, 'ssp-zone-118564'],
			[p, 'ssp-zone-118559'],
			[m, 'ssp-zone-118584'],
			[w, 'ssp-zone-118589'],
			[b, 'ssp-zone-118594'],
		],
		I = () =>
			S.reduce((e, t) => {
				try {
					e[t[0]] = document.getElementById(t[1]);
				} catch (e) {
					console.warn('Could not get '.concat(t[1]));
				}
				return e;
			}, {}),
		q = (e) => {
			const t = I();
			e.forEach((e) => {
				const o = E[e],
					n = t[e];
				r('Deploying Google ads:'),
					r({ zoneName: e, adCode: o, zone: n }),
					o &&
						n &&
						((e, t) => {
							const o = document.createElement('script'),
								n = document.createElement('ins');
							(o.src =
								'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'),
								e.forEach((e) => {
									let [t, o] = e;
									n.setAttribute(t, o);
								}),
								n.setAttribute('class', 'adsbygoogle'),
								n.setAttribute('data-ad-client', 'ca-pub-1062420095711039'),
								(t.style.display = 'block'),
								t.appendChild(n),
								t.appendChild(o);
							try {
								(adsbygoogle = window.adsbygoogle || []).push({});
							} catch (e) {
								r('Failed to call Google ad', 'error'), r(e);
							}
						})(o, n);
			});
		},
		v = () => {
			const e = window.location.href;
			return !!e.includes('?') && e.split('?')[1];
		};
	(() => {
		if (
			((() => {
				const e = v();
				if (!e) return null;
				const t = ((e) => e.split('&'))(e);
				let o = '';
				if (
					(t.forEach((e, t, n) => {
						(e.includes('utm_source=') || e.includes('utm_medium=')) &&
							((o = o.concat(e)), t != n.length - 1 && (o = o.concat('&')));
					}),
					!o)
				)
					return null;
				document.querySelectorAll('a').forEach((e) => {
					const t = e.href;
					t.includes('www.fondik.cz') &&
						(t.includes('?') ? (e.href = t + '&' + o) : (e.href = t + '?' + o));
				});
			})(),
			(window.location.pathname.match(/\//g) || []).length < 2)
		)
			return void r('HP or section - not calling any ads');
		const e = v();
		e && -1 !== e.indexOf('utm_source=www.seznam.cz')
			? (r('seznam ads'),
			  window.innerWidth >= 990 ? (c({ side: 'right', top: 325 }), o()) : s())
			: (r('google ads'),
			  (() => {
					let e = 0;
					const o = window.setInterval(() => {
						window.adsbygoogle &&
							(window.innerWidth >= 990
								? (c({ side: 'right', top: 0 }),
								  (() => {
										const e = I(),
											o = [y, u, h];
										r('Deploying Google desktop ads to these zones:'),
											r(o),
											q(o),
											o.indexOf(u) > -1 &&
												e.rectangle2 &&
												(e.rectangle2.style.width =
													window.innerWidth < 1135 ? '600px' : '750px'),
											o.indexOf(p) > -1 && t();
								  })())
								: q([m, w, b]),
							clearInterval(o)),
							e > 10 && clearInterval(o),
							e++;
					}, 100);
			  })());
	})();
})();
