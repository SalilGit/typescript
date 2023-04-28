class youTubes{

firstName:string;
lastName:string;

    getFirstName(){
        console.log("My first Name is ",this.firstName);
    }
    
    getLastName(){
        
        console.log("My lastName is",this.lastName);
    }

    getThirdName(name){

        console.log("Third Name is",name);
    }
}


const  result1 = new youTubes();

result1.firstName="Thapa Technical";

result1.lastName="And New Data will be written"

result1.getFirstName();
result1.getLastName();
result1.getThirdName("SalilArora");



