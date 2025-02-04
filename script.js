//your JS code here. If required.
	
function removeColor(Select and Remove){
	let dropdown = document.getElementById("colorSelect");
	let selectedIndex = dropdown.selectedIndex;
if (selectedIndex !== -1 ){
	dropdown.remove(selectedIndex)
}


}