
var	example3Left = document.getElementById('ExploitList'), example3Right = document.getElementById('XML_Classes')

function addText(text) {
	document.getElementById('xml-text').value += text + "\n\n" + text;
}	
	
// This is the exploit list it cannot be added to and the sorting wont change
new Sortable(ExploitList, {
	group: {
		filter: '.Header',
		name: 'shared',
		pull: 'clone', // To clone: set pull to 'clone'
		put: false,
	},
	animation: 150,
	sort: false
});

// This is Class diagram 
new Sortable(XML_Classes, {
	group: {
		filter: '.Header',
		name: 'shared',
		sort: true
	},
	animation: 150
});


