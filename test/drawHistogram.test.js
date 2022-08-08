import { readDataSync } from 'indian-ocean';
import drawHistogram from '../lib/drawHistogram.js';

const data = readDataSync('./test/data/groups.tsv');

const fields = ['field-a', 'field-b', 'field-c'];

data.forEach(d => {
	fields.forEach(f => {
		d[f] = +d[f];
	});
});

await drawHistogram(data, {
	facetBy: ['minor_group'],
	fields,
	fill: 'minor_group',
	outDir: 'test/tmp/drawHistograms'
});
