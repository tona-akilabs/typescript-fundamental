console.log(Object.values({a:1, b:2}))     // [1, 2]
console.log(Object.entries({a:1, b:2}))    // [["a",1], ["b",2]]

const obj = {
    get name() { return "Tona"; }
};
console.log(Object.getOwnPropertyDescriptors(obj));
console.log(obj.name);

const obj2 = {
    _name: "Tona", // private-like field

    get name() {
        return this._name;
    },

    set name(value: string) {
        this._name = value;
    }
}

obj2.name = "Admin";
console.log(obj2.name);