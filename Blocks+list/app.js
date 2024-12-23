
var	ExploitList = document.getElementById('ExploitList'), 
XML_Classes = document.getElementById('XML_Classes'),
RemoveBox = document.getElementById('RemoveBox');

var list;

list = new Array();

function Clear()
{
	document.getElementById('xml-text').value = "";
	
}

function New()
{
	Clear()

	 var Max = list.length;
	while (Max > 0) 
	{
		console.log(list[Max].value);
		list.pop();
		
	}
	 
	document.getElementById(XML_Classes).innerHTML = ""; 

}

function newItem(text)
{
	
		document.getElementById('xml-text').value += "\n<" + text + ">\n\n<" + text + ">";
		list.add(text);
	

}

function addingToItem(text)
{
	
		document.getElementById('xml-text').value += "<" + text + ">"  +"<" + text + ">";
		list.add(text);
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

Sortable.create(RemoveBox, {
	group: "shared",
	
	onAdd: function (evt) {
	  var el = evt.item;
	  el.parentNode.removeChild(el);
	}
  });


  


