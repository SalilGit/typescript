class Price {
  name: string = "";
  age: number;

  setData() {

    this.name="Salil Arora"

  }

  displayData(){
    
    console.log("display",this.name);

  }

}

let totalPrice = new Price();
let result = totalPrice.setData();
totalPrice.displayData();


