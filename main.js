import React from 'react';
import ReactDOM from 'react-dom';

import Table from './Table';
import Data from './Data/Data';

String.prototype.ucwords = function () {
	var str = this.toLowerCase();
	return str.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g,
		function (s) {
			return s.toUpperCase();
		});
};

ReactDOM.render(
	<Table data={Data} />,
	document.getElementById( 'app')
);