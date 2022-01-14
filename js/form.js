let peoples = localStorage.getItem("peoples") ? JSON.parse(localStorage.getItem("peoples")) : [];
const letterPattern = /[^0-9]/;

function testForm(e){
	e.preventDefault();

	let nome = e.target.elements["nome"].value;
	let telefone = e.target.elements["telefone"].value;
	let experiencia = e.target.elements["xp"].value == 'true';

	var patternReplace = new RegExp(letterPattern,"g");
	if(telefone.replace(patternReplace, "").length != 11){
		alert("Número inválido");
		console.log(telefone.replace(patternReplace, "").length)
		return;
	}

	if(personID !== null){
		peoples[personID] = {
			name: nome,
			tel: telefone,
			xp: experiencia
		}
	}else{
		peoples.push({
			name: nome,
			tel: telefone,
			xp: experiencia
		});
	}

	localStorage.setItem("peoples", JSON.stringify(peoples));

	document.getElementById("home").click();
}


function testPhone(e){
	if (letterPattern.test(e.key) || e.target.value.length >= 15){
		e.preventDefault();
		return;
	}

	if(e.target.value.length == 0){
		e.target.value += '('
	}

	if(e.target.value.length == 3){
		e.target.value += ') '
	}

	if(e.target.value.length == 10){
		e.target.value += '-'
	}
}

var mainURL = new URL(window.location.href);

var personID = mainURL.searchParams.get('person');

if(personID !== null && peoples.length !== 0){
	let nome = document.getElementById("nome")
	let telefone = document.getElementById("telefone")
	


	nome.value = peoples[personID].name
	telefone.value = peoples[personID].tel
	if(peoples[personID].xp){
		document.getElementById("experiencia-sim").checked = true;
	}else{
		document.getElementById("experiencia-nao").checked = true;
	}
}