//chart info



var chart = c3.generate({
	data: { 
		type: 'pie',
		columns: data, 
		colors: {
			'Rent': '#1abc9c',
			'Food': '#f1c40f',
			'Gas': '#218380',
			'Utilities': '#34495e',
			'Debt': '#e74c3c',
			'Car Payment': '#bdc3c7',
		}
	},
	pie: {
  		label: {
    		format: function (value, ratio, id) {
      		return '$' + value;
    }
  }
}
});