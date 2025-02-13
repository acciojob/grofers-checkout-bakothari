const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    let total = 0;
    document.querySelectorAll(".price").forEach(price => {
        total += parseInt(price.textContent);
    });

    let table = document.querySelector("table");

    // Check if table exists
    if (!table) return;

    let tableRow = document.createElement("tr");
    let tableCol1 = document.createElement("td");
    let tableCol2 = document.createElement("td");

    tableCol1.textContent = "Total Price";
    tableCol2.textContent = total;

    tableRow.appendChild(tableCol1);
    tableRow.appendChild(tableCol2);

    // Append the total row as the last row of the table
    table.appendChild(tableRow);

    // Optionally add an ID for easy Cypress targetting
    tableRow.id = "total-price-row";
};

getSumBtn.addEventListener("click", getSum);
