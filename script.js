//your JS code here. If required.
// function removeColor() {
//             const colorSelect = document.getElementById("colorSelect");
//             colorSelect.remove(colorSelect.selectedIndex);
//         }
let  dropdown = document.getElementById("colorSelect");
for (let  i = 0; i < dropdown.options.length; i++) {
    if (dropdown.options[i].value === "green") {
        dropdown.remove(i);
        break; // Stop after removing
    }
}