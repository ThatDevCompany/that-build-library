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
function exec(cmd, args = [], silent = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = [];
        return new Promise((resolve, reject) => {
            const exe = child_process_1.spawn(cmd, args, {
                env: process.env
            });
            exe.stdout.on('data', data => {
                response.push(data.toString());
                if (!silent) {
                    console.log(data.toString());
                }
            });
            exe.stderr.on('data', data => {
                if (!silent) {
                    console.error(data.toString());
                }
            });
            exe.on('exit', code => {
                if (code === 0) {
                    return resolve(response);
                }
                else {
                    if (!silent) {
                        console.error('Problem executing ' + cmd);
                    }
                    return reject();
                }
            });
        });
    });
}
exports.exec = exec;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV4ZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGlEQUFxQztBQUVyQzs7R0FFRztBQUNILGNBQ0MsR0FBVyxFQUNYLE9BQXNCLEVBQUUsRUFDeEIsTUFBTSxHQUFHLEtBQUs7O1FBRWQsTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFBO1FBQ25CLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDdEMsTUFBTSxHQUFHLEdBQUcscUJBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFO2dCQUM1QixHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUc7YUFDaEIsQ0FBQyxDQUFBO1lBQ0YsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUM1QixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO2dCQUM5QixJQUFJLENBQUMsTUFBTSxFQUFFO29CQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7aUJBQzVCO1lBQ0YsQ0FBQyxDQUFDLENBQUE7WUFDRixHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtpQkFDOUI7WUFDRixDQUFDLENBQUMsQ0FBQTtZQUNGLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUNyQixJQUFJLElBQUksS0FBSyxDQUFDLEVBQUU7b0JBQ2YsT0FBTyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUE7aUJBQ3hCO3FCQUFNO29CQUNOLElBQUksQ0FBQyxNQUFNLEVBQUU7d0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsR0FBRyxHQUFHLENBQUMsQ0FBQTtxQkFDekM7b0JBQ0QsT0FBTyxNQUFNLEVBQUUsQ0FBQTtpQkFDZjtZQUNGLENBQUMsQ0FBQyxDQUFBO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDO0NBQUE7QUFoQ0Qsb0JBZ0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3Bhd24gfSBmcm9tICdjaGlsZF9wcm9jZXNzJ1xuXG4vKipcbiAqIEV4ZWN1dGUgYSBDTUQgbGluZSBwcm9jZXNzXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBleGVjKFxuXHRjbWQ6IHN0cmluZyxcblx0YXJnczogQXJyYXk8c3RyaW5nPiA9IFtdLFxuXHRzaWxlbnQgPSBmYWxzZVxuKSB7XG5cdGNvbnN0IHJlc3BvbnNlID0gW11cblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRjb25zdCBleGUgPSBzcGF3bihjbWQsIGFyZ3MsIHtcblx0XHRcdGVudjogcHJvY2Vzcy5lbnZcblx0XHR9KVxuXHRcdGV4ZS5zdGRvdXQub24oJ2RhdGEnLCBkYXRhID0+IHtcblx0XHRcdHJlc3BvbnNlLnB1c2goZGF0YS50b1N0cmluZygpKVxuXHRcdFx0aWYgKCFzaWxlbnQpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coZGF0YS50b1N0cmluZygpKVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0ZXhlLnN0ZGVyci5vbignZGF0YScsIGRhdGEgPT4ge1xuXHRcdFx0aWYgKCFzaWxlbnQpIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihkYXRhLnRvU3RyaW5nKCkpXG5cdFx0XHR9XG5cdFx0fSlcblx0XHRleGUub24oJ2V4aXQnLCBjb2RlID0+IHtcblx0XHRcdGlmIChjb2RlID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiByZXNvbHZlKHJlc3BvbnNlKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKCFzaWxlbnQpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCdQcm9ibGVtIGV4ZWN1dGluZyAnICsgY21kKVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZWplY3QoKVxuXHRcdFx0fVxuXHRcdH0pXG5cdH0pXG59XG4iXX0=