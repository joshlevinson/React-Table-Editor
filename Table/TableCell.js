import React from 'react';
import TableData from './TableData';

class TableCell extends React.Component {
	render() {
		return(
			<td>
				<TableData data={this.props.data} key={this.props.propName} propName={this.props.propName} />
			</td>
		);
	}
	update( e ) {
		this.setState({
			value: e.target.innerHTML,
		});
	}
}

export default TableCell