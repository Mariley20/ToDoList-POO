function Tarea(id, titulo){
	this.id = id,
	this.titulo = titulo
	this.toHTML = function(){
		var html = "";
			html += this.titulo;
		return html;
	}
};
function ToDoList(){
	this. list = [];
	this.id = 0;
	this.tareaNueva = document.getElementById('tareaNueva');
	this.agregarTarea = function(){
		//alert(this.tareaNueva.value)
		if(this.tareaNueva.value != ""){
			this.list.push(new Tarea(this.id, this.tareaNueva.value));
			console.log(this.list)
			this.id++;
			toDoList.mostrarLista();
		}else{
			alert("ingrese tarea")
		}
	}
}