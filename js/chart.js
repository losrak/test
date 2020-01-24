am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  // Create chart instance
  var chart = am4core.create("chartdiv", am4charts.PieChart);
  var cuentasDestino = [];
  var dataChart = [];


  if(localStorage.getItem("toAccounts") === null){
    var rqt = obtenerHistorial();
    rqt.onload = function() {
      
      var data = JSON.parse(this.response);
      if (rqt.status >= 200 && rqt.status < 400) {
        data.transactions.forEach( element => {
          cuentasDestino.push(element.toAccount);
        });
        var unicosCD = new Set(cuentasDestino);
        for (let item of unicosCD){
          var dataChartElement = new Object();
          dataChartElement.repeticion = 0;
          data.transactions.forEach(current => {
            if(current.toAccount == item){
              dataChartElement.toAccount = current.toAccount;
              dataChartElement.repeticion++;
            }
          });
          dataChart.push(dataChartElement);
        }

        chart.data = dataChart;

        // Add and configure Series
        var pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "repeticion";
        pieSeries.dataFields.category = "toAccount";
        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.slices.template.strokeWidth = 2;
        pieSeries.slices.template.strokeOpacity = 1;

        // This creates initial animation
        pieSeries.hiddenState.properties.opacity = 1;
        pieSeries.hiddenState.properties.endAngle = -90;
        pieSeries.hiddenState.properties.startAngle = -90;
           
      } else {
        console.log('error')
      }
    }
  }else{
    var data = JSON.parse(localStorage.getItem("toAccounts"));
    console.log(data);
    data.forEach( element => {
      cuentasDestino.push(element.toAccount);
      console.log("seguimos");
    });
    var unicosCD = new Set(cuentasDestino);

    for (let item of unicosCD){
      console.log("seguimos adelante");
      var dataChartElement = new Object();
      dataChartElement.repeticion = 0;
      data.forEach(current => {
        if(current.toAccount == item){
          dataChartElement.toAccount = current.toAccount;
          dataChartElement.repeticion++;
        }
      });
      dataChart.push(dataChartElement);
    }
    chart.data = dataChart;

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "repeticion";
    pieSeries.dataFields.category = "toAccount";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
  }

}); // end am4core.ready()