import Header from "../../components/Header";
import { Container, TextContent, Title, TitleHighlight } from "./styles";
import bannerImg from "../../assets/banner.png";
import Button from "../../components/Button";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>Implemente</TitleHighlight> o seu futuro global
            agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button variant="secondary">Começar agora</Button>
        </div>
        <div>
          <img src={bannerImg} alt="Imagem principal" />
        </div>
      </Container>
    </>
  );
};

export default Home;
