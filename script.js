const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    let total = 0;
    document.querySelectorAll(".price").forEach(price => {
        total += parseInt(price.textContent);
    });

    let table = document.querySelector("table");

    if (table) {
        let tableRow = document.createElement("tr");
        let tableCol1 = document.createElement("td");
        tableCol1.textContent = "Total";
        tableRow.appendChild(tableCol1);

        let tableCol2 = document.createElement("td");
        tableCol2.textContent = total;
        tableRow.appendChild(tableCol2);

        table.appendChild(tableRow);
    } else {
        console.error("Table not found!");
    }
};

getSumBtn.addEventListener("click", getSum);
