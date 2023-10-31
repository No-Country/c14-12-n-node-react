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

function CrearCliente() {
  return (
    <StyledForm>
      <StyledInput type="text" placeholder="Nombre" />
      <StyledInput type="text" placeholder="Apellido" />
      <StyledInput type="email" placeholder="Correo electrónico" />
      <StyledInput type="text" placeholder="dirección" />
      <StyledButton>Registrarse</StyledButton>
    </StyledForm>
  );
}

export default CrearCliente;