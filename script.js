
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