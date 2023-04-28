class Users {
  getData(a): string {
    return a;
  }

  setData(b): string {
    return b;
  }
}

let User1 = new Users();
let resultData = User1.getData("Salil");
let resultData2 = User1.setData("Arora");
console.log(resultData);
console.log(resultData2);
