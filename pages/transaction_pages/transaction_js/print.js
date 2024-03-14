// Function to handle saving the page
function savePage() {
  window.print();
}

// Event listener for the save page button
document.getElementById("save-page-button").addEventListener("click", savePage);
