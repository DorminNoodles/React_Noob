import React, { useState, useEffect } from 'react';

function HooksStartup() {
	// Déclare une nouvelle variable d'état, qu’on va appeler « count »
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log("Use Effect !");

		return () => {
			console.log("End of useEffect"); //call when dismounted
		}
	})


return (
		<div>
			<h1>HOOKS</h1>
			<h2>01 HooksStartup</h2>
			<p>Vous avez cliqué {count} fois</p>
			<button onClick={() => setCount(count + 1)}>
				Cliquez ici
			</button>
		</div>
	);
}


export default HooksStartup;
