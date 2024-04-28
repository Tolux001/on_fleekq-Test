// Uploading transaction dynamically : Mimicing the use of Api's
transaction = [
	{
		index: 1,
		img: "./images/taxi.jpeg",
		name: "Taxi",
		time: "01:21 PM",
		price: 9.20,
	},
	{
		index: 2,
		img: "./images/Vectorshoppping.svg",
		name: "Shopping",
		time: "11:15 PM",
		price: 142.00,
	},
	{
		index: 3,
		img: "./images/taxi.jpeg",
		name: "Netflix",
		time: "Jan 10, 2020",
		price: 24.99,
	},
];

sectionHistory = document.querySelector(".section--history");

window.addEventListener('DOMContentLoaded', () => {
    let transactionItem = transaction.map((item) => {
        // console.log(item);
        
        return `
            <article>
                <div>
                    <div>
                        <img src=${item.img} alt=${item.name}>
                    </div>
                    <div>
                        <h5>${item.name}</h5>
                        <p>${item.time}</p>
                    </div>
                </div>
                <div>
                    <h5>-$${item.price}</h5>
                </div>
            </article>
        `
    })
    transactionItem = transactionItem.join("")
    // console.log(transactionItem)
    sectionHistory.innerHTML = transactionItem;
})