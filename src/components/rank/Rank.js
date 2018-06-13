import React from 'react';

const capitalizeFirstLetter = (name) => {
    return (name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
}

const Rank = ({name, entries}) => {
	return (
		<div>
			<div className='white f3'>
				{`${capitalizeFirstLetter(name)}, your current entry count is...`}
			</div>
			<div className='white f1'>
				{entries}
			</div>
		</div>
	);
}

export default Rank;