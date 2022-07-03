"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fakeProducts = void 0;
const faker_1 = require("@faker-js/faker");
exports.fakeProducts = () => {
    try {
        const data = [];
        for (let i = 0; i < 5; i++) {
            data.push({
                id: faker_1.faker.datatype.uuid(),
                name: faker_1.faker.commerce.productName(),
                price: faker_1.faker.commerce.price(),
                image: faker_1.faker.image.image()
            });
        }
        return data;
    }
    catch (error) {
        console.log(error);
    }
};
