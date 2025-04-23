
  let button = document.querySelector("button");
  let dropdown = document.getElementById("colorSelect");

  button.addEventListener("click", function () {
    for (let i = 0; i < dropdown.options.length; i++) {
      if (dropdown.options[i].value === "green") {
        dropdown.remove(i);
        break;
      }
    }
  






// function removeOption() {
//   var dropdown = document.getElementById("myDropdown");

//   for (var i = 0; i < dropdown.options.length; i++) {
//     if (dropdown.options[i].value === "two") {
//       dropdown.remove(i);
//       break;
//     }
//   }
// }











// let  dropdown = document.getElementById("colorSelect");
// let optionToRemove = dropdown.options[1]; // 3rd option

// dropdown.removeChild(optionToRemove);









//your JS code here. If required.
// function removeColor() {
//             const colorSelect = document.getElementById("colorSelect");
//             colorSelect.remove(colorSelect.selectedIndex);
//         }
// let  dropdown = document.getElementById("colorSelect");
// for (let  i = 0; i < dropdown.options.length; i++) {
//     if (dropdown.options[i].value === "green") {
//         dropdown.remove(i);
//         break; // Stop after removing
//     }
// }