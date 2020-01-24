function obtenerBalance(){
	var request = new XMLHttpRequest();
	request.open('GET', 'balance.json', true);
	request.send();
	return request;
}


function formatDate(date){
	var d = new Date(date);
  	var n = d.toLocaleDateString();
  	return n;
}


function obtenerHistorial(){
	var request = new XMLHttpRequest();
	request.open('GET', 'transactions.json', true);
	request.send();
	return request;
}


function hacerTransferencia(){
	event.preventDefault();
	var origin = document.getElementById('origenSelect');
	var destination = document.getElementById('cuentaDestino');
	var amount = document.getElementById('monto');
	var transferDate = formatDate(new Date());
	var table = document.getElementById(origin.value);

	var dataStg = localStorage.getItem(origin.value);
	var auxAccount = JSON.parse(dataStg);
	var resultMonto = auxAccount.amount - amount.value;
	var currency = auxAccount.currency;

	if( (amount.value < 100000) &&  (resultMonto > 0)){
		localStorage.setItem(origin.value, JSON.stringify({'amount': resultMonto, 'currency': currency, 'lastDate': transferDate}));
		var tr = document.createElement('tr');
		var _origin = document.createElement('td');
		var _destination = document.createElement('td');
		var _transferDate = document.createElement('td');
		var _amount = document.createElement('td');
		var _transactions = new Object();
		var _tranArray = [];
		var dataResource = '';
		if(localStorage.getItem("toAccounts") != null){
			dataResource = JSON.parse(localStorage.getItem("toAccounts"));
			_transactions.fromAccount = origin.value;
			_transactions.toAccount = destination.value;
			_transactions.sentAt = transferDate;
			_transactions.currency = '$';
			_transactions.value = amount.value;
			dataResource.push(_transactions);
		
			localStorage.setItem("toAccounts", JSON.stringify(dataResource));

			var chart = am4core.create("chartdiv", am4charts.PieChart);
			var cuentasDestino = [];
			var dataChart = [];
			var data = JSON.parse(localStorage.getItem("toAccounts"));
		    data.forEach( element => {
		      cuentasDestino.push(element.toAccount);
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
		

		_origin.textContent = origin.value;
		_destination.textContent = destination.value;
		_transferDate.textContent = transferDate;
		_amount.textContent = amount.value;

		tr.appendChild(_origin);
		tr.appendChild(_destination);
		tr.appendChild(_transferDate);
		tr.appendChild(_amount);
		table.appendChild(tr);

	}else{
		var element = document.getElementById('modalTransferencia');
		UIkit.modal(element).show();
	}
}


function dataTransferencia(){

}


function cancelarTransferencia(){
	event.preventDefault();
	var destination = document.getElementById('cuentaDestino');
	var amount = document.getElementById('monto');
	destination.value = '';
	amount.value = '';
}


function logout(){
	localStorage.clear();
	window.location.href = "index.html";
}