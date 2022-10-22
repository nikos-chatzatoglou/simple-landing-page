import { Container, Loader } from "./PageLoader.styles";

const PageLoader = () => {
	return (
		<Container>
			<Loader src={"Logo_move.gif"} alt='Logo'></Loader>
		</Container>
	);
};

export default PageLoader;
