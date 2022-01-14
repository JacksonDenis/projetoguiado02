let peoples = localStorage.getItem("peoples") ? JSON.parse(localStorage.getItem("peoples")) : [];

// let peoples = [
// 	{
// 		name: "Luan Nascimento Santos",
// 		tel: "+55 (11) 99999-9999",
// 		xp: false
// 	},
// 	{
// 		name: "Arthur Gagliard",
// 		tel: "+55 (11) 99999-9999",
// 		xp: true
// 	},
// 	{
// 		name: "João Miranda",
// 		tel: "+55 (11) 99999-9999",
// 		xp: true
// 	},
// 	{
// 		name: "Guilherme Guirolhos",
// 		tel: "+55 (11) 99999-9999",
// 		xp: false
// 	},
// 	{
// 		name: "Felipe Teixeira",
// 		tel: "+55 (11) 99999-9999",
// 		xp: true
// 	},
// 	{
// 		name: "Pedro Melo Henrique",
// 		tel: "+55 (11) 99999-9999",
// 		xp: false
// 	},
// 	{
// 		name: "Marcos Fernandes Ramos",
// 		tel: "+55 (11) 99999-9999",
// 		xp: false
// 	}
// ]

var tableBody = document.querySelector("table.lista tbody");


function drawTable(){

	currentLines = document.querySelectorAll(".dinamic-content");
	currentLines.forEach((element) =>{
		element.remove();
	})

	for (let [index, person] of peoples.entries()){
		let pessoa = `<tr class="dinamic-content" style="background-color: #${(index % 2 == 0) ? 'fff': 'eee'}">
			<td>
				${person.name}
			</td>
			
			<td>
				${person.tel}
			</td>

			<td style="color: ${(person.xp ? 'green' : 'red')}">
				<strong>${(person.xp ? "Sim": "Não")}</strong>
			</td>

			<td>
				<button onclick="deleteUser(${index})">
					Excluir
				</button>
				<a href="form.html?person=${index}"><button>Editar</button></a>
			</td>

		</tr>`

		tableBody.innerHTML += pessoa;
	}
}

function deleteUser(index){
	peoples.splice(index, 1); 
	drawTable(); 
	localStorage.setItem("peoples", JSON.stringify(peoples));
}

drawTable();