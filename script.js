let billInput = document.getElementById("billTotalInput");
let tipInput = document.getElementById("tipInput");
let numberOfPeopleDiv = document.getElementById("numberOfPeople");
let perPerson = document.getElementById("perPersonTotal");
let numberOfPeople = Number(numberOfPeopleDiv.innerText);

const calculateBill = () => {
	let bill = Number(billInput.value);
	let tipPercentage = Number(tipInput.value) / 100;
	let totalAmount = bill * tipPercentage;
	let totalBill = bill + totalAmount;
	let finalBil = totalBill / numberOfPeople;
	perPerson.innerText = `${finalBil.toFixed(2).toLocaleString("en-us")}`;
};
const increasePeople = () => {
	numberOfPeople = numberOfPeople + 1;
	numberOfPeopleDiv.innerText = numberOfPeople;
	calculateBill();
};
const decreasePeople = () => {
	if (numberOfPeople <= 1) {
        alert("Hey You can not have people less then 1")
        throw 'Hey You can not have people less then 1'
		return;
	}
	numberOfPeople = numberOfPeople - 1;
	numberOfPeopleDiv.innerText = numberOfPeople;
	calculateBill();
};
