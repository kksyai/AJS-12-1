"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Cart = /** @class */ (function () {
    function Cart() {
        this.items = [];
    }
    Cart.prototype.add = function (item) {
        this.items.push(item);
    };
    Cart.prototype.getAll = function () {
        return __spreadArray([], this.items, true);
    };
    Cart.prototype.totalCost = function () {
        return this.items.reduce(function (sum, item) { return sum + item.price; }, 0);
    };
    Cart.prototype.discoundValue = function (discount) {
        return this.totalCost() * (1 - discount * 0.01);
    };
    Cart.prototype.delateItem = function (id) {
        this.items.splice(id, 1);
    };
    return Cart;
}());
exports.default = Cart;
var cart = new Cart();
console.log(cart);
//# sourceMappingURL=Chart.js.map