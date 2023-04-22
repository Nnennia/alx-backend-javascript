/* eslint-disable*/
export default class HolbertonCourse {
    constructor(name, length, students) {
        if (typeof name === "string") {
            this._name = name;
        } else {
            throw new TypeError("Name mut be a string");
        }

    }

}