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
const fs = require("fs");
const del = require("del");
/**
 * Clean a folder (remove its contents)
 */
function clean(fld, leaveRoot = false) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!leaveRoot) {
            yield del([fld]);
        }
        else {
            const promises = [];
            fs.readdirSync(fld).forEach(child => {
                promises.push(del(fld + '/' + child));
            });
            return Promise.all(promises);
        }
    });
}
exports.clean = clean;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xlYW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbGVhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEseUJBQXdCO0FBQ3hCLDJCQUEwQjtBQUUxQjs7R0FFRztBQUNILGVBQTRCLEdBQVcsRUFBRSxZQUFxQixLQUFLOztRQUNsRSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2YsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1NBQ2hCO2FBQU07WUFDTixNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUE7WUFDbkIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ25DLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQTtZQUN0QyxDQUFDLENBQUMsQ0FBQTtZQUNGLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtTQUM1QjtJQUNGLENBQUM7Q0FBQTtBQVZELHNCQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnXG5pbXBvcnQgKiBhcyBkZWwgZnJvbSAnZGVsJ1xuXG4vKipcbiAqIENsZWFuIGEgZm9sZGVyIChyZW1vdmUgaXRzIGNvbnRlbnRzKVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2xlYW4oZmxkOiBzdHJpbmcsIGxlYXZlUm9vdDogYm9vbGVhbiA9IGZhbHNlKSB7XG5cdGlmICghbGVhdmVSb290KSB7XG5cdFx0YXdhaXQgZGVsKFtmbGRdKVxuXHR9IGVsc2Uge1xuXHRcdGNvbnN0IHByb21pc2VzID0gW11cblx0XHRmcy5yZWFkZGlyU3luYyhmbGQpLmZvckVhY2goY2hpbGQgPT4ge1xuXHRcdFx0cHJvbWlzZXMucHVzaChkZWwoZmxkICsgJy8nICsgY2hpbGQpKVxuXHRcdH0pXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKVxuXHR9XG59XG4iXX0=