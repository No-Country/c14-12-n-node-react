import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledTitle = styled.h2`
margin: 50px 50px 30px 50px;
`;

const StyledForm = styled.form`

  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-bottom: 100px;
  `;

const StyledInput = styled.input`
  width: 500px;
  height: 100%;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 10px;
`;

const StyledButton = styled.button`
  width: 200px;
  background-color: #eda415;
  color: white;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  font-size: 16px;
  &:hover{
    background-color:#e65d0e;
  }
`;

function CrearBanner() {
  const navigate = useNavigate() ;
  const cancelar = () => {
    navigate('/admin')
  }
  return (
    <>
    <StyledTitle>Adelante, Crea tu nuevo Banner !!</StyledTitle>
    <StyledForm>
      <StyledInput type="text" placeholder="Nombre del Banner..." />
      <StyledInput type="text" placeholder="Ingresar archivo de imagen..." />
      <StyledInput type="text" placeholder="Titulo del Banner..." />
      <StyledInput type="text" placeholder="Escribir un mensaje a tus clientes..." />
      <StyledButton>Guardar Cambios</StyledButton>
      <StyledButton onClick= {cancelar} >Cancelar</StyledButton>
    </StyledForm>
    </>
  );
}

export default CrearBanner;