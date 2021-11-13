
// find the right array entry 
// 1 - get which button clicked 
// 2 - decide based on that which draft to get
//   - if number == 1 then get index 0 of array
// chooses and displays the correct draft
function openDraft(number) {
    console.log("open draft " + number); // print statement

    const draft_array = ["Draft1", "Draft2", "Draft3"];
    if(number == 1) {
      console.log(draft_array[0]);
    }
    if(number == 2) {
      console.log(draft_array[1]);
    }
    if(number == 3) {
      console.log(draft_array[2]);
    }
    document.getElementById("myForm").style.display = "block";
    
}


  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }