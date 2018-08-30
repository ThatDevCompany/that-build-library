'use strict'
var __awaiter =
	(this && this.__awaiter) ||
	function(thisArg, _arguments, P, generator) {
		return new (P || (P = Promise))(function(resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value))
				} catch (e) {
					reject(e)
				}
			}
			function rejected(value) {
				try {
					step(generator['throw'](value))
				} catch (e) {
					reject(e)
				}
			}
			function step(result) {
				result.done
					? resolve(result.value)
					: new P(function(resolve) {
							resolve(result.value)
					  }).then(fulfilled, rejected)
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next())
		})
	}
Object.defineProperty(exports, '__esModule', { value: true })
const exec_1 = require('./exec')
/**
 * Test (Javascript)
 */
function testJS(
	minCoverage = '80',
	include = 'src',
	excludes = [],
	testRootFile = ''
) {
	return __awaiter(this, void 0, void 0, function*() {
		// prettier-ignore
		return exec_1.exec('nyc', [
            '--reporter', 'html',
            '--reporter', 'text',
            '--reporter', 'lcov',
            '--report-dir', './coverage',
            '--temp-directory', './coverage/tmp',
            testRootFile ? '--silent' : '--all',
            testRootFile ? '--skip-empty' : '--check-coverage',
            '--lines', minCoverage,
            '--per-file',
            '--extension', '.js',
            '--exclude', ...excludes
                .concat([include + '/*.spec.js', include + '/**/*.spec.js'])
                .concat([include + '/index.js', include + '/**/index.js'])
                .join(' --exclude ').split(' '),
            '--include', include + '/**',
            'node_modules/.bin/jasmine',
            testRootFile ? testRootFile : include + '/**/*.spec.js'
        ]);
	})
}
exports.testJS = testJS
/**
 * Test (Typescript)
 */
function testTS(
	minCoverage = '80',
	include = 'src',
	excludes = [],
	testRootFile = ''
) {
	return __awaiter(this, void 0, void 0, function*() {
		// prettier-ignore
		return exec_1.exec('nyc', [
            '--reporter', 'html',
            '--reporter', 'text',
            '--reporter', 'lcov',
            '--report-dir', './coverage',
            '--temp-directory', './coverage/tmp',
            testRootFile ? '--silent' : '--all',
            testRootFile ? '--skip-empty' : '--check-coverage',
            '--lines', minCoverage,
            '--per-file',
            '--require', 'tsconfig-paths/register',
            '--require', 'ts-node/register',
            '--extension', '.ts',
            '--exclude', ...excludes
                .concat([include + '/*.spec.ts', include + '/**/*.spec.ts'])
                .concat([include + '/index.ts', include + '/**/index.ts'])
                .join(' --exclude ').split(' '),
            '--include', include + '/**',
            'node_modules/.bin/jasmine',
            testRootFile ? testRootFile : include + '/**/*.spec.ts'
        ]);
	})
}
exports.testTS = testTS
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLGlDQUE2QjtBQUU3Qjs7R0FFRztBQUNILGdCQUNDLGNBQXNCLElBQUksRUFDMUIsVUFBa0IsS0FBSyxFQUN2QixXQUEwQixFQUFFLEVBQzVCLGVBQXVCLEVBQUU7O1FBRXpCLGtCQUFrQjtRQUNsQixPQUFPLFdBQUksQ0FBQyxLQUFLLEVBQUU7WUFDbEIsWUFBWSxFQUFFLE1BQU07WUFDcEIsWUFBWSxFQUFFLE1BQU07WUFDcEIsWUFBWSxFQUFFLE1BQU07WUFDcEIsY0FBYyxFQUFFLFlBQVk7WUFDNUIsa0JBQWtCLEVBQUUsZ0JBQWdCO1lBQ3BDLFlBQVksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPO1lBQ25DLFlBQVksQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxrQkFBa0I7WUFDbEQsU0FBUyxFQUFFLFdBQVc7WUFDdEIsWUFBWTtZQUNaLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLFdBQVcsRUFBRSxHQUFHLFFBQVE7aUJBQ3RCLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxZQUFZLEVBQUUsT0FBTyxHQUFHLGVBQWUsQ0FBQyxDQUFDO2lCQUMzRCxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsV0FBVyxFQUFFLE9BQU8sR0FBRyxjQUFjLENBQUMsQ0FBQztpQkFDekQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDaEMsV0FBVyxFQUFFLE9BQU8sR0FBRyxLQUFLO1lBQzVCLDJCQUEyQjtZQUMzQixZQUFZLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLGVBQWU7U0FDdkQsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztDQUFBO0FBMUJELHdCQTBCQztBQUVEOztHQUVHO0FBQ0gsZ0JBQ0MsY0FBc0IsSUFBSSxFQUMxQixVQUFrQixLQUFLLEVBQ3ZCLFdBQTBCLEVBQUUsRUFDNUIsZUFBdUIsRUFBRTs7UUFFekIsa0JBQWtCO1FBQ2xCLE9BQU8sV0FBSSxDQUFDLEtBQUssRUFBRTtZQUVsQixZQUFZLEVBQUUsTUFBTTtZQUNwQixZQUFZLEVBQUUsTUFBTTtZQUNwQixZQUFZLEVBQUUsTUFBTTtZQUNwQixjQUFjLEVBQUUsWUFBWTtZQUM1QixrQkFBa0IsRUFBRSxnQkFBZ0I7WUFDcEMsWUFBWSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU87WUFDbkMsWUFBWSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLGtCQUFrQjtZQUNsRCxTQUFTLEVBQUUsV0FBVztZQUN0QixZQUFZO1lBQ1osV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxXQUFXLEVBQUUsa0JBQWtCO1lBQy9CLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLFdBQVcsRUFBRSxHQUFHLFFBQVE7aUJBQ3RCLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxZQUFZLEVBQUUsT0FBTyxHQUFHLGVBQWUsQ0FBQyxDQUFDO2lCQUMzRCxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsV0FBVyxFQUFFLE9BQU8sR0FBRyxjQUFjLENBQUMsQ0FBQztpQkFDekQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDaEMsV0FBVyxFQUFFLE9BQU8sR0FBRyxLQUFLO1lBQzVCLDJCQUEyQjtZQUMzQixZQUFZLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLGVBQWU7U0FDdkQsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztDQUFBO0FBN0JELHdCQTZCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNwYXduIH0gZnJvbSAnY2hpbGRfcHJvY2VzcydcbmltcG9ydCB7IGV4ZWMgfSBmcm9tICcuL2V4ZWMnXG5cbi8qKlxuICogVGVzdCAoSmF2YXNjcmlwdClcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRlc3RKUyhcblx0bWluQ292ZXJhZ2U6IHN0cmluZyA9ICc4MCcsXG5cdGluY2x1ZGU6IHN0cmluZyA9ICdzcmMnLFxuXHRleGNsdWRlczogQXJyYXk8c3RyaW5nPiA9IFtdLFxuXHR0ZXN0Um9vdEZpbGU6IHN0cmluZyA9ICcnXG4pIHtcblx0Ly8gcHJldHRpZXItaWdub3JlXG5cdHJldHVybiBleGVjKCdueWMnLCBbXG5cdFx0Jy0tcmVwb3J0ZXInLCAnaHRtbCcsXG5cdFx0Jy0tcmVwb3J0ZXInLCAndGV4dCcsXG5cdFx0Jy0tcmVwb3J0ZXInLCAnbGNvdicsXG5cdFx0Jy0tcmVwb3J0LWRpcicsICcuL2NvdmVyYWdlJyxcblx0XHQnLS10ZW1wLWRpcmVjdG9yeScsICcuL2NvdmVyYWdlL3RtcCcsXG5cdFx0dGVzdFJvb3RGaWxlID8gJy0tc2lsZW50JyA6ICctLWFsbCcsXG5cdFx0dGVzdFJvb3RGaWxlID8gJy0tc2tpcC1lbXB0eScgOiAnLS1jaGVjay1jb3ZlcmFnZScsXG5cdFx0Jy0tbGluZXMnLCBtaW5Db3ZlcmFnZSxcblx0XHQnLS1wZXItZmlsZScsXG5cdFx0Jy0tZXh0ZW5zaW9uJywgJy5qcycsXG5cdFx0Jy0tZXhjbHVkZScsIC4uLmV4Y2x1ZGVzXG5cdFx0XHQuY29uY2F0KFtpbmNsdWRlICsgJy8qLnNwZWMuanMnLCBpbmNsdWRlICsgJy8qKi8qLnNwZWMuanMnXSlcblx0XHRcdC5jb25jYXQoW2luY2x1ZGUgKyAnL2luZGV4LmpzJywgaW5jbHVkZSArICcvKiovaW5kZXguanMnXSlcblx0XHRcdC5qb2luKCcgLS1leGNsdWRlICcpLnNwbGl0KCcgJyksXG5cdFx0Jy0taW5jbHVkZScsIGluY2x1ZGUgKyAnLyoqJyxcblx0XHQnbm9kZV9tb2R1bGVzLy5iaW4vamFzbWluZScsXG5cdFx0dGVzdFJvb3RGaWxlID8gdGVzdFJvb3RGaWxlIDogaW5jbHVkZSArICcvKiovKi5zcGVjLmpzJ1xuXHRdKVxufVxuXG4vKipcbiAqIFRlc3QgKFR5cGVzY3JpcHQpXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0ZXN0VFMoXG5cdG1pbkNvdmVyYWdlOiBzdHJpbmcgPSAnODAnLFxuXHRpbmNsdWRlOiBzdHJpbmcgPSAnc3JjJyxcblx0ZXhjbHVkZXM6IEFycmF5PHN0cmluZz4gPSBbXSxcblx0dGVzdFJvb3RGaWxlOiBzdHJpbmcgPSAnJ1xuKSB7XG5cdC8vIHByZXR0aWVyLWlnbm9yZVxuXHRyZXR1cm4gZXhlYygnbnljJywgW1xuXG5cdFx0Jy0tcmVwb3J0ZXInLCAnaHRtbCcsXG5cdFx0Jy0tcmVwb3J0ZXInLCAndGV4dCcsXG5cdFx0Jy0tcmVwb3J0ZXInLCAnbGNvdicsXG5cdFx0Jy0tcmVwb3J0LWRpcicsICcuL2NvdmVyYWdlJyxcblx0XHQnLS10ZW1wLWRpcmVjdG9yeScsICcuL2NvdmVyYWdlL3RtcCcsXG5cdFx0dGVzdFJvb3RGaWxlID8gJy0tc2lsZW50JyA6ICctLWFsbCcsXG5cdFx0dGVzdFJvb3RGaWxlID8gJy0tc2tpcC1lbXB0eScgOiAnLS1jaGVjay1jb3ZlcmFnZScsXG5cdFx0Jy0tbGluZXMnLCBtaW5Db3ZlcmFnZSxcblx0XHQnLS1wZXItZmlsZScsXG5cdFx0Jy0tcmVxdWlyZScsICd0c2NvbmZpZy1wYXRocy9yZWdpc3RlcicsXG5cdFx0Jy0tcmVxdWlyZScsICd0cy1ub2RlL3JlZ2lzdGVyJyxcblx0XHQnLS1leHRlbnNpb24nLCAnLnRzJyxcblx0XHQnLS1leGNsdWRlJywgLi4uZXhjbHVkZXNcblx0XHRcdC5jb25jYXQoW2luY2x1ZGUgKyAnLyouc3BlYy50cycsIGluY2x1ZGUgKyAnLyoqLyouc3BlYy50cyddKVxuXHRcdFx0LmNvbmNhdChbaW5jbHVkZSArICcvaW5kZXgudHMnLCBpbmNsdWRlICsgJy8qKi9pbmRleC50cyddKVxuXHRcdFx0LmpvaW4oJyAtLWV4Y2x1ZGUgJykuc3BsaXQoJyAnKSxcblx0XHQnLS1pbmNsdWRlJywgaW5jbHVkZSArICcvKionLFxuXHRcdCdub2RlX21vZHVsZXMvLmJpbi9qYXNtaW5lJyxcblx0XHR0ZXN0Um9vdEZpbGUgPyB0ZXN0Um9vdEZpbGUgOiBpbmNsdWRlICsgJy8qKi8qLnNwZWMudHMnXG5cdF0pXG59XG4iXX0=
