console.log('hello');

function summ(a = 0, b = 0) {
    return a + b;
}

function add(name) {
    return name;
}

function sayHi() {
    return new Promise(res => {
        setTimeout(() => res('hi'), 1000)
    })
}