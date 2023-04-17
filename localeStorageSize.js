var _lsTotal = 0,
    _xLen, _x;
for (_x in localStorage) {
    if (!localStorage.hasOwnProperty(_x)) {
        continue;
    }
    _xLen = ((localStorage[_x].length + _x.length) * 2);
    _lsTotal += _xLen;
    console.log(_x.substr(0, 50) + " = " + (_xLen / 1024).toFixed(2) + " KB")
};
console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB");

// ONE LINE
javascript: var x, xLen, log=[],total=0;for (x in localStorage){if(!localStorage.hasOwnProperty(x)){continue;} xLen =  ((localStorage[x].length * 2 + x.length * 2)/1024); log.push(x.substr(0,30) + " = " +  xLen.toFixed(2) + " KB"); total+= xLen}; if (total > 1024){log.unshift("Total = " + (total/1024).toFixed(2)+ " MB");}else{log.unshift("Total = " + total.toFixed(2)+ " KB");}; alert(log.join("\n"));