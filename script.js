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
tabelcol1.textContent = total
table.appendChild(tableRow)
tableRow.appendChild(tabelcol1)
}
getSumBtn.addEventListener("click", getSum);
