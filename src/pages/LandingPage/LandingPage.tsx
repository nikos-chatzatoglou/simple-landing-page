import { useNavigate } from "react-router-dom";
import {
	Button,
	Wrapper,
	Logo,
	Content,
	Subtitle,
	TextWrapper,
	Title,
	Chevron,
} from "./LandingPage.styles";

const LandingPage = () => {
	const navigate = useNavigate();
	const navigateToPage = () => {
		navigate("/rediraction");
	};

	return (
		<Wrapper>
			<Logo src={"logo.png"} alt='Logo'></Logo>
			<Content>
				<TextWrapper>
					<Title>Choose location</Title>
					<Subtitle>book now. get locked. escape. repeat.</Subtitle>
				</TextWrapper>
				<Chevron />
				<Button onClick={navigateToPage}>TAMPA</Button>
			</Content>
		</Wrapper>
	);
};

export default LandingPage;
