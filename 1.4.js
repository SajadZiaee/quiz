//4

// Object:
const originalObject = {
    name: 'Sajad',
    lastName: 'Ziaee'
};

const proxyHandler = {
    get(target, property) {
        return "404";
    }
};

// Proxy:
const proxyObject = new Proxy(originalObject, proxyHandler);

console.log(proxyObject.name);
console.log(proxyObject.lastName);
