import open from 'open';

const bodyMargin = 8;

const styles = `
	body {
		margin: ${bodyMargin}px;
	}
	figure {
		margin: 0;
	}
`;

const postJs = ``;

export default async function showChart(html, bounds = {}, css = '', title = 'My chart') {
	// console.log('showing chart', html);
	await open.openApp(open.apps.firefox, {
		newInstance: true,
		arguments: [
			'--incognito',
			`--app=data:text/html,<html><head><title>${title}</title><style>${styles}${css}</style></head><body><script>window.resizeTo(${
				bounds.x + bounds.width
			},${bounds.y + bounds.height + bodyMargin * 2 + 4});${postJs}</script>${encodeURIComponent(html)}</body></html>`
		]
	});
}
