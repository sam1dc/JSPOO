 // class
const basico = class {
  constructor() {
  	this.persona = 'hola';
  }

  static saludoExterno(){
  	console.log("Hola externo")
  }

  saludoInterno(value){
  	this.persona = value
  	console.log("Hola interno", this.persona)
  }

  get personaComputed(){
  	return this.persona
  }

  set personaComputed(value){
  	this.persona = value
  }

}

const instancia = new basico()






