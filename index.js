CSS:

span.market_listing_price.market_listing_price_with_fee {
	color: #E10505
}
span.market_listing_price.market_listing_price_without_fee {
	display: block;
	color: #08B032;
}
div#market_buyorder_info_details {
	display: block !important;
}
#p123{
	color: #08B032;
}
#b123 {
	color: #E10505;
}
#p123, #b123 {
	margin: 0;
}
#my-btn {
	height: 40px;
	font-size: 20px;
	color: #e6ff8f !important;
}

JavaScript:

const btn = document.createElement("BUTTON");
btn.innerHTML = "Цена без комиссии";
btn.classList.add('btn_green_white_innerfade');
btn.classList.add('market_commodity_buy_button');
btn.classList.add('btn_medium');
btn.setAttribute("id", "my-btn");
document.getElementById("market_commodity_order_spread").appendChild(btn);
const onClick = () => {
	const table = document.getElementById("market_commodity_forsale_table");
	const cells = table.getElementsByTagName("td");
	for (let i = 0; i<cells.length-2; i++) {
		if (!(i%2)) {
			const coast = cells[i].innerText;
				cells[i].innerHTML = `<p id="b123">${coast}<b id="p123">${(Number((coast.substr(0,coast.length-5)).replace(',','.'))*.87).toFixed(2)} руб.</b></p>`
		}
	}
}
onClick();
document.getElementById('my-btn').addEventListener('click', onClick);
