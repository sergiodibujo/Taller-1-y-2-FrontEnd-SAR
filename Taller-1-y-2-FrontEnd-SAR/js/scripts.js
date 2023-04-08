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


// $( document ).ready(function() {
// });

// // fetch("https://acnhapi.com/v1/fossils")
// // fetch("https://glohopro.com/echo/json/jsonFossiles.json")
// // fetch("https://constructores.glde18.com/echo/jsonFossiles.json")





// Ej.1 Se que se hubiera podido hacer con un solo FETCH pero quería probar las dos formas de hacerlo
fetch("https://raw.githubusercontent.com/sergiodibujo/Taller-1-y-2-FrontEnd-SARF/main/Taller-1-y-2-FrontEnd-SAR/js/jsonFossiles.json")
  .then(response => response.json())
  .then(data => {

	  const dynoArray = data;
	//   console.log(dynoArray[0].results)

	//   console.log(dynoArray.length)
	
		const table = document.createElement('table');
			table.classList.add("table");
			const tableHeader =  document.createElement('thead');
				const theaderRow =  document.createElement('tr');
					const indexHeader =  document.createElement('th');
					const photoHeader =  document.createElement('th');
					const nameHeader =  document.createElement('th');
					const descriptionHeader =  document.createElement('th');
					const actionsHeader =  document.createElement('th');

			const tableBody =  document.createElement('tbody');

		indexHeader.innerText = "";
		photoHeader.innerText = "Imagen";
		nameHeader.innerText = "Nombre";
		descriptionHeader.innerText = "Descripción";
		actionsHeader.innerText = "Actions";
		
		table.appendChild(tableHeader)
		tableHeader.appendChild(theaderRow)

		theaderRow.appendChild(indexHeader)
		theaderRow.appendChild(photoHeader)
		theaderRow.appendChild(nameHeader)
		theaderRow.appendChild(descriptionHeader)
		theaderRow.appendChild(actionsHeader)

		table.appendChild(tableBody)


		for(let i = 0 ; i < dynoArray.length; i++) {
			
			const dynoRow = document.createElement('tr');
				const numberData = document.createElement('td');
				const photoData = document.createElement('td');
				const nameData = document.createElement('td');
				nameData.classList.add("table-name");
				const descriptionData = document.createElement('td');
				descriptionData.classList.add("table-description");
				const actionsData = document.createElement('td');
				actionsData.classList.add("table-actions");
				
				let EUesName = dynoArray[i].results.name.name_EUes
				let image_uri = dynoArray[i].results.image_uri
				let file_name = dynoArray[i].results.file_name
				let museum_phrase = dynoArray[i].results.museum_phrase
				let part_of = dynoArray[i].results.part_of
				let price = dynoArray[i].results.price


			numberData.innerHTML = `
				<div class="">
					${i + 1}
				</div>`;

			photoData.innerHTML = `
				<div class="table-image">
					<img src="${dynoArray[i].results.image_uri}"
						alt="${dynoArray[i].results.file_name}">
				</div>`
			
			nameData.innerHTML = `
				<div class="">
					${dynoArray[i].results.name.name_EUes.replace("_", " ")}
				</div>`;
			
			descriptionData.innerHTML = `
				<div class="">
					<p class="line-clamp mb-0">${dynoArray[i].results.museum_phrase}</p>
				</div>`;

			actionsData.innerHTML = `<div class="">
										<div class="btn-group">
											<button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#detail-dino" onclick="pasaDynos('${EUesName}','${image_uri}','${file_name}','museum_phrase','${part_of}','${price}')">Ver</button>
											<button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#edit-dino">Editar</button>
										</div>
									</div>`

			dynoRow.appendChild(numberData);
			dynoRow.appendChild(photoData);
			dynoRow.appendChild(nameData);
			dynoRow.appendChild(descriptionData);
			dynoRow.appendChild(actionsData);
			
			tableBody.appendChild(dynoRow)
		
		}
		// Aquí lo aplico solo a este div
		const dynoTabla = document.getElementById('dynoTabla')
		dynoTabla.appendChild(table)
		
	}
)
.catch(error => console.error('A donde se fueron los dinos?  Mi error es: ', error));



