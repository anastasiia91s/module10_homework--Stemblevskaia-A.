let map = new Map();
map.set("2", "string");
map.set(3, "number");
map.set(false, "boolean");

for (let name of map.keys()) {
    console.log(`Ключ - ${name}, значение - ${map.get(name)}`);
}




