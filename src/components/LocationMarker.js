import Icon from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';

const LocationMarker = ({ lat, lng, onClick }) => {
	return (
		<div className='LocationMarker' onClick={onClick}>
			<Icon icon={locationIcon} className='LocationMarker__Icon' />
		</div>
	);
};

export default LocationMarker;
