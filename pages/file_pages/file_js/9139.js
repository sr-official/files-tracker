// Sample data
const filesData = [
  { accounting: '---', business: 'Ch : 02', english: '---', history: 'Ch : 07 - Ch : 12', management: '01. Planning' },
  { accounting: '---', business: '---', english: '---', history: '---', management: '---' },
  { accounting: '---', business: '---', english: '---', history: '---', management: '---' },
  { accounting: '---', business: '---', english: '---', history: '---', management: '---' },
  { accounting: '---', business: '---', english: '---', history: '---', management: '---' },
  { accounting: '---', business: '---', english: '---', history: '---', management: '---' },
  // Add more data as needed
];

// Function to populate files table
function populateFilesTable() {
  const tableBody = document.getElementById("files-table-body");

  filesData.forEach(data => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${data.accounting}</td>
      <td>${data.business}</td>
      <td>${data.english}</td>
      <td>${data.history}</td>
      <td>${data.management}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Populate files table on page load
populateFilesTable();
