import Header from "../../components/Header";
import { Column, Container, Title, TitleHighlight } from "./styles";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={35}
            nome="Pablo Henrique"
            image="https://avatars.githubusercontent.com/u/45184516?v=4"
          />
          <UserInfo
            percentual={70}
            nome="Pablo Henrique"
            image="https://avatars.githubusercontent.com/u/45184516?v=4"
          />
          <UserInfo
            percentual={55}
            nome="Pablo Henrique"
            image="https://avatars.githubusercontent.com/u/45184516?v=4"
          />
          <UserInfo
            percentual={60}
            nome="Pablo Henrique"
            image="https://avatars.githubusercontent.com/u/45184516?v=4"
          />
        </Column>
      </Container>
    </>
  );
};

export default Feed;
