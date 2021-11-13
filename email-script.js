
// find the right array entry 
// 1 - get which button clicked 
// 2 - decide based on that which draft to get
//   - if number == 1 then get index 0 of array
// chooses and displays the correct draft
function openDraft(number) {
    console.log("open draft " + number); // print statement
    document.getElementById("myForm").style.display = "block";
    
}


  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }