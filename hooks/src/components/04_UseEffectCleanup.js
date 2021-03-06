import React, { useState, useEffect } from 'react';

function UseEffectCleanup(){

	const [click, setClick] = useState(0);

	useEffect(() => {
		console.log("04 UseEffectCleanup : Subscribe !");
		return () => console.log("04 UseEffectCleanup : Unsubsribe !");
	})

	return (
		<div>
			<h2>04 UseEffectCleanup</h2>
			<button onClick={() => setClick(click)}>Click</button>
		</div>
	);

}

export default UseEffectCleanup;