// Ej.2 OTRO FETCH El mismo pero diferente
fetch("https://raw.githubusercontent.com/sergiodibujo/Taller-1-y-2-FrontEnd-SARF/main/Taller-1-y-2-FrontEnd-SAR/js/jsonFossiles.json")
.then(response => response.json())
.then(data => mostrarData(data))
.catch(error => console.error('A donde se fueron los dinos? El error es: ', error));
// .catch(error => console.log('error', error));
const mostrarData = (data) => {
	const dynoArray = data;
	// console.log(data[0].results)
	// console.log(data.length)
	let bodyLi = ''

	for(let i = 0 ; i < data.length; i++) {

		let EUesName = dynoArray[i].results.name.name_EUes
		let image_uri = dynoArray[i].results.image_uri
		let file_name = dynoArray[i].results.file_name
		let museum_phrase = dynoArray[i].results.museum_phrase
		let part_of = dynoArray[i].results.part_of
		let price = dynoArray[i].results.price

		// Ahora vamos a crear todo esto en la ficha
		bodyLi += `
		<li class="dino">
			<div class="card">
				<div class="card-image-top">
					<img src="${dynoArray[i].results.image_uri}" alt="${dynoArray[i].results.file_name}">
				</div>
				<div class="card-body h-100">
					<div class="d-flex  flex-column h-100">
						<div class="mb-auto">
							<p class="card-title line-clamp color-black text-uppercase">${dynoArray[i].results.name.name_EUes}</p>
						</div>
						<div class="mt-auto">
							<p class="card-text line-clamp">${dynoArray[i].results.museum_phrase}</p>
							<div class="d-flex justify-content-between align-items-center">
							
									<div class="btn-group">
										<button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal" id="pasaDynos"  data-toggle="modal" data-target="#detail-dino" onclick="pasaDynos('${EUesName}','${image_uri}','${file_name}','museum_phrase','${part_of}','${price}')">Ver</button>
										<button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#edit-dino">Editar</button>
									</div>
							
								<small class="text-muted line-clamp">Parte de ${dynoArray[i].results.part_of}</small>
							</div>
						</div>
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

// Abro el modal con un onclick .No supe hacerlo con un addEventListener, me botaba que el eventlistener no era una función....lo dejo asi
const pasaDynos = (pasaNombre,pasaFoto,pasaNombreCientifico,pasaDescripcion,pasaParteDe,pasaPrecio) => {
	document.getElementById('detail-dinoLabel').textContent = pasaNombre.replace("_", " ");
	document.getElementById('detailImageImg').src = pasaFoto;
	document.getElementById('detailImageImg').alt = pasaNombreCientifico.replace("_", " ");
	document.getElementById('detailCsiName').textContent = pasaNombreCientifico.replace("_", " ");
	pasaDescripcion = `En el texto original encontré un escape que rompe todo mi texto. Debo controlarlo. Don't you see the danger, John, inherent in what you're doing here? Because we're being hunted. Well, at least you're out of the tree. Clever girl. Because we're being hunted.`
	document.getElementById('detailDescription').textContent = pasaDescripcion;
	document.getElementById('detailPartOf').textContent = pasaParteDe.replace("_", " ");
	document.getElementById('detailPrice').textContent = pasaPrecio;				
}


// Ej.3 Vamos a buscar un dyno pero Voy a serle sincero...no lo logré, el 70% de esto lo hizo chatgpt
const buscarDyno = () => {
	const buscarDyno = document.getElementById('dynoSearch').value;
	const resultado = document.getElementById('lista-resultados');

	// Buscar sobre la api crossOriginIsolated, después veo si pueso usar la mia : Clase Mar 10 1:10
	fetch(`https://raw.githubusercontent.com/sergiodibujo/Taller-1-y-2-FrontEnd-SARF/main/Taller-1-y-2-FrontEnd-SAR/js/jsonFossiles.json`)
	.then(response => response.json())
	.then(data => {
		const dynoArray = data;
		// console.log(dynoArray)
		// console.log(dynoArray[0].results)
		
		const buscarInput = document.querySelector('#dynoSearch');
		buscarInput.addEventListener('input', () => {
			const valor = buscarInput.value.trim().toLowerCase();
			const resultados = dynoArray.filter(dyno => {
				const nombre = Object.values(dyno.results.name.name_EUes).join('').toLowerCase();
				return nombre.includes(valor);
			});
			console.log(`Los resultados son: ${resultados.length}`)
			let resultadosMostrar = '';
			
			if(resultados.length == '0' || resultados.length == 0 || resultados.length == '') {
				console.log(`vacio!`)
				resultadosMostrar += `<li class="d-flex justify-content-center align-items-center flex-column">
										<p class="mt-3"><strong>No encontré un buen fósil para mostrarte. Intenta con otro.</strong></p>
										<img src="img/dinomayami.jpeg" alt="Sin resultados" height="400" width="auto">
									</li>`
					
			}
			
			for(let j = 0 ; j < resultados.length; j++) {
					console.log(resultados.length)
					numeroResultados = j+1
					// Traigo las var para el modal
					let EUesName = resultados[j].results.name.name_EUes
					let image_uri = resultados[j].results.image_uri
					let file_name = resultados[j].results.file_name
					let museum_phrase = resultados[j].results.museum_phrase
					let part_of = resultados[j].results.part_of
					let price = resultados[j].results.price
	
					resultadosMostrar += `
					<li class="dino ${numeroResultados}">
						<div class="card">
							<div class="card-image-top">
								<img src="${resultados[j].results.image_uri}" alt="${resultados[j].results.file_name}">
							</div>
							<div class="card-body h-100">
								<div class="d-flex  flex-column h-100">
									<div class="mb-auto">
										<p class="card-title line-clamp color-black text-uppercase">${resultados[j].results.name.name_EUes}</p>
									</div>
									<div class="mt-auto">
										<p class="card-text line-clamp">${resultados[j].results.museum_phrase}</p>
										<div class="d-flex justify-content-between align-items-center">
											<div class="btn-group">
												<button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal" id="pasaDynos"  data-toggle="modal" data-target="#detail-dino" onclick="pasaDynos('${EUesName}','${image_uri}','${file_name}','museum_phrase','${part_of}','${price}')">Ver</button>
												<button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#edit-dino">Editar</button>
											</div>
											<small class="text-muted line-clamp">Parte de ${resultados[j].results.part_of}</small>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>
					`

				}
				// Aquí lo aplico solo a este div que reemplazará la lista original
				const resultadoCards = document.getElementById('dinos')
				resultadoCards.innerHTML = resultadosMostrar
			

		});

	})

}