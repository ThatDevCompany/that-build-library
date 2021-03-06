"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clean_1 = require("./utils/clean");
const copy_1 = require("./utils/copy");
const echo_1 = require("./utils/echo");
const exec_1 = require("./utils/exec");
const publish_1 = require("./utils/publish");
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
    publish: publish_1.publish,
    prettierJS: prettier_1.prettierJS,
    prettierTS: prettier_1.prettierTS,
    removeModuleAlias: removeModuleAlias_1.removeModuleAlias,
    testJS: test_1.testJS,
    testTS: test_1.testTS,
    tsc: tsc_1.tsc,
    processPackage: processPackage_1.processPackage,
    zip: zip_1.zip
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUFxQztBQUNyQyx1Q0FBbUM7QUFDbkMsdUNBQW1DO0FBQ25DLHVDQUFtQztBQUNuQyw2Q0FBeUM7QUFDekMsK0NBQXlEO0FBQ3pELGlFQUE2RDtBQUM3RCx1Q0FBNkM7QUFDN0MscUNBQWlDO0FBQ2pDLDJEQUF1RDtBQUN2RCxxQ0FBaUM7QUFFcEIsUUFBQSxVQUFVLEdBQUc7SUFDekIsS0FBSyxFQUFFLGFBQUs7SUFDWixJQUFJLEVBQUUsV0FBSTtJQUNWLElBQUksRUFBRSxXQUFJO0lBQ1YsSUFBSSxFQUFFLFdBQUk7SUFDVixPQUFPLEVBQUUsaUJBQU87SUFDaEIsVUFBVSxFQUFFLHFCQUFVO0lBQ3RCLFVBQVUsRUFBRSxxQkFBVTtJQUN0QixpQkFBaUIsRUFBRSxxQ0FBaUI7SUFDcEMsTUFBTSxFQUFFLGFBQU07SUFDZCxNQUFNLEVBQUUsYUFBTTtJQUNkLEdBQUcsRUFBRSxTQUFHO0lBQ1IsY0FBYyxFQUFFLCtCQUFjO0lBQzlCLEdBQUcsRUFBRSxTQUFHO0NBQ1IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsZWFuIH0gZnJvbSAnLi91dGlscy9jbGVhbidcbmltcG9ydCB7IGNvcHkgfSBmcm9tICcuL3V0aWxzL2NvcHknXG5pbXBvcnQgeyBlY2hvIH0gZnJvbSAnLi91dGlscy9lY2hvJ1xuaW1wb3J0IHsgZXhlYyB9IGZyb20gJy4vdXRpbHMvZXhlYydcbmltcG9ydCB7IHB1Ymxpc2ggfSBmcm9tICcuL3V0aWxzL3B1Ymxpc2gnXG5pbXBvcnQgeyBwcmV0dGllckpTLCBwcmV0dGllclRTIH0gZnJvbSAnLi91dGlscy9wcmV0dGllcidcbmltcG9ydCB7IHJlbW92ZU1vZHVsZUFsaWFzIH0gZnJvbSAnLi91dGlscy9yZW1vdmVNb2R1bGVBbGlhcydcbmltcG9ydCB7IHRlc3RKUywgdGVzdFRTIH0gZnJvbSAnLi91dGlscy90ZXN0J1xuaW1wb3J0IHsgdHNjIH0gZnJvbSAnLi91dGlscy90c2MnXG5pbXBvcnQgeyBwcm9jZXNzUGFja2FnZSB9IGZyb20gJy4vdXRpbHMvcHJvY2Vzc1BhY2thZ2UnXG5pbXBvcnQgeyB6aXAgfSBmcm9tICcuL3V0aWxzL3ppcCdcblxuZXhwb3J0IGNvbnN0IEJ1aWxkVXRpbHMgPSB7XG5cdGNsZWFuOiBjbGVhbixcblx0Y29weTogY29weSxcblx0ZWNobzogZWNobyxcblx0ZXhlYzogZXhlYyxcblx0cHVibGlzaDogcHVibGlzaCxcblx0cHJldHRpZXJKUzogcHJldHRpZXJKUyxcblx0cHJldHRpZXJUUzogcHJldHRpZXJUUyxcblx0cmVtb3ZlTW9kdWxlQWxpYXM6IHJlbW92ZU1vZHVsZUFsaWFzLFxuXHR0ZXN0SlM6IHRlc3RKUyxcblx0dGVzdFRTOiB0ZXN0VFMsXG5cdHRzYzogdHNjLFxuXHRwcm9jZXNzUGFja2FnZTogcHJvY2Vzc1BhY2thZ2UsXG5cdHppcDogemlwXG59XG4iXX0=