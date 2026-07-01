
let customers = Number(prompt("Enter number of customers:"));

for (let c = 1; c <= customers; c++) {
    let customerName = prompt("Enter customer name:");

    let products = Number(prompt("Enter number of products:"));

    let totalBill = 0;
    let expensiveProduct = "";
    let maxCost = 0;

    let bill = "Customer: " + customerName + "\n\n";

    for (let i = 1; i <= products; i++) {
        let product = prompt("Enter product name:");
        let quantity = Number(prompt("Enter quantity:"));
        let price = Number(prompt("Enter price:"));

        let amount = quantity * price;
        totalBill += amount;

        if (amount > maxCost) {
            maxCost = amount;
            expensiveProduct = product;
        }

        bill += product + " - Qty: " + quantity + " - Price: " + price + " - Amount: " + amount + "\n";
    }

    let discount = 0;

    if (totalBill >= 5000) {
        discount = totalBill * 0.2;
    } else if (totalBill >= 3000) {
        discount = totalBill * 0.15;
    } else if (totalBill >= 1000) {
        discount = totalBill * 0.1;
    }

    let afterDiscount = totalBill - discount;
    let gst = afterDiscount * 0.18;
    let finalBill = afterDiscount + gst;

    let payment = prompt("Enter payment method (Cash/UPI/Card)");

    let paymentDetails = "";

    switch (payment.toLowerCase()) {
        case "cash":
            paymentDetails = "Payment through Cash";
            break;
        case "upi":
            paymentDetails = "Payment through UPI";
            break;
        case "card":
            paymentDetails = "Payment through Card";
            break;
        default:
            paymentDetails = "Invalid Payment Method";
    }

    bill += "\nTotal Bill: " + totalBill;
    bill += "\nDiscount: " + discount;
    bill += "\nGST (18%): " + gst;
    bill += "\nFinal Bill: " + finalBill;
    bill += "\nMost Expensive Product: " + expensiveProduct;
    bill += "\n" + paymentDetails;

    alert(bill);
}