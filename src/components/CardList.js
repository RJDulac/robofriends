import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	// if (true) {
	// 	throw new Error('nooooo!');
	// }
	return (
		<div>
			{ 
				robots.map((user, i) => {
					return (
						<Card 
						//when looping through an array set key to i. React wants a key so it won't have to rerender the entire thing if an item in the array was removed
						key={ i }
						id={robots[i].id}
						name={robots[i].name} 
						email={robots[i].email}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;