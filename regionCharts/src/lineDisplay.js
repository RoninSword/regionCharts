import * as d3 from 'd3';

export default class newGraphs{
    constructor(){
        this.precip;
        console.log("building my line display");
        this.h = lnHeight;
        console.log(this.h);
        this.w = lnWidth;
        console.log(this.w);
        this.holder = lnHolder;
        console.log(this.holder);
        this.monthlySales = saleData;
        console.log(this.monthlySales);
        this.lineFun = d3.line()
            .x(d => d.month*3)
            .y(d => this.h - d.sales)

        this.buildChart();
    }

    buildChart(){
        console.log("build chart is running");
        let svg = d3.select(this.holder)
            .attr("width", this.w)
            .attr("height", this.h);

        let viz = svg.append("path")
            .attr("d", this.lineFun(this.monthlySales))
            .attr("stroke", "purple")
            .attr("stroke-width", 2)
            .attr("fill", "none");
        console.log(viz);

        let labels = svg.selectAll("text")
            .data(this.monthlySales)
            .enter()
            .append("text")
            .text(d => d.sales)
            .attr("x", d => (d.month * 3) - 25)
            .attr("y", d => this.h - d.sales)
            .attr("font-size", "12px")
            .attr("font-family", "sans-serif")
            .attr("fill", "#FF0000")
            .attr("text-anchor", "start")
    }

    fetchData(){
        fetch('data/regionData.json')
            .then(data => data.json())
            .then(data => {
                this.precip = data.environData;
            });
    }

}