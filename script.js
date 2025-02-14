function calculateTotal() {
    // Select all price elements inside the table
    let prices = document.querySelectorAll('.prices');
    let total = 0;

    // Loop through each price element and sum the values
    prices.forEach(price => {
        total += parseFloat(price.textContent) || 0; // Convert text to number and handle NaN
    });

    // Create a new row for displaying the total
    let table = document.querySelector('table'); // Select the table
    let totalRow = document.createElement('tr'); // Create row
    let totalCell = document.createElement('td'); // Create cell

    totalCell.colSpan = 2; // Span across two columns
    totalCell.textContent = `Total Price: ${total.toFixed(2)}`; // Format total price
    totalCell.style.fontWeight = "bold"; // Make text bold

    totalRow.appendChild(totalCell); // Append cell to row
    table.appendChild(totalRow); // Append row to table
}
