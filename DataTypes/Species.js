import React from 'react';
import Text from './Text';

class Species extends Text {
	render() {
		return <p>{this.props.data}</p>
	}
}

export default Species