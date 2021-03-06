import React, { useState, useEffect } from 'react';

function SubscribeApi(friendID, handleStatusChange) {
	handleStatusChange({isOnline: true});
}

function UnsubscribeApi(friendID, handleStatusChange) {
	// handleStatusChange({isOnline: false});
}

function useFriendStatus(friendID) {
	const [isOnline, setIsOnline] = useState(null);

	useEffect(() => {
		console.log("06 HooksCustom : UseEffect !");
		function handleStatusChange(status) {
			setIsOnline(status.isOnline);
		}
		SubscribeApi(friendID, handleStatusChange);
		return UnsubscribeApi(friendID, handleStatusChange);
	})
}

function HooksCustom(){
	const isOnline = useFriendStatus(1);

	if (isOnline === null) {
		return (
			<div>
				<p>'Chargement....'</p>
			</div>
		);
	}

	return (
		<div>
			<h2>06 HooksCustom</h2>
			{isOnline &&
				<p>En ligne</p>}
			{!isOnline &&
				<p>Hors-ligne</p>}
		</div>
	);
}

export default HooksCustom;
