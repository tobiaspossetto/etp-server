"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
class RandomController {
    randoms(req, res) {
        const cant = req.query.cant || 10000;
        const passCant = ['' + cant + ''];
        const randoms = child_process_1.fork('randoms.js', passCant);
        randoms.on('message', (response) => {
            res.send(JSON.stringify(response));
        });
    }
}
exports.default = new RandomController();
