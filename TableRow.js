import React from 'react';
import TableCell from './TableCell';

class TableRow extends React.Component {
	render() {
		var rowCells = Object.keys( this.props.data ).map( function ( key ) {
			return (
				<TableCell data={this.props.data[key]} key={key} propName={key} />
			)
		}, this );
		return(
			<tr>
				{rowCells}
			</tr>
		);
	}
}

export default TableRow