const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const totalPriceElement = document.createElement("p");
totalPriceElement.id = "ans"; 
document.body.appendChild(totalPriceElement);

const getSum = () => {
    let total = 0;
    document.querySelectorAll(".price").forEach(price => {
        total += parseInt(price.textContent);
    });

    
    totalPriceElement.textContent = "Total Price: " + total;
};

getSumBtn.addEventListener("click", getSum);