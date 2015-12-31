import React from 'react';
import TableRow from './TableRow';

class Table extends React.Component {
	render() {
		var varieties = this.props.data.varieties;
		var headings = Object.keys( varieties[0] ).filter(function( key ){
			return '_' !== key[0];
		}).map(function(heading){
			return heading.ucwords();
		});
		var tableRows = varieties.map(function (row) {
			return (
				<TableRow key={row.id} data={row} />
			);
		});
		return (
			<table className="pure-table">
				<thead>
					<TableRow data={headings} />
				</thead>
				<tbody>
					{tableRows}
				</tbody>
			</table>
		);
	}
}

export default Table