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





// Ej.1 Se que se hubiera podido hacer con un solo FETCH pero quería probar las dos formas de hacerlo
fetch("https://raw.githubusercontent.com/sergiodibujo/Taller-1-y-2-FrontEnd-SARF/main/Taller-1-y-2-FrontEnd-SAR/js/jsonFossiles.json")
  .then(response => response.json())
  .then(data => {

	  const dynoArray = data;
	// console.log(dynoArray[0].results)

	// console.log(dynoArray.length)
	
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
					<img src="${dynoArray[i].results.image_uri}" alt="${dynoArray[i].results.file_name}" loading="lazy">
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
											<button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#detailDino" onclick="pasaDynos('${EUesName}','${image_uri}','${file_name}','museum_phrase','${part_of}','${price}')">Ver</button>
											<button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#editDino" onclick="edit_pasaDynos('${EUesName}','${image_uri}','${file_name}','museum_phrase','${part_of}','${price}')">Editar</button>
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
					<img src="${dynoArray[i].results.image_uri}" alt="${dynoArray[i].results.file_name}" loading="lazy">
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
										<button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal" id="pasaDynos"  data-toggle="modal" data-target="#detailDino" onclick="pasaDynos('${EUesName}','${image_uri}','${file_name}','museum_phrase','${part_of}','${price}')">Ver</button>
										<button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#editDino" onclick="edit_pasaDynos('${EUesName}','${image_uri}','${file_name}','museum_phrase','${part_of}','${price}')">Editar</button>
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



// Ej.3 Vamos a buscar un dyno pero 
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

		// Voy a serle sincero...no logré buscar directamente en el nombre en español, esto lo hizo chatgpt
		const buscarInput = document.querySelector('#dynoSearch');
		buscarInput.addEventListener('input', () => {
			const valor = buscarInput.value.trim().toLowerCase();
			const resultados = dynoArray.filter(dyno => {
				const nombre = Object.values(dyno.results.name.name_EUes).join('').toLowerCase();
				return nombre.includes(valor);
			});
		// Hasta aquí mi copia
			console.log(`Los resultados son: ${resultados.length}`)
			let resultadosMostrar = '';
			
			if(resultados.length == '0' || resultados.length == 0 || resultados.length == '') {
				console.log(`vacio!`)
				resultadosMostrar += `<li class="d-flex justify-content-center align-items-center flex-column">
										<p class="mt-3"><strong>No encontré un buen fósil para mostrarte. Intenta con otro.</strong></p>
										<img src="img/dinomayami.jpeg" alt="Sin resultados" loading="lazy" height="400" width="auto">
									</li>`
					
			}
			
			for(let j = 0 ; j < resultados.length; j++) {
					// console.log(resultados.length)
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
								<img src="${image_uri}" alt="${file_name}" loading="lazy">
							</div>
							<div class="card-body h-100">
								<div class="d-flex  flex-column h-100">
									<div class="mb-auto">
										<p class="card-title line-clamp color-black text-uppercase">${EUesName}</p>
									</div>
									<div class="mt-auto">
										<p class="card-text line-clamp">${museum_phrase}</p>
										<div class="d-flex justify-content-between align-items-center">
											<div class="btn-group">
												<button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal" id="pasaDynos"  data-toggle="modal" data-target="#detailDino" onclick="pasaDynos('${EUesName}','${image_uri}','${file_name}','museum_phrase','${part_of}','${price}')">Ver</button>
												<button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#editDino" onclick="edit_pasaDynos('${EUesName}','${image_uri}','${file_name}','museum_phrase','${part_of}','${price}')">Editar</button>
											</div>
											<small class="text-muted line-clamp">Parte de ${part_of}</small>
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






// Abro el modal con un onclick .No supe hacerlo con un addEventListener, me botaba que el eventlistener no era una función....lo dejo asi
const pasaDynos = (pasaNombre,pasaFoto,pasaNombreCientifico,pasaDescripcion,pasaParteDe,pasaPrecio) => {
	let mod_pasaNombre = pasaNombre.replace("_", " ");
	let mod_pasaFoto = pasaFoto;
	let mod_pasaNombreCientifico = pasaNombreCientifico.replace("_", " ");
	// let mod_pasaDescripcion = pasaDescripcion;
	let mod_pasaDescripcion = `En el texto original encontré un escape que rompe todo mi texto. Debo controlarlo. Don't you see the danger, John, inherent in what you're doing here? Because we're being hunted. Well, at least you're out of the tree. Clever girl. Because we're being hunted.`;
	let mod_pasaParteDe = pasaParteDe.replace("_", " ");
	let mod_pasaPrecio = pasaPrecio;

	// Paso los datos al modal Mostrar
	document.getElementById('detail-dinoLabel').textContent = mod_pasaNombre;
	document.getElementById('detailImageImg').src = mod_pasaFoto;
	document.getElementById('detailImageImg').alt = mod_pasaNombreCientifico;
	document.getElementById('detailCsiName').textContent = mod_pasaNombreCientifico;
	document.getElementById('detailDescription').textContent = mod_pasaDescripcion;
	document.getElementById('detailPartOf').textContent = mod_pasaParteDe;
	document.getElementById('detailPrice').textContent = mod_pasaPrecio;
}

// Abro el modal con un onclick .No supe hacerlo con un addEventListener, me botaba que el eventlistener no era una función....lo dejo asi
const edit_pasaDynos = (e_pasaNombre,e_pasaFoto,e_pasaNombreCientifico,e_pasaDescripcion,e_pasaParteDe,e_pasaPrecio) => {
	let edit_pasaNombre = e_pasaNombre.replace("_", " ");
	let edit_pasaFoto = e_pasaFoto;
	let edit_pasaNombreCientifico = e_pasaNombreCientifico.replace("_", " ");
	// let edit_pasaDescripcion = e_pasaDescripcion;
	let edit_pasaDescripcion = `En el texto original encontré un escape que rompe todo mi texto. Debo controlarlo. Don't you see the danger, John, inherent in what you're doing here? Because we're being hunted. Well, at least you're out of the tree. Clever girl. Because we're being hunted.`;
	let edit_pasaParteDe = e_pasaParteDe.replace("_", " ");
	let edit_pasaPrecio = e_pasaPrecio;
	
	// Paso los datos al modal Descripción
	document.getElementById('edit_EUesName').value = edit_pasaNombre;
	document.getElementById('edit_image_uri').src = edit_pasaFoto;
	document.getElementById('edit_image_uri').alt = edit_pasaNombre;
	document.getElementById('edit_file_name').value = edit_pasaNombreCientifico;
	document.getElementById('edit_museum_phrase').value = edit_pasaDescripcion;
	document.getElementById('edit_part_of').value = edit_pasaParteDe;
	document.getElementById('edit_price').value = edit_pasaPrecio;
}







// 0. Mi magia para validar
const validateInput = (id, alert, differentThan='') => {
	let valid_id = document.querySelector(`.in-validation #${id}`);
	let valor_id = valid_id.value;

	let valid_alert = document.querySelector(`.in-validation #${alert}`);

	if (valor_id != differentThan) {
		valid_id.style.cssText = "border: 1px solid #ced4da!important";
		valid_alert.style.display = "none";
	} else {
		valid_id.style.cssText = "border: solid 1px #dc3545!important;";
		valid_alert.style.display = "block";
	}
};

// 1. Creo una constante para el formulario
const sendForm_formDyno = document.getElementById("formDyno");

// 2. Creo las funciones individuales
const valido_EUesName = () => {
	validateInput('edit_EUesName', 'alert_EUesName')
}
const valido_file_name = () => {
	validateInput('edit_file_name', 'alert_file_name')
}
const valido_museum_phrase = () => {
	validateInput('edit_museum_phrase', 'alert_museum_phrase')
}
const valido_part_of = () => {
	validateInput('edit_part_of', 'alert_part_of')
}
const valido_price = () => {
	validateInput('edit_price', 'alert_price')
}


// 3. Verifico mientras escriben en cada campo
document.getElementById("edit_EUesName").addEventListener("keyup", function(e) {
	if( sendForm_formDyno.classList.contains("in-validation") ) {
		valido_EUesName();
	}
})
document.getElementById("edit_file_name").addEventListener("keyup", function(e) {
	if( sendForm_formDyno.classList.contains("in-validation") ) {
		valido_file_name();
	}
})
document.getElementById("edit_museum_phrase").addEventListener("keyup", function(e) {
	if( sendForm_formDyno.classList.contains("in-validation") ) {
		valido_museum_phrase();
	}
})
document.getElementById("edit_part_of").addEventListener("keyup", function(e) {
	if( sendForm_formDyno.classList.contains("in-validation") ) {
		valido_part_of();
	}
})
document.getElementById("edit_price").addEventListener("keyup", function(e) {
	if( sendForm_formDyno.classList.contains("in-validation") ) {
		valido_price();
	}
})




// 4. Inicia mi envío
sendForm_formDyno.addEventListener("submit", function(e) {
	e.preventDefault();
	
	// Recopilo el form
	let EUesName_val =  document.getElementById('edit_EUesName').value;
	let file_name_val =  document.getElementById('edit_file_name').value;
	let museum_phrase_val =  document.getElementById('edit_museum_phrase').value;
	let part_of_val =  document.getElementById('edit_part_of').value;
	let price_val =  document.getElementById('edit_price').value;

	// console.log(EUesName_val);
	// console.log(file_name_val);
	// console.log(museum_phrase_val);
	// console.log(part_of_val);
	// console.log(price_val);

	// Valido que no estén vacíos
	if( EUesName_val == '' || file_name_val == '' || museum_phrase_val == '' || part_of_val == '' || price_val == '' ) {
		// Si hay alguno vacío entonces:
		// 1. Le pongo al form una clase para que me muestre las alertas 
		sendForm_formDyno.classList.add("in-validation");
		// 2. entra por aquí y verifica individualmente
		if (EUesName_val == '') {
			valido_EUesName();
		}
		if (file_name_val == '') {
			valido_file_name();
		}
		if (museum_phrase_val == '') {
			valido_museum_phrase();
		}
		if (part_of_val == '') {
			valido_part_of();
		}
		if (price_val == '') {
			valido_price();
		}
		// Si hay alguno vacío paro todo
		// console.log(`Si hay alguno vacío, paro todo`)
		return;
	}else{
		console.log(`NOS JUIMOS`)
		let sendChanges = document.getElementById('sendChanges')
		let cancelChanges = document.getElementById('cancelChanges')
		sendChanges.disabled = true;
		cancelChanges.disabled = true;

		// Limpio las alertas
		sendForm_formDyno.classList.remove("in-validation");
		let cleanInput = document.querySelector(`input`);
		let cleanTextarea = document.querySelector(`textarea`);
		let hideInvalidFeedback = document.querySelector(`.invalid-feedback`);
		cleanInput.style.cssText = "border: 1px solid #ced4da!important";
		cleanTextarea.style.cssText = "border: 1px solid #ced4da!important";
		hideInvalidFeedback.style.display = "none";
		
		// Todo está en orden y enviamos. Por aquí debería estar el envío a la db o el fetch
		let formDyno = document.getElementById(`fieldsetformDyno`);
		let responseFormDyno = document.getElementById(`responseFormDyno`);

		formDyno.style.display = "none";
		responseFormDyno.classList.toggle('d-none');

		setTimeout(function() {
			location.reload();
		}, 10000);
		  
	}
})