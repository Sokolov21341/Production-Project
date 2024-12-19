
var	example3Left = document.getElementById('ExploitList'),
	example3Right = document.getElementById('XML_Classes')

	
	
// Example 3 - Cloning
new Sortable(ExploitList, {
	group: {
		name: 'shared',
		pull: 'clone' // To clone: set pull to 'clone'
	},
	animation: 150
});

new Sortable(XML_Classes, {
	group: {
		name: 'shared',
		pull: 'clone',
		sort: true
	},
	animation: 150
});

function addText(text) {
	document.getElementById('xml-text').value += text;
}
