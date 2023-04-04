// https://any-api.com/?tag=tools
// https://www.jsonapi.co/json-queue
// https://jsonplaceholder.typicode.com/

// https://www.jsonapi.co/public-api/Game%20of%20Thrones%20Quotes
// https://acnhapi.com/doc#operation/get-bugs-bugID
// https://api.gbif.org/v1/





fetch("https://acnhapi.com/v1/fossils")
  .then(response => response.json())
  .then(data => {

	  const dynoArray = data;
	  console.log(dynoArray)

		const table = document.createElement('table');
		const tableHeader =  document.createElement('tr');
		const nameHeader =  document.createElement('th');
		const descriptionHeader =  document.createElement('th');
		nameHeader.innerText = "Name";
		descriptionHeader.innerText = "Description";
		table.appendChild(tableHeader)


		console.log(dynoArray.lenght)

		for(let i = 0 ; i < dynoArray.lenght; i++) {

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




// function buscarDyno () {
//     const dyno = document.getElementById("dynoName")
// }

// // Using Fetch API https://github.com/rakhadjo/tyrannosaurus.rest
// fetch('https://dinosaur-facts-api.shultzlab.com/dinosaurs')
//   .then(response => response.json())
//   .then(result => {
//         console.log(result)
//         const dynoArray = result;

//         const table = document.createElement('table');
//         const tableHeader =  document.createElement('tr');
//         const nameHeader =  document.createElement('th');
//         const descriptionHeader =  document.createElement('th');

//         nameHeader.innerText = "Name";
//         descriptionHeader.innerText = "Description";

//         table.appendChild(tableHeader)

//         for(let i = 0 ; i < dynoArray.lenght; i++) {
//             const dynoRow = document.createElement('tr');
//             const numberData = document.createElement('td');
//             const nameData = document.createElement('td');
//             const descriptionData = document.createElement('td');

//             numberData.innerHTML = i + 1;
//             nameData.innerHTML = dynoArray[i].name;
//             descriptionData.innerHTML = dynoArray[i].Description;

//             dynoRow.appendChild(numberData);
//             dynoRow.appendChild(nameData);
//             dynoRow.appendChild(descriptionData);

//             table.appendChild(dynoRow)
//         }
//         document.body.appendChild(table)

//     }
//   )
//   .catch(error => console.error('A donde se fueron los dinos?'))