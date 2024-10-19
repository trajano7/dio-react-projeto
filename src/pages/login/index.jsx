import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";
import Button  from "../../components/Button";
import Header  from "../../components/Header";
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
  EsqueciText,
  CriarText,
  Row,
  Wrapper,
  ErrorText,
} from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";

const schema = yup.object({
  email: yup.string().email("Email inválido").required(),
  password: yup.string().min(3, "A senha deve ter no minimo três caracteres").required(),

})

const Login = () => {
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
    try{
      console.log(formData)
        const {data} = await api.get(`/users?email=${formData.email}&senha=${formData.password}`);
        
        if(data.length && data[0].id){
            navigate('/feed') 
            return
        }

        alert('Usuário ou senha inválido')
    }catch {
        alert("Something went wrong")
    }
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
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
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
              {errors.password && <ErrorText>{errors.password?.message}</ErrorText>}
              <Button variant="secondary" type="submit">Entrar</Button>
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Login;
