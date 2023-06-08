document.addEventListener("DOMContentLoaded", function() {
    const container1 = document.getElementById("container1");
    const container2 = document.getElementById("container2");
    const successMessage = document.getElementById("successMessage");
    const resetButton = document.getElementById("resetButton");
  
    // Add event listeners to draggable items
    const items = container1.querySelectorAll(".item");
    items.forEach(item => {
      item.addEventListener("dragstart", dragStart);
    });
    // Drag start event handler
    function dragStart(e) {
      e.dataTransfer.setData("text/plain", e.target.id);
      e.target.classList.add("dragging");
    }
  
  
    // Drag over event handler to allow dropping
    container2.addEventListener("dragover", dragOver);
  
    // Drag over event handler to prevent default behavior
    function dragOver(e) {
      e.preventDefault();
    }
  
    // Drop event handler
    container2.addEventListener("drop", drop);
  
    // Drop event handler
    function drop(e) {
      e.preventDefault();
      const itemId = e.dataTransfer.getData("text/plain");
      const item = document.getElementById(itemId);
      item.classList.remove("dragging");
      container2.appendChild(item);
      successMessage.textContent = "Item dropped successfully!";
    }
  
    // Reset button click event handler
    resetButton.addEventListener("click", reset);
  
    // Reset button click event handler
    function reset() {
      successMessage.textContent = "";
      container2.innerHTML = "";
      items.forEach(item => {
        container1.appendChild(item);
      });
    }
  });
  