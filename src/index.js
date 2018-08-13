"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clean_1 = require("./utils/clean");
const copy_1 = require("./utils/copy");
const echo_1 = require("./utils/echo");
const exec_1 = require("./utils/exec");
const npmPublish_1 = require("./utils/npmPublish");
const prettier_1 = require("./utils/prettier");
const removeModuleAlias_1 = require("./utils/removeModuleAlias");
const test_1 = require("./utils/test");
const tsc_1 = require("./utils/tsc");
const processPackage_1 = require("./utils/processPackage");
const zip_1 = require("./utils/zip");
exports.BuildUtils = {
    clean: clean_1.clean,
    copy: copy_1.copy,
    echo: echo_1.echo,
    exec: exec_1.exec,
    npmPublish: npmPublish_1.npmPublish,
    prettierJS: prettier_1.prettierJS,
    prettierTS: prettier_1.prettierTS,
    removeModuleAlias: removeModuleAlias_1.removeModuleAlias,
    test: test_1.test,
    tsc: tsc_1.tsc,
    processPackage: processPackage_1.processPackage,
    zip: zip_1.zip
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUFxQztBQUNyQyx1Q0FBbUM7QUFDbkMsdUNBQW1DO0FBQ25DLHVDQUFtQztBQUNuQyxtREFBK0M7QUFDL0MsK0NBQXlEO0FBQ3pELGlFQUE2RDtBQUM3RCx1Q0FBbUM7QUFDbkMscUNBQWlDO0FBQ2pDLDJEQUF1RDtBQUN2RCxxQ0FBaUM7QUFFcEIsUUFBQSxVQUFVLEdBQUc7SUFDekIsS0FBSyxFQUFFLGFBQUs7SUFDWixJQUFJLEVBQUUsV0FBSTtJQUNWLElBQUksRUFBRSxXQUFJO0lBQ1YsSUFBSSxFQUFFLFdBQUk7SUFDVixVQUFVLEVBQUUsdUJBQVU7SUFDdEIsVUFBVSxFQUFFLHFCQUFVO0lBQ3RCLFVBQVUsRUFBRSxxQkFBVTtJQUN0QixpQkFBaUIsRUFBRSxxQ0FBaUI7SUFDcEMsSUFBSSxFQUFFLFdBQUk7SUFDVixHQUFHLEVBQUUsU0FBRztJQUNSLGNBQWMsRUFBRSwrQkFBYztJQUM5QixHQUFHLEVBQUUsU0FBRztDQUNSLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbGVhbiB9IGZyb20gJy4vdXRpbHMvY2xlYW4nXG5pbXBvcnQgeyBjb3B5IH0gZnJvbSAnLi91dGlscy9jb3B5J1xuaW1wb3J0IHsgZWNobyB9IGZyb20gJy4vdXRpbHMvZWNobydcbmltcG9ydCB7IGV4ZWMgfSBmcm9tICcuL3V0aWxzL2V4ZWMnXG5pbXBvcnQgeyBucG1QdWJsaXNoIH0gZnJvbSAnLi91dGlscy9ucG1QdWJsaXNoJ1xuaW1wb3J0IHsgcHJldHRpZXJKUywgcHJldHRpZXJUUyB9IGZyb20gJy4vdXRpbHMvcHJldHRpZXInXG5pbXBvcnQgeyByZW1vdmVNb2R1bGVBbGlhcyB9IGZyb20gJy4vdXRpbHMvcmVtb3ZlTW9kdWxlQWxpYXMnXG5pbXBvcnQgeyB0ZXN0IH0gZnJvbSAnLi91dGlscy90ZXN0J1xuaW1wb3J0IHsgdHNjIH0gZnJvbSAnLi91dGlscy90c2MnXG5pbXBvcnQgeyBwcm9jZXNzUGFja2FnZSB9IGZyb20gJy4vdXRpbHMvcHJvY2Vzc1BhY2thZ2UnXG5pbXBvcnQgeyB6aXAgfSBmcm9tICcuL3V0aWxzL3ppcCdcblxuZXhwb3J0IGNvbnN0IEJ1aWxkVXRpbHMgPSB7XG5cdGNsZWFuOiBjbGVhbixcblx0Y29weTogY29weSxcblx0ZWNobzogZWNobyxcblx0ZXhlYzogZXhlYyxcblx0bnBtUHVibGlzaDogbnBtUHVibGlzaCxcblx0cHJldHRpZXJKUzogcHJldHRpZXJKUyxcblx0cHJldHRpZXJUUzogcHJldHRpZXJUUyxcblx0cmVtb3ZlTW9kdWxlQWxpYXM6IHJlbW92ZU1vZHVsZUFsaWFzLFxuXHR0ZXN0OiB0ZXN0LFxuXHR0c2M6IHRzYyxcblx0cHJvY2Vzc1BhY2thZ2U6IHByb2Nlc3NQYWNrYWdlLFxuXHR6aXA6IHppcFxufVxuIl19