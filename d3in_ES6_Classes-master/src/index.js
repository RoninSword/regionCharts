import BarDisplay from './BarDisplay';
//import LineDisplay from './LineDisplay';
//import ScatterDisplay from './ScatterDisplay';

let barData = [
    {"year":1970, "temp": -0.6, "precipitation": 3},
    {"year":1971, "temp": 0.3, "precipitation": 7},
    {"year":1972, "temp": -1.7, "precipitation": -20},
    {"year":1973, "temp": 1.4, "precipitation": 4},
    {"year":1974, "temp": -2.5, "precipitation": 18},
    {"year":1975, "temp": -0.3, "precipitation": 0},
    {"year":1976, "temp": -0.6, "precipitation": 12},
    {"year":1977, "temp": 2.4, "precipitation": -7},
    {"year":1978, "temp": -1.1, "precipitation": -2},
    {"year":1979, "temp": 0.9, "precipitation": 29},
    {"year":1980, "temp": 1.1, "precipitation": -7},
    {"year":1981, "temp": 1.3, "precipitation": 8},
    {"year":1982, "temp": -0.9, "precipitation": 6},
    {"year":1983, "temp": -0.2, "precipitation": 26},
    {"year":1984, "temp": 0.3, "precipitation": -7},
    {"year":1985, "temp": -0.3, "precipitation": 3},
    {"year":1986, "temp": 1.3, "precipitation": 2},
    {"year":1987, "temp": 2.6, "precipitation": -16},
    {"year":1988, "temp": 1.3, "precipitation": 8},
    {"year":1989, "temp": -0.8, "precipitation": -5},
    {"year":1990, "temp": -0.1, "precipitation": -14},
    {"year":1991, "temp": 1.1, "precipitation": 1},
    {"year":1992, "temp": -1.5, "precipitation": 7},
    {"year":1993, "temp": -0.1, "precipitation": -1},
    {"year":1994, "temp": -0.5, "precipitation": 2},
    {"year":1995, "temp": 0.1, "precipitation": -4},
    {"year":1996, "temp": -1.0, "precipitation": 0},
    {"year":1997, "temp": -1.8, "precipitation": 0},
    {"year":1998, "temp": 2.3, "precipitation": -3},
    {"year":1999, "temp": 3.3, "precipitation": 6},
    {"year":2000, "temp": 1.7, "precipitation": 7},
    {"year":2001, "temp": 2.5, "precipitation": -2},
    {"year":2002, "temp": -1.8, "precipitation": 15},
    {"year":2003, "temp": -0.8, "precipitation": -21},
    {"year":2004, "temp": -0.5, "precipitation": 14},
    {"year":2005, "temp": 1.5, "precipitation": -6},
    {"year":2006, "temp": 3.7, "precipitation": 3},
    {"year":2007, "temp": 0.4, "precipitation": 9},
    {"year":2008, "temp": -0.2, "precipitation": 14},
    {"year":2009, "temp": -0.4, "precipitation": 18},
    {"year":2010, "temp": 4.2, "precipitation": -14}
];
let barWidth = 400;
let barHeight = 300;
let barPadding = 2;
let barHolder = "#barSpace";

let myBars = new BarDisplay(barData, barHolder, barWidth, barHeight, barPadding);

let lineHeight = 350;
let lineWidth = 400;
let lineData = [
    {"year":1970, "temp": -0.6, "precipitation": 3},
    {"year":1971, "temp": 0.3, "precipitation": 7},
    {"year":1972, "temp": -1.7, "precipitation": -20},
    {"year":1973, "temp": 1.4, "precipitation": 4},
    {"year":1974, "temp": -2.5, "precipitation": 18},
    {"year":1975, "temp": -0.3, "precipitation": 0},
    {"year":1976, "temp": -0.6, "precipitation": 12},
    {"year":1977, "temp": 2.4, "precipitation": -7},
    {"year":1978, "temp": -1.1, "precipitation": -2},
    {"year":1979, "temp": 0.9, "precipitation": 29},
    {"year":1980, "temp": 1.1, "precipitation": -7},
    {"year":1981, "temp": 1.3, "precipitation": 8},
    {"year":1982, "temp": -0.9, "precipitation": 6},
    {"year":1983, "temp": -0.2, "precipitation": 26},
    {"year":1984, "temp": 0.3, "precipitation": -7},
    {"year":1985, "temp": -0.3, "precipitation": 3},
    {"year":1986, "temp": 1.3, "precipitation": 2},
    {"year":1987, "temp": 2.6, "precipitation": -16},
    {"year":1988, "temp": 1.3, "precipitation": 8},
    {"year":1989, "temp": -0.8, "precipitation": -5},
    {"year":1990, "temp": -0.1, "precipitation": -14},
    {"year":1991, "temp": 1.1, "precipitation": 1},
    {"year":1992, "temp": -1.5, "precipitation": 7},
    {"year":1993, "temp": -0.1, "precipitation": -1},
    {"year":1994, "temp": -0.5, "precipitation": 2},
    {"year":1995, "temp": 0.1, "precipitation": -4},
    {"year":1996, "temp": -1.0, "precipitation": 0},
    {"year":1997, "temp": -1.8, "precipitation": 0},
    {"year":1998, "temp": 2.3, "precipitation": -3},
    {"year":1999, "temp": 3.3, "precipitation": 6},
    {"year":2000, "temp": 1.7, "precipitation": 7},
    {"year":2001, "temp": 2.5, "precipitation": -2},
    {"year":2002, "temp": -1.8, "precipitation": 15},
    {"year":2003, "temp": -0.8, "precipitation": -21},
    {"year":2004, "temp": -0.5, "precipitation": 14},
    {"year":2005, "temp": 1.5, "precipitation": -6},
    {"year":2006, "temp": 3.7, "precipitation": 3},
    {"year":2007, "temp": 0.4, "precipitation": 9},
    {"year":2008, "temp": -0.2, "precipitation": 14},
    {"year":2009, "temp": -0.4, "precipitation": 18},
    {"year":2010, "temp": 4.2, "precipitation": -14}
];
//let lineHolder = "#lineSpace";

//let myLines = new LineDisplay(lineHeight, lineWidth, lineHolder, lineData);




