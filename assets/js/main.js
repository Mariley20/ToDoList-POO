function Tarea(id, titulo){
	this.id = id,
	this.title = titulo
	this.toHTML = function(){
		var html = this.titulo;
		return html;
	},
	this.tachado = false
};
function ToDoList(){
	this.list = [{
		"id": 1,
		"title": "delectus aut autem"
	},
	{
		"id": 2,
		"title": "quis ut nam facilis et officia qui"
	},
	{
		"id": 3,
		"title": "fugiat veniam minus"
	},
	{
		"id": 4,
		"title": "et porro tempora"
	},
	{
		"id": 5,
		"title": "laboriosam mollitia et enim quasi adipisci quia provident illum"
	},
	{
		"id": 6,
		"title": "qui ullam ratione quibusdam voluptatem quia omnis"
	},
	{
		"id": 7,
		"title": "illo expedita consequatur quia in"
	},
	{
		"id": 8,
		"title": "quo adipisci enim quam ut ab"
	},
	{
		"id": 9,
		"title": "molestiae perspiciatis ipsa"
	},
	{
		"id": 10,
		"title": "illo est ratione doloremque quia maiores aut"
	}];

	this.tachadoAhora = 0;
	this.id = this.list.length + 1;
	this.tareaNueva = document.getElementById('tareaNueva');
	this.agregarTarea = function(){

		if(this.tareaNueva.value != ""){
			this.list.push(new Tarea(this.id, this.tareaNueva.value));
			console.log(this.list)
			this.id++;
		}else{
			alert("ingrese tarea")
		}
	}
	this.mostrarLista = function(element){
		var stringHtml = "";
		element.innerHTML = stringHtml;
		for(var i in this.list ){
			var tarea = this.list[i];
			stringHtml += "<li id='"+tarea.id+"'>"+tarea.title+"</li>";
		}
		 element.innerHTML = stringHtml;
	}
	this.limpiar = function(){
		this.tareaNueva.value = "";
		this.tareaNueva.focus();
	}
	this.tacharTarea = function(event){
		this.idTachar = event.target.id;
		//console.log(this.idTachar);
		
		console.log(this.list);

		document.getElementById(this.idTachar).style.textDecoration = (document.getElementById(this.idTachar).style.textDecoration  === "line-through" ) ? ""  : "line-through"  ;
	}
}

var elementList = document.getElementById('lista');
var toDoList = new ToDoList();
toDoList.mostrarLista(elementList);

//bton añadir tarea
var addTarea = document.getElementById('agregarTarea');
addTarea.onclick = function(){
	toDoList.agregarTarea();
	toDoList.limpiar();
	toDoList.mostrarLista(elementList);

// evento
	var tagsLi = document.getElementsByTagName('li');
	for(var i = 0; i < tagsLi.length; i++){
		tagsLi[i].addEventListener('click', toDoList.tacharTarea, false);
	}
}