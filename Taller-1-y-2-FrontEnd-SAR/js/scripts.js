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




// // fetch("https://acnhapi.com/v1/fossils")
// // fetch("https://glohopro.com/echo/json/jsonFossiles.json")
// // fetch("https://constructores.glde18.com/echo/jsonFossiles.json")
// fetch("https://raw.githubusercontent.com/sergiodibujo/Taller-1-y-2-FrontEnd-SARF/main/Taller-1-y-2-FrontEnd-SAR/js/jsonFossiles.json")
//   .then(response => response.json())
//   .then(data => {

// 	  const dynoArray = data;
// 	  console.log(dynoArray[0].results)

// 	  console.log(dynoArray.length)
	
// 		const table = document.createElement('table');
// 			table.classList.add("table");
// 			const tableHeader =  document.createElement('thead');
// 				const theaderRow =  document.createElement('tr');
// 					const numberheader =  document.createElement('th');
// 					const nameHeader =  document.createElement('th');
// 					const descriptionHeader =  document.createElement('th');

// 			const tableBody =  document.createElement('tbody');

// 		numberheader.innerText = "Name";
// 		nameHeader.innerText = "Name";
// 		descriptionHeader.innerText = "Description";
		
// 		table.appendChild(tableHeader)
// 		tableHeader.appendChild(theaderRow)
// 		theaderRow.appendChild(numberheader)
// 		theaderRow.appendChild(nameHeader)
// 		theaderRow.appendChild(descriptionHeader)

// 		table.appendChild(tableBody)


// 		for(let i = 0 ; i < dynoArray.length; i++) {
			
// 			const dynoRow = document.createElement('tr');
// 				const numberData = document.createElement('td');
// 				const nameData = document.createElement('td');
// 				const descriptionData = document.createElement('td');

// 			numberData.innerHTML = i + 1;
// 			nameData.innerHTML = dynoArray[i].results.file_name;
// 			descriptionData.innerHTML = dynoArray[i].results.museum_phrase;

// 			dynoRow.appendChild(numberData);
// 			dynoRow.appendChild(nameData);
// 			dynoRow.appendChild(descriptionData);
			
// 			tableBody.appendChild(dynoRow)
			

// 			// Ahora vamos a crear todo esto en la ficha
// 			const albumLi = document.createElement('li')
// 			albumLi.classList.add("dino");

// 			const albumCard = document.createElement('div')
// 			albumCard.classList.add("card");
// 			document.querySelector('.dino').appendChild(albumCard);

// 			const albumCardImg = document.createElement('div')
// 			albumCardImg.classList.add("card-image-top");
// 			document.querySelector('.card').appendChild(albumCardImg);

// 			const imageCard = document.createElement('img')
// 			document.querySelector('.card-image-top').appendChild(imageCard);



// 		}
// 		// Aquí lo aplico en toda la pantalla
// 		// document.body.appendChild(table)

// 		// Aquí lo aplico solo a este div
// 		const dynoTabla = document.getElementById('dynoTabla')
// 		dynoTabla.appendChild(table)
		
// 		const dynoCards = document.getElementById('dinos')
// 		dynoCards.appendChild(albumLi)

// 	}
// )
//   .catch(error => console.log('error', error));
// // .catch(error => console.error('A donde se fueron los dinos?'));





// $( document ).ready(function() {
    

	// OTRO FETCH
	fetch("https://raw.githubusercontent.com/sergiodibujo/Taller-1-y-2-FrontEnd-SARF/main/Taller-1-y-2-FrontEnd-SAR/js/jsonFossiles.json")
	.then(response => response.json())
	.then(data => mostrarData(data))
	.catch(error => console.error('A donde se fueron los dinos? El error es: ', error));
	// .catch(error => console.log('error', error));
	const mostrarData = (data) => {
		const dynoArray = data;
		console.log(data[0].results)
		console.log(data.length)
		let bodyLi = ''

		for(let i = 0 ; i < data.length; i++) {
			// console.log(`Entré al for????`)
			// Ahora vamos a crear todo esto en la ficha
			bodyLi += `
			<li class="dino">
				<div class="card">
					<div class="card-image-top">
						<img src="${dynoArray[i].results.image_uri}"
							alt="${dynoArray[i].results.file_name}">
					</div>
					<div class="card-body">
						<p class="card-text line-clamp">${dynoArray[i].results.museum_phrase}</p>
						<div class="d-flex justify-content-between align-items-center">
							<div class="btn-group">
								<button type="button" class="btn btn-sm btn-outline-secondary">View</button>
								<button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#edit-dino" onclick="pasaDynos()">Edit</button>
							</div>
							<small class="text-muted line-clamp">Part of ${dynoArray[i].results.part_of}</small>
						</div>
					</div>
				</div>
			</li>
			`
		}
		
		// Aquí lo aplico solo a este div
		const dynoCards = document.getElementById('dinos')
		dynoCards.innerHTML = bodyLi
		
	}

// });
