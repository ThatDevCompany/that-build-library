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
const exec_1 = require("./exec");
/**
 * Execute a CMD line process
 */
function test(minCoverage = '80', include = 'src', excludes = []) {
    return __awaiter(this, void 0, void 0, function* () {
        // prettier-ignore
        return exec_1.exec('nyc', [
            '--reporter', 'html',
            '--reporter', 'text',
            '--reporter', 'lcov',
            '--all', 'true',
            '--check-coverage',
            '--lines', minCoverage,
            '--per-file',
            '--report-dir', './coverage',
            '--temp-directory', './coverage/tmp',
            '--exclude', ...excludes
                .concat([include + '/*.spec.*', include + '/**/*.spec.*'])
                .join(' --exclude ').split(' '),
            '--include', include + '/*',
            '--include', include + '/**/*',
            'node_modules/.bin/jasmine',
            include + '/*.spec.js',
            include + '/**/*.spec.js',
            include + '/**/**/*.spec.js'
        ]);
    });
}
exports.test = test;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLGlDQUE4QjtBQUU5Qjs7R0FFRztBQUNILGNBQTJCLGNBQXNCLElBQUksRUFBRSxVQUFrQixLQUFLLEVBQUUsV0FBMEIsRUFBRTs7UUFDM0csa0JBQWtCO1FBQ2xCLE9BQU8sV0FBSSxDQUFDLEtBQUssRUFBRTtZQUNsQixZQUFZLEVBQUUsTUFBTTtZQUNwQixZQUFZLEVBQUUsTUFBTTtZQUNwQixZQUFZLEVBQUUsTUFBTTtZQUNwQixPQUFPLEVBQUUsTUFBTTtZQUNmLGtCQUFrQjtZQUNsQixTQUFTLEVBQUUsV0FBVztZQUN0QixZQUFZO1lBQ1osY0FBYyxFQUFFLFlBQVk7WUFDNUIsa0JBQWtCLEVBQUUsZ0JBQWdCO1lBQ3BDLFdBQVcsRUFBRSxHQUFHLFFBQVE7aUJBQ3RCLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxXQUFXLEVBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQyxDQUFDO2lCQUN4RCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUNoQyxXQUFXLEVBQUUsT0FBTyxHQUFHLElBQUk7WUFDM0IsV0FBVyxFQUFFLE9BQU8sR0FBRyxPQUFPO1lBQzlCLDJCQUEyQjtZQUMzQixPQUFPLEdBQUcsWUFBWTtZQUN0QixPQUFPLEdBQUcsZUFBZTtZQUN6QixPQUFPLEdBQUcsa0JBQWtCO1NBQzVCLENBQUMsQ0FBQTtJQUNILENBQUM7Q0FBQTtBQXRCRCxvQkFzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzcGF3biB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnXG5pbXBvcnQgeyBleGVjIH0gZnJvbSBcIi4vZXhlY1wiO1xuXG4vKipcbiAqIEV4ZWN1dGUgYSBDTUQgbGluZSBwcm9jZXNzXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0ZXN0KG1pbkNvdmVyYWdlOiBzdHJpbmcgPSAnODAnLCBpbmNsdWRlOiBzdHJpbmcgPSAnc3JjJywgZXhjbHVkZXM6IEFycmF5PHN0cmluZz4gPSBbXSkge1xuXHQvLyBwcmV0dGllci1pZ25vcmVcblx0cmV0dXJuIGV4ZWMoJ255YycsIFtcblx0XHQnLS1yZXBvcnRlcicsICdodG1sJyxcblx0XHQnLS1yZXBvcnRlcicsICd0ZXh0Jyxcblx0XHQnLS1yZXBvcnRlcicsICdsY292Jyxcblx0XHQnLS1hbGwnLCAndHJ1ZScsXG5cdFx0Jy0tY2hlY2stY292ZXJhZ2UnLFxuXHRcdCctLWxpbmVzJywgbWluQ292ZXJhZ2UsXG5cdFx0Jy0tcGVyLWZpbGUnLFxuXHRcdCctLXJlcG9ydC1kaXInLCAnLi9jb3ZlcmFnZScsXG5cdFx0Jy0tdGVtcC1kaXJlY3RvcnknLCAnLi9jb3ZlcmFnZS90bXAnLFxuXHRcdCctLWV4Y2x1ZGUnLCAuLi5leGNsdWRlc1xuXHRcdFx0LmNvbmNhdChbaW5jbHVkZSArICcvKi5zcGVjLionLGluY2x1ZGUgKyAnLyoqLyouc3BlYy4qJ10pXG5cdFx0XHQuam9pbignIC0tZXhjbHVkZSAnKS5zcGxpdCgnICcpLFxuXHRcdCctLWluY2x1ZGUnLCBpbmNsdWRlICsgJy8qJyxcblx0XHQnLS1pbmNsdWRlJywgaW5jbHVkZSArICcvKiovKicsXG5cdFx0J25vZGVfbW9kdWxlcy8uYmluL2phc21pbmUnLFxuXHRcdGluY2x1ZGUgKyAnLyouc3BlYy5qcycsXG5cdFx0aW5jbHVkZSArICcvKiovKi5zcGVjLmpzJyxcblx0XHRpbmNsdWRlICsgJy8qKi8qKi8qLnNwZWMuanMnXG5cdF0pXG59XG4iXX0=