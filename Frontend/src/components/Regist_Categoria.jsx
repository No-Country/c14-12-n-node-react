import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const StyledInput = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 15px;
`;

const StyledButton = styled.button`
  background-color: #eda415;
;
  color: white;
  padding: 10px;
  border-radius: 10px;
`;

function CrearCategoria() {
  const navigate = useNavigate() ;
  const cancelar = () => {
    navigate('/admin')
  }

  return (
    <StyledForm>
      <StyledInput type="text" placeholder="Nombre de la Categoría" />
      <StyledInput type="text" placeholder="" />
      <StyledInput type="text" placeholder="" />
      <StyledInput type="text" placeholder="" />
      <StyledButton>Guardar</StyledButton>
      <StyledButton onClick= {cancelar} >Cancelar</StyledButton>
    </StyledForm>
  );
}

export default CrearCategoria;