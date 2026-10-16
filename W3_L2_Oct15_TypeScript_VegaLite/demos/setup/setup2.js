/*
	(folder contains population.json file to view, but the schema loads the file from the web)
	- Make a bar chart of U.S. age distribution, with ages encoded on the Y-axis and counts on the X-axis.
*/

document.addEventListener('DOMContentLoaded', function (event) {
	var schema = {
		"$schema": "https://vega.github.io/schema/vega-lite/v4.json",
		"data": { "url": "https://vega.github.io/editor/data/population.json"},
		"transform": [{"filter": "datum.year == 2000"}], /*Only select population data from 2000*/
		/*Make a bar chart, encode the X and Y axes*/
	}
	vegaEmbed('#plot', schema, {actions:false});
});