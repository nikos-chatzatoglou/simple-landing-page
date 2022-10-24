import { useEffect } from "react";
import PageLoader from "../../components/PageLoader/PageLoader";

const Rediraction = () => {
	let isTimerOff = true;

	useEffect(() => {
		setTimeout(() => {
			window.location.replace("https://tampa.escapegameover.us/");
			isTimerOff = false;
		}, 3000);
	}, []);

	return <>{isTimerOff && <PageLoader />}</>;
};

export default Rediraction;
