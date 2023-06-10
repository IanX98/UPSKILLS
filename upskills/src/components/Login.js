import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;
`;

const Form = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  background-color: #f4f4f4;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  border-radius: 5px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);

  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #4CAF50;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

const Cadastre = styled.a`
  color: #000;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
  return (
    <Form>
        <Container>
            <a href="/">
                <img src="/images/login-logo.png" alt=""/>
            </a>
        </Container>
        <Google>
            <img src="/images/google.svg" alt="" />
            Continuar com Google
        </Google>
        OU
      <form>
        <FormGroup>
          <Label htmlFor="username">E-MAIL</Label>
          <Input type="text" id="username" name="username" placeholder="Insira seu E-mail" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">SENHA</Label>
          <Input type="password" id="password" name="password" placeholder="Insira sua Senha" />
        </FormGroup>
        <FormGroup>
          <Button type="submit">Login</Button>
          Não possui Conta?
          <Cadastre href="/cadastro">Cadastre-se</Cadastre>
        </FormGroup>
      </form>
    </Form>
  );
};

export default Login;
