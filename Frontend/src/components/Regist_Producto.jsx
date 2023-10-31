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

function CrearProducto() {
  return (
    <StyledForm>
      <StyledInput type="text" placeholder="Nombre del producto" />
      <StyledInput type="text" placeholder="Categoría del producto" />
      <StyledInput type="decimal" placeholder="Precio" />
      <StyledInput type="int" placeholder="stock" />
      <StyledButton>Guardar</StyledButton>
    </StyledForm>
  );
}

export default CrearProducto;