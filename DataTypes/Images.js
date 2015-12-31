import React from 'react';
import Text from './Text';
import Image from './Image';

class Images extends Text {
	render() {
		var images = this.props.data.map( function( image ) {
			return (
				<Image src={image.url} key={image.id} />
			);
		});
		return (
			<p>
			{images}
			</p>
		);
	}
}

export default Images