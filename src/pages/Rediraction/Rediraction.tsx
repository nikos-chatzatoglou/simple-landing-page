import { useEffect } from "react";
import PageLoader from "../../components/PageLoader/PageLoader";

const Rediraction = () => {
	let isTimerOn = true;

	useEffect(() => {
		setTimeout(() => {
			window.location.replace("https://tampa.escapegameover.us/");
			isTimerOn = false;
		}, 3000);
	}, []);

	return <>{isTimerOn && <PageLoader />}</>;
};

export default Rediraction;
