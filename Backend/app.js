
var	ExploitList = document.getElementById('ExploitList'), 
XML_Classes = document.getElementById('XML_Classes'),
Privlage_Escalation = document.getElementById("Privlage Escalation"),
Generator = document.getElementById("Generator"),
RemoveBox = document.getElementById('RemoveBox');

var list = [];



function Clear()
{
	document.getElementById('xmlEditor').value = '';
	
}

function Load()
{
	
	
}

function New()
{	
	Clear()

	
	while (list.length > 0) 
	{
		list.pop();
		alert(list);
		
	}
	
	XML_Classes.innerHTML = '<h1>XML_Classes</h1>';
	
}

function newItem(text)
{
	
		document.getElementById('xmlEditor').value += "\n<" + text + ">\n\n<" + text + ">";
		list.push(text);
		alert(list);
	

}

function addingToItem(text)
{
	
		document.getElementById('xmlEditor').value += "<" + text + ">"  +"<" + text + ">";
		list.push(text);
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

new Sortable(Privlage_Escalation, {
	group: {
		filter: '.Header',
		name: 'shared',
		pull: 'clone', // To clone: set pull to 'clone'
		put: false,
	},
	animation: 150,
	sort: false
});

new Sortable(Generator, {
	group: {
		filter: '.Header',
		name: 'shared',
		pull: 'clone', // To clone: set pull to 'clone'
		put: false,
	},
	animation: 150,
	sort: false
});
 
Sortable.create(XML_Classes, {
	
	group: {
		filter: '.Header',
		name: 'shared',

	},
	animation: 150,
	sort: false,
	onAdd: function (evt) {
		var el = evt.item;
		newItem(el.textContent);
	}
	
});

Sortable.create(RemoveBox, {
	group: "shared",
	
	onAdd: function (evt) {
	  var el = evt.item;
	  el.parentNode.removeChild(el);
	}
  });

for (var i = 0; i < nestedSortables.length; i++) {
	new Sortable(nestedSortables[i], {
		group: 'nested',
		animation: 150,
		fallbackOnBody: true,
		swapThreshold: 0.65
	});
}  


  


