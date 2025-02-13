const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let total = 0;
const getSum = () => {
    //Add your code here
    let total = 0;
    document.querySelectorAll(".price").forEach(price => { total += parseInt(price.textContent) })


let table = document.querySelector("table")
let tableRow = document.createElement("tr")
let tabelcol1 = document.createElement("td")
    let tabelcol2 = document.createElement("td")
tabelcol2.textContent = total
    tabelcol1.textContent = "total price"
table.appendChild(tableRow)
tableRow.appendChild(tabelcol1)
    tableRow.appendChild(tabelcol2)
}
getSumBtn.addEventListener("click", getSum);

