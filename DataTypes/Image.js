import React from 'react';
import Text from './Text';

class Image extends Text {
	render() {
		return (
			<img src={this.props.src} />
		);
	}
}

export default Image