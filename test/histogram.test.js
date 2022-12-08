import { readDataSync } from 'indian-ocean';
import plotHistogram from '../src/plotHistogram.js';

const data = readDataSync('./test/data/groups.tsv');

const fields = ['field-a', 'field-b', 'field-c'];

data.forEach(d => {
	fields.forEach(f => {
		d[f] = +d[f];
	});
});

await plotHistogram(data, {
	facetBy: ['major_group', 'minor_group'],
	fields,
	fill: 'minor_group',
	outDir: 'test/tmp/plotHistogram',
	view: true
});
