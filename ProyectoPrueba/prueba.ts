import { Empleado } from "./empleado"

class Person {
    constructor(private name:string){}
}

let listaPersona:Array<Person> = new Array()
let listaEmpleado:Array<Empleado> = new Array()

let p1:Person = new Person("Antonio")
let e1:Empleado = new Empleado("Antonio", 1000)

listaPersona.push(p1)
listaEmpleado.push(e1)

for(let p of listaPersona) {
    console.log(p)
}

listaEmpleado.forEach(emp => {
    console.log(emp)
}) 