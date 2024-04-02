// Sample student transaction data
const studentTransactions = [
	{ depositDate: '18-03-2024', depositAmount: 100, deductDate: '01-04-2024', deductedAmount: 86 },
	{ depositDate: '0000-00-00', depositAmount: '00', deductDate: '0000-00-00', deductedAmount: '00' },
	// Add more student transaction data as needed
];

// Get the table element from the HTML
const table = document.getElementById('transaction-table');

// Loop through the studentTransactions array and populate the table
studentTransactions.forEach(transaction => {
	const row = table.insertRow();
	row.innerHTML = `
			<td>${transaction.depositDate}</td>
			<td>${transaction.depositAmount}</td>
			<td>${transaction.deductDate}</td>
			<td>${transaction.deductedAmount}</td>
			<td>${transaction.depositAmount - transaction.deductedAmount}</td>
	`;
});
