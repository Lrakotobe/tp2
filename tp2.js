var people= []
var table= document.createElement("table");
var line= document.createElement("tr");
var cell= document.createElement("td");
cell.innerHTML=console.log(person);
for (i=0; i<2; i++){
	var person= {
		Last: faker.name.lastName(),
		First: faker.name.firstName(),
		Age: randRange(18,100),
		Job: faker.lorem.words(),
		Tel: faker.phone.phoneNumber(),
		Adress: faker.address.city(),
	}
}


function randRange(min, max){
	return Math.floor(Math.random() * (max-min+1)) +min;
}
