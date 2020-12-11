import GoogleMapReact from 'google-map-react';
import 'dotenv';

const API_KEY = process.env.API_KEY;

const Map = ({ center, zoom }) => {
	return (
		<div className='map'>
			<GoogleMapReact bootstrapURLKeys={{ key: API_KEY }}></GoogleMapReact>
		</div>
	);
};

export default Map;
