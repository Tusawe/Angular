var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var lista = new Array();
var p1 = new Person("Antonio");
lista.push(p1);
for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
    var p = lista_1[_i];
    console.log(p);
}
