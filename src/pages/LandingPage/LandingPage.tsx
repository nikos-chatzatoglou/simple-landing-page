import { useNavigate } from "react-router-dom";
import {
	Button,
	Container,
	Logo,
	ImgContainer,
	InnerWrapper,
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
		<Container>
			<Logo src={"logo.png"} alt='Logo'></Logo>
			<ImgContainer>
				<InnerWrapper>
					<TextWrapper>
						<Title>Choose location</Title>
						<Subtitle>book now. get locked. escape. repeat</Subtitle>
					</TextWrapper>
					<Chevron />
					<Button onClick={navigateToPage}>TAMPA</Button>
				</InnerWrapper>
			</ImgContainer>
		</Container>
	);
};

export default LandingPage;
