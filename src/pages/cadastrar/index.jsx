import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
// import { api } from "../../services/api";
import * as yup from "yup";

import { useForm } from "react-hook-form";

import {
  Container,
  Title,
  Column,
  TitleLogin,
  SubtitleLogin,
  FazerLoginText,
  Row,
  Wrapper,
  ErrorText,
  ContaText,
} from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaUser } from "react-icons/fa";

const schema = yup.object({
  name: yup.string().min(2, "Nome deve ter no minimo dois caracteres").required("Nome inválido"),
  email: yup.string().email("Email inválido").required(),
  password: yup
    .string()
    .min(3, "A senha deve ter no minimo três caracteres")
    .required(),
});

const Cadastrar = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    reValidateMode: "onChange",
    mode: "onChange",
  });
  const onSubmit = async (formData) => {
    console.log(formData);
    navigate("/");
  };

  console.log("errors", errors);

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie uma conta e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: "20px" }}>
              <Input
                placeholder="Nome completo"
                leftIcon={<FaUser />}
                name="name"
                control={control}
              />
              {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
              <Input
                placeholder="E-mail"
                leftIcon={<MdEmail />}
                name="email"
                control={control}
              />
              {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
              <Input
                type="password"
                placeholder="Senha"
                leftIcon={<MdLock />}
                name="password"
                control={control}
                errorMessage={errors.password?.message}
              />
              {errors.password && (
                <ErrorText>{errors.password?.message}</ErrorText>
              )}
              <Button variant="secondary" type="submit">
                Criar minha conta
              </Button>
            </form>
            <SubtitleLogin>
              Ao clicar em &quot;criar minha conta grátis&quot;, declaro que
              aceito as Políticas de Privacidade e os Termos de Uso da DIO.
            </SubtitleLogin>
            <Row>
              <ContaText>Já tenho conta. </ContaText>
              <FazerLoginText>Fazer login</FazerLoginText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Cadastrar;
