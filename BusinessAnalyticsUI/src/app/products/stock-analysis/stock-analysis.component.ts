import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-analysis',
  templateUrl: './stock-analysis.component.html',
  styleUrls: ['./stock-analysis.component.css']
})
export class StockAnalysisComponent implements OnInit {

  showStockAnalysis: boolean = false;
  options2: any;
  month: string = "October";
  constructor() { }

  ngOnInit() {
    this.options2 = {
      chart: {

        type: 'line',

        zoomType: 'x'
      },
      title: {
        text: 'Project wise Budget Estimation'
      },
      subtitle: {
        text: 'Select area to zoom.Click Reset Zoom to reset selection'
      },
      credits: {
        enabled: true,
        position: {
          align: 'right',
          x: -10,
          verticalAlign: 'bottom',
          y: -5
        },
        href: "http://www.qualiantech.com",
        text: "Qualian Technologies Pvt Ltd"
      },
      xAxis: {
        categories: ["W 1, Nov 2010", "W 2, Nov 2010", "W 3, Nov 2010", "W 4, Nov 2010", "W 1, Dec 2010", "W 2, Dec 2010", "W 3, Dec 2010", "W 4, Dec 2010", "W 1, Jan 2011", "W 2, Jan 2011", "W 3, Jan 2011", "W 4, Jan 2011", "W 1, Feb 2011", "W 2, Feb 2011", "W 3, Feb 2011", "W 4, Feb 2011", "W 1, Mar 2011", "W 2, Mar 2011", "W 3, Mar 2011", "W 4, Mar 2011", "W 1, Apr 2011", "W 2, Apr 2011", "W 3, Apr 2011", "W 4, Apr 2011", "W 1, May 2011", "W 2, May 2011", "W 3, May 2011", "W 4, May 2011", "W 1, Jun 2011", "W 2, Jun 2011", "W 3, Jun 2011", "W 4, Jun 2011", "W 1, July 2011", "W 2, July 2011", "W 3, July 2011", "W 4, July 2011", "W 1, Aug 2011", "W 2, Aug 2011", "W 3, Aug 2011", "W 4, Aug 2011", "W 1, Sep 2011", "W 2, Sep 2011", "W 3, Sep 2011", "W 4, Sep 2011", "W 1, Oct 2011", "W 2, Oct 2011", "W 3, Oct 2011", "W 4, Oct 2011", "W 1, Nov 2011", "W 2, Nov 2011", "W 3, Nov 2011", "W 4, Nov 2011", "W 1, Dec 2011", "W 2, Dec 2011", "W 3, Dec 2011", "W 4, Dec 2011", "W 1, Jan 2012", "W 2, Jan 2012", "W 3, Jan 2012", "W 4, Jan 2012", "W 1, Feb 2012", "W 2, Feb 2012", "W 3, Feb 2012", "W 4, Feb 2012", "W 1, Mar 2012", "W 2, Mar 2012", "W 3, Mar 2012", "W 4, Mar 2012", "W 1, Apr 2012", "W 2, Apr 2012", "W 3, Apr 2012", "W 4, Apr 2012", "W 1, May 2012", "W 2, May 2012", "W 3, May 2012", "W 4, May 2012", "W 1, Jun 2012", "W 2, Jun 2012", "W 3, Jun 2012", "W 4, Jun 2012", "W 1, July 2012", "W 2, July 2012", "W 3, July 2012", "W 4, July 2012", "W 1, Aug 2012", "W 2, Aug 2012", "W 3, Aug 2012", "W 4, Aug 2012"],
        min: 0,
        max: 9,
        scrollbar: {
          enabled: true
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Amount Distribution'
        }
      },
      legend: {
        shadow: true
      },
      tooltip: {
        useHTML: true,
        headerFormat: '<small>{point.key}</small><table>',
        pointFormat: '<tr><td style="color: {series.color}">{series.name}:{point.y} </td>',
        footerFormat: '</table>',
        valueDecimals: 2,
        crosshairs: [{
          width: 1,
          color: 'Gray'
        }, {
          width: 1,
          color: 'gray'
        }]
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0.5
        }
      },
      series: [{
        name: 'Petty Cash',
        data: [0, 0, 8, 10, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
      }],
    }
    this.goodsVsQtyGraphInit();

  }

  showStockReport() {
    if (this.showStockAnalysis)
      this.showStockAnalysis = false;
    else this.showStockAnalysis = true;
  }

  goodsVsQtyGraphInit() {
    this.options2 = {
      chart: {
        type: 'column',
        marginLeft: 150,
        width: 1000,
        height: 600
      },
      title: {
        text: 'Goods Vs Stock quantity'
      },
      subtitle: {
        text: this.month
      },
      xAxis: {
        type: 'category',
        title: {
          text: 'Goods'
        },
        tickLength: 0
      },
      yAxis: {
        min: 0,
        max: 1200,
        title: {
          text: 'Quantity',
          align: 'high'
        }
      },
      
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Stock',
        data: [
          ["Gantt chart", 1000],
          ["Autocalculation and plotting of trend lines", 575],
          ["Allow navigator to have multiple data series", 523],
          ["Implement dynamic font size", 427],
          ["Multiple axis alignment control", 399],
          ["Stacked area (spline etc) in irregular datetime series", 309],
          ["Adapt chart height to legend height", 278],
          ["Export charts in excel sheet", 239],
          ["Toggle legend box", 235],
          ["Venn Diagram", 203],
          ["Add ability to change Rangeselector position", 182],
          ["Draggable legend box", 157],
          ["Sankey Diagram", 149],
          ["Add Navigation bar for Y-Axis in Highstock", 144],
          ["Grouped x-axis", 143],
          ["ReactJS plugin", 137],
          ["3D surface charts", 134],
          ["Draw lines over a stock chart, for analysis purpose", 118],
          ["Data module for database tables", 118],
          ["Draggable points", 117],
          ["Gantt chart 1", 1000],
          ["Autocalculation and plotting of trend lines", 575],
          ["Allow navigator to have multiple data series", 523],
          ["Implement dynamic font size", 427],
          ["Multiple axis alignment control", 399],
          ["Stacked area (spline etc) in irregular datetime series", 309],
          ["Adapt chart height to legend height", 278],
          ["Export charts in excel sheet", 239],
          ["Toggle legend box", 235],
          ["Venn Diagram", 203],
          ["Add ability to change Rangeselector position", 182],
          ["Draggable legend box", 157],
          ["Sankey Diagram", 149],
          ["Add Navigation bar for Y-Axis in Highstock", 144],
          ["Grouped x-axis", 143],
          ["ReactJS plugin", 137],
          ["3D surface charts", 134],
          ["Draw lines over a stock chart, for analysis purpose", 118],
          ["Data module for database tables", 118],
          ["Draggable points", 117]
        ]
      }]
    }
  }



}
