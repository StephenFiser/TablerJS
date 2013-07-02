var TablerJS = {
	tableInit: function() {
		var tables = new Array("states")
		TablerJS.stripes(tables);
		TablerJS.highlighter(tables);
	},
	stripes: function(tableArray) {
		for (var main=0; main < tableArray.length; main++) {// In my example, there is only one table, so this just runs once
			var id = tableArray[main]; // reads in tables[0] -> "states"
			var table = document.getElementById(id);
			if (table == null) {return; }
			var tbody = table.getElementsByTagName("tbody");
			for (var i=0; i < tbody.length; i++) {
				var tr = tbody[i].getElementsByTagName("tr");
				for (var j=0; j < tr.length; j++) {
					tr[j].className = (j % 2 == 1)?"gray":"lightGray";
				}
			}
		}
	},
	highlighter: function(tableArray) {
		var current = null;
		if (document.getElementById != null) {
			for (var main = 0; main < tableArray.length; main++) {
				var id = tableArray[main]; 
				var table = document.getElementById(id);
				if (table != null) {
					var trs = table.getElementsByTagName('tr');
					for (var i=0;i < trs.length; i++) {
						if (trs[i].parentNode.nodeName.toUpperCase() == 'TBODY'){
							trs[i].onmouseover = function() {
								if (current == this) { return false; }
								this.style.backgroundColor="#FFCC00";
								return false;
							}
							trs[i].onmouseout = function() {
								if (current == this) { return false; }
								this.style.backgroundColor = "";
								return false;
							}
							trs[i].onmousedown = function() {
								if (current != null) {
									current.style.backgroundColor = "";
									current.style.fontWeight = "";
									if (current == this) {
										current = null;
										return false;
									}
								}
								current = this; 
								this.style.backgroundColor = "#a5cdf0";
								this.style.fontWeight = "bold";
								return false;
							}
						}
					}
				}
			}
		}
	}
};

	

$(function() {
	TablerJS.tableInit();
});