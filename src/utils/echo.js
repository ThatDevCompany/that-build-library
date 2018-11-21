"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Echo a message to the console
 */
function echo(message) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('----------------');
        console.log(message);
        console.log('----------------');
        return Promise.resolve();
    });
}
exports.echo = echo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNoby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVjaG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0gsY0FBMkIsT0FBZTs7UUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1FBQy9CLE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ3pCLENBQUM7Q0FBQTtBQUxELG9CQUtDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBFY2hvIGEgbWVzc2FnZSB0byB0aGUgY29uc29sZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZWNobyhtZXNzYWdlOiBzdHJpbmcpIHtcblx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0nKVxuXHRjb25zb2xlLmxvZyhtZXNzYWdlKVxuXHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLScpXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxufVxuIl19