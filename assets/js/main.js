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
	this.mostrarLista = function(){
		var tarea = this.list[ ( this.id ) - 1 ];
		var tagLi = document.createElement('li');  //crea etiqueta <LI></LI>
		var textnodo = document.createTextNode(tarea.toHTML());  //tarea.toHTML() insertar texto en la etiqueta <li>
		tagLi.appendChild(textnodo);

		document.getElementById('lista').appendChild(tagLi);
	}
	this.limpiar = function(){
		this.tareaNueva.value = "";
		this.tareaNueva.focus();
	}
}