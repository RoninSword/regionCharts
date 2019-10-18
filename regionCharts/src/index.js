import BarDisplay from './BarDisplay';
import LineDisplay from './LineDisplay';



    

let barData = [10, 20, 30, 40, 50, 60, 70, 80, 10];
let barData2 = [25, 50, 75, 100];
let barWidth = 400;
let barHeight = 300;
let barPadding = 2;
let barHolder = "#barSpace";
let myBars = new BarDisplay(barData, barHolder, barWidth, barHeight, barPadding);
let myBars2 = new BarDisplay(barData2, "#barSpace2", barWidth, barHeight, barPadding);
    


