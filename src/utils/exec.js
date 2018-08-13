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
const child_process_1 = require("child_process");
/**
 * Execute a CMD line process
 */
function exec(cmd, args = []) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = [];
        return new Promise((resolve, reject) => {
            const exe = child_process_1.spawn(cmd, args);
            exe.stdout.on('data', data => {
                response.push(data.toString());
                console.log(data.toString());
            });
            exe.stderr.on('data', data => {
                console.error(data.toString());
            });
            exe.on('exit', code => {
                if (code === 0) {
                    return resolve(response);
                }
                else {
                    console.error('Problem executing ' + cmd);
                    return reject();
                }
            });
        });
    });
}
exports.exec = exec;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV4ZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGlEQUFxQztBQUVyQzs7R0FFRztBQUNILGNBQTJCLEdBQVcsRUFBRSxPQUFzQixFQUFFOztRQUMvRCxNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUE7UUFDbkIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUN0QyxNQUFNLEdBQUcsR0FBRyxxQkFBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUM1QixHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQzVCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7Z0JBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7WUFDN0IsQ0FBQyxDQUFDLENBQUE7WUFDRixHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQzVCLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7WUFDL0IsQ0FBQyxDQUFDLENBQUE7WUFDRixHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRTtnQkFDckIsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFO29CQUNmLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBO2lCQUN4QjtxQkFBTTtvQkFDTixPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFvQixHQUFHLEdBQUcsQ0FBQyxDQUFBO29CQUN6QyxPQUFPLE1BQU0sRUFBRSxDQUFBO2lCQUNmO1lBQ0YsQ0FBQyxDQUFDLENBQUE7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNILENBQUM7Q0FBQTtBQXBCRCxvQkFvQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzcGF3biB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnXG5cbi8qKlxuICogRXhlY3V0ZSBhIENNRCBsaW5lIHByb2Nlc3NcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4ZWMoY21kOiBzdHJpbmcsIGFyZ3M6IEFycmF5PHN0cmluZz4gPSBbXSkge1xuXHRjb25zdCByZXNwb25zZSA9IFtdXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0Y29uc3QgZXhlID0gc3Bhd24oY21kLCBhcmdzKVxuXHRcdGV4ZS5zdGRvdXQub24oJ2RhdGEnLCBkYXRhID0+IHtcblx0XHRcdHJlc3BvbnNlLnB1c2goZGF0YS50b1N0cmluZygpKVxuXHRcdFx0Y29uc29sZS5sb2coZGF0YS50b1N0cmluZygpKVxuXHRcdH0pXG5cdFx0ZXhlLnN0ZGVyci5vbignZGF0YScsIGRhdGEgPT4ge1xuXHRcdFx0Y29uc29sZS5lcnJvcihkYXRhLnRvU3RyaW5nKCkpXG5cdFx0fSlcblx0XHRleGUub24oJ2V4aXQnLCBjb2RlID0+IHtcblx0XHRcdGlmIChjb2RlID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiByZXNvbHZlKHJlc3BvbnNlKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcignUHJvYmxlbSBleGVjdXRpbmcgJyArIGNtZClcblx0XHRcdFx0cmV0dXJuIHJlamVjdCgpXG5cdFx0XHR9XG5cdFx0fSlcblx0fSlcbn1cbiJdfQ==