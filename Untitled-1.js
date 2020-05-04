let peoples = [
    {name: "Yura", age: 55, hobby: ["films", "games", "hiking"], type: "Admin"}, 
    {name: "Stas", age:20, hobby:["films", "games", "money"], type: "user"}, 
    {name: "Sasha", age:25, hobby:["games", "basketball", "football"], type: "Admin"},
    {name: "Dima", age: 50, hobby:["TV", "job", "games"], type: "user"}
]
function sayAdmin() {
    let admin = [];
    for (let i = 0; i < peoples.length; i++){
    peoples[i].type == "Admin" ? admin.push(peoples[i].name): undefined;
}
alert(`admin: ${admin}`);
}
function avarageAge() {
    let average = 0;
    let count = 0;
    count = peoples.length
    for (let i = 0; i < peoples.length; i++) {
        average += peoples[i].age;
    }
    alert(average / count);
}
let hobbys = [];
function uniqueHobbi() {
    for (let i = 0; i < peoples.length; i++){
        hobbys.push(peoples[i].hobby)
    }
    let count = 0;
    let uniqueHobbi = [];
    for (let i = 0; i < hobbys.length; i++) {
         count = 0;
    for (let j = 0; j < hobbys.length; j++) {
        if (hobbys[i] == hobbys[j]  &&  i != j) {
            count = 1
        }
    
        if (count == 0) { uniqueHobbi.push(hobbys[i]) };
    }
}

    
    alert(uniqueHobbi);
}
sayAdmin();
avarageAge();
uniqueHobbi();

//TASK#1
/*
let   animal = {
    name : "Horse",
    speed : "25",
    age : "4 years",
    weight : "150"
}

function speedLimit () {
    let speed = animal.speed;
    let  time = 1000 / speed;
    let  day =  time / 12;
        alert(`${animal.name} needs ${Math.ceil(day)} days`);
}
speedLimit()
function animalinfo() {
        for (let info in animal) {
            alert(`${info} : ${animal[info]}`);
        }
    }
    animalinfo.call(animal);
*/
/*
let object = {
    a: 30,
    b: 10,
    sqrt () {
        alert(`Sqrt = ${this.a * this.b}`);
    },
    perimeter() {
        alert(`Perimeter = ${this.a * 2 + this.b * 2}`)
    },
    name() {
        result = confirm('Хочше дати назву фігурі?');
        if(result == true) {
            let nazva = prompt('Введіть назву фігури');
            alert(`name figure: ${nazva}`);
        } else
        alert('Жаль')
    },
    perevod() {
        alert(`
        a:${this.a / 100}m
        b:${this.b / 100}m
        `)
    }
}
object.sqrt();
object.perimeter();
object.name();
object.perevod();
*/
/*
let shop = {
    tomato: {
        count: 5,
        price: 50,
        buy: false,
        outOfstore: true
    },
    banana: {
        count: 10,
        price: 25,
        buy: true,
        outOfstore: true
    },
    cakes: {
        count: 1,
        price: 105,
        buy: true,
        outOfstore:false
    },
    orange: {
        count: 10,
        price: 20,
        buy: false,
        outOfstore: true
    },
    apple: {
        count: 5,
        price: 10,
        buy: true,
        outOfstore: true
    }
}
function total () {
    let inStore = []
    let outOfstore = []
    for(props in shop){
        if  (shop[props].outOfstore === true) {
            inStore.push(props);
        }
        else {
            outOfstore.push(props);
        }
        }
        alert(`in Store:${inStore} out of store: ${outOfstore}`);
    }
total();
function bought() {
    let weBought = []
    for(goods in shop){
        if(shop[goods].buy === true){
            weBought.push(goods);
    }
}
    alert(`we bought: ${weBought}`)
}
bought();
*/


