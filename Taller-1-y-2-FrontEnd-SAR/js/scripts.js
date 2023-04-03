const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'caafa2503cmsh4796cd9b6881c8dp10d989jsn3b6201ec5712',
		'X-RapidAPI-Host': 'animals-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://animals-by-api-ninjas.p.rapidapi.com/v1/animals?name=cheetah', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


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
//         urlHeader.innerText = "Description";

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