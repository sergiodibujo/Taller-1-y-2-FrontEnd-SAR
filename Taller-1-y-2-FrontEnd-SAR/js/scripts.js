// https://any-api.com/?tag=tools
// https://www.jsonapi.co/json-queue
// https://jsonplaceholder.typicode.com/

// https://www.jsonapi.co/public-api/Game%20of%20Thrones%20Quotes
// https://acnhapi.com/doc#operation/get-bugs-bugID
// https://api.gbif.org/v1/


// // https://rapidapi.com/apininjas/api/animals-by-api-ninjas/
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'caafa2503cmsh4796cd9b6881c8dp10d989jsn3b6201ec5712',
// 		'X-RapidAPI-Host': 'animals-by-api-ninjas.p.rapidapi.com'
// 	}
// };
// fetch('https://animals-by-api-ninjas.p.rapidapi.com/v1/animals?name=elephant', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));




// fetch("https://acnhapi.com/v1/fossils")
// fetch("https://glohopro.com/echo/json/jsonFossiles.json")
// fetch("https://constructores.glde18.com/echo/jsonFossiles.json")
fetch("https://raw.githubusercontent.com/sergiodibujo/Taller-1-y-2-FrontEnd-SARF/main/Taller-1-y-2-FrontEnd-SAR/js/jsonFossiles.json")
  .then(response => response.json())
  .then(data => {

	  const dynoArray = data;
	  console.log(dynoArray)
	//   console.log(`lenght: ${dynoArray.lenght}`)
	
	
		const table = document.createElement('table');
		const tableHeader =  document.createElement('tr');
		const nameHeader =  document.createElement('th');
		const descriptionHeader =  document.createElement('th');
		nameHeader.innerText = "Name";
		descriptionHeader.innerText = "Description";
		table.appendChild(tableHeader)

		for(let i = 0 ; i < dynoArray.lenght; i++) {
console.log(`Entra aquí?`)
			const dynoRow = document.createElement('tr');
			const numberData = document.createElement('td');
			const nameData = document.createElement('td');
			const descriptionData = document.createElement('td');

			numberData.innerHTML = i + 1;
			nameData.innerHTML = dynoArray[i].name;
			descriptionData.innerHTML = dynoArray[i].Description;

			dynoRow.appendChild(numberData);
			dynoRow.appendChild(nameData);
			dynoRow.appendChild(descriptionData);

			table.appendChild(dynoRow)
		}
		document.body.appendChild(table)

	}
)
  .catch(error => console.log('error', error));
// .catch(error => console.error('A donde se fueron los dinos?'));

