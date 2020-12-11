import GoogleMapReact from 'google-map-react';

const Map = ({ center, zoom }) => {
	return (
		<div className='map'>
			<GoogleMapReact bootstrapURLKeys={{ key: '' }}></GoogleMapReact>
		</div>
	);
};

export default Map;
