function Tarea(id, titulo){
	this.id = id,
	this.titulo = titulo
	this.toHTML = function(){
		var html = "";
			html += this.titulo;
		return html;
	}
};