
function sayHello1(name="Andrei"){
	log("Hello, " + name + "!");
}

sayHello2 = function(name) {
	name = name || "Andrei";
	log("Salute, " + name + "!"); };

sayHello3 = ()=>{ log("How do you do?!!"); };
