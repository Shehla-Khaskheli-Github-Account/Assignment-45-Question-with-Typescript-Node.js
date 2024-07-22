"use strict";
function storCarInfo(manufacturer, model_name, ...extraOption) {
    let CarInfo = Object.assign({ manufacturer,
        model_name }, Object.assign({}, ...extraOption));
    return CarInfo;
}
;
let ans = storCarInfo('Honda', 'Civics', { color: 'black' }, { features: ['navigation', 'Power window'] });
console.log(ans);
