// repeat on my own

const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleChange));
let lastChecked;

function handleChange(e) {
  if (e.shiftKey && this.checked) {// this = event target
    console.log("test")
    let inBetween = false;
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    })
  }
  lastChecked = this;
}







// const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']")

// let lastChecked;

// function handleCheck(e) {
//   // Check if they have shift key down
//   // AND check that they are checking it (not unchecking)
//   let inBetween = false;
//   if(e.shiftKey && this.checked) {
//     // go ahead
//     // loop over every single checkbox
//     checkboxes.forEach(checkbox => {
//       console.log(checkbox)
//       if(checkbox === this || checkbox === lastChecked) {
//         inBetween = !inBetween;
//       }
//       if (inBetween) {
//         checkbox.checked = true;
//       }
//     })
//   }


//   lastChecked = this;
// }





// checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));




// my solution

// let shiftPressed = false;
// let lastCheckedItemIndex;
// let previousCheckedItemIndex;
// const items = [...document.querySelectorAll(".item")];
// const checkboxes = [...document.querySelectorAll("[type=checkbox]")];

//     checkboxes.forEach(checkbox => checkbox.addEventListener("click", (e) => checkAll(e)))

//     function checkAll(e)
//     {
//       if (e.target.checked === false) return;
//       console.clear()
//       if (!shiftPressed)
//       {
//         lastCheckedItemIndex = getIndex(e);
//       }
//       console.log(lastCheckedItemIndex)
//       if (shiftPressed)
//       {
//         previousCheckedItemIndex = lastCheckedItemIndex;
//         let nextCheckedItemIndex = getIndex(e);
//         let selectedItems = items.slice(previousCheckedItemIndex, nextCheckedItemIndex + 1);
//         console.log(selectedItems);
//         selectedItems.forEach(item =>
//           {
//             item.querySelector("input").checked = true;
//           })
//         }

//         function getIndex(e)
//         {
//           return items.indexOf(e.target.closest(".item"));
//         }
//       }


//       document.addEventListener("keydown", e =>
//       {
//         if (e.key === "Shift")
//         {

//           shiftPressed = true;
//           console.log(shiftPressed);
//         }
//       })

//       document.addEventListener("keyup", e =>
//       {
//         if (e.key === "Shift")
//         {
//           shiftPressed = false;
//           console.log(shiftPressed);
//         }
//       })
