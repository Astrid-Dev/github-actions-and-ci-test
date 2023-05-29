"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var calculator_1 = __importDefault(require("../calculator"));
describe('Calculator Tests', function () {
    test('Addition of 2 numbers', function () {
        // arrange and act
        var result = calculator_1.default.sum(1, 2);
        // assert
        expect(result).toBe(3);
    });
    test('Subtraction of 2 numbers', function () {
        // arrange and act
        var result = calculator_1.default.diff(10, 2);
        // assert
        expect(result).toBe(8);
    });
    test('Multiplication of 2 numbers', function () {
        // arrange and act
        var result = calculator_1.default.product(2, 8);
        // assert
        expect(result).toBe(16);
    });
    test('Division of 2 numbers', function () {
        // arrange and act
        var result = calculator_1.default.divide(24, 8);
        // assert
        expect(result).toBe(3);
    });
});
//# sourceMappingURL=calculator.spec.js.map