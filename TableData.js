import React from 'react';
import Data from './DataTypes/Data';

class TableData extends React.Component {
	render() {
		var key = this.props.propName.ucwords();
		var dataClass = Data.hasOwnProperty( key ) ? Data[ key ] : Data.Text;
		return React.createElement( dataClass, {
			data: this.props.data,
		} );

	}
}

export default TableData