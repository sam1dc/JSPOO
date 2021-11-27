 // class
const terricola = class {
  constructor(type, name, age) {
    const typesArray = ['persona', 'humano', 'ser humano']
    this.name = name;
    this.age = age;
    this.type = type;

    typesArray.map((typeKey) => {
      if(typeKey === this.type){
        this.type = 'mamifero'
      }
    })
    
    
  }

  saludo(){
    console.log('Hola yo soy un ', this.name);
  }

  volar(){
    if(this.type === 'ave'){
      console.log('Volo');
    }
    if(this.type === 'mamifero'){
      console.log('Se mato');
    }
  }

  correr(){
    if(this.type === 'mamifero'){
      console.log('Corrio');
    }
    if(this.type === 'ave'){
      console.log('Se cayo');
    }
  }
}

const humanos = [
  new terricola('humano','Luis1', '23'),
  new terricola('humano','Luis2', '23'),
  new terricola('humano','Luis3', '23')
];

humanos[1].volar();

