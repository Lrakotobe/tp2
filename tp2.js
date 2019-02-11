window.addEventListener("load", main);
var people = [];
var table= document.createElement('table');
var line= document.createElement('tr');
var cell= document.createElement('td');

function main(event){
	document.write("<table>");
	document.write("<tr>");
	document.write("<td>Last</td><td>First</td><td>Age</td><td>Job</td><td>Tel</td><td>Adress</td>");
	document.write("<tr>");
	for (var i=0; i<50; i++){
		var person= {
			Last: faker.name.lastName(),
			First: faker.name.firstName(),
			Age: randRange(18,100),
			Job: faker.lorem.words(),
			Tel: faker.phone.phoneNumber(),
			Adress: faker.address.city(),
		}	
		people.push(person);
	}
	document.write("<tr>");
   	document.write("<td>" + console.table(people) + "</td>");
   	document.write("</tr>");
    document.write("</table>");
}

function tab(){
	 for (var i = 0; i < people.length; i++){
		table.appendChild(line);
		line.appendChild(cell);
		cell.innerHTML= main;
	document.body.appendChild(table);
	}
}



function randRange(min, max){
	return Math.floor(Math.random() * (max-min+1)) +min;
}

