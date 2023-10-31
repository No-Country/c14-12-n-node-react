import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 15px;
`;

const StyledButton = styled.button`
  background-color: #eda415;
  color: white;
  padding: 10px;
  border-radius: 10px;
`;

function CrearMediosDeEnvio() {
  return (
    <StyledForm>
      <StyledInput type="text" placeholder="" />
      <StyledInput type="text" placeholder="" />
      <StyledInput type="text" placeholder="" />
      <StyledInput type="text" placeholder="" />
      <StyledButton>Registrarse</StyledButton>
    </StyledForm>
  );
}

export default CrearMediosDeEnvio;