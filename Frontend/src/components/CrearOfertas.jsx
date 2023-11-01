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

function CrearOfertas() {
  const navigate = useNavigate() ;
  const cancelar = () => {
    navigate('/admin')
  }
  return (
    <>
    <StyledTitle>Adelante, agrega una nueva Oferta !!</StyledTitle>
    <StyledForm>
      <StyledInput type="text" placeholder="Nombre de la Oferta..." />
      <StyledInput type="text" placeholder="Ingresar archivo de imagen..." />
      <StyledInput type="text" placeholder="Precio de la oferta..." />
      <StyledInput type="text" placeholder="Mensaje motivador..." />
      <StyledButton>Guardar Cambios</StyledButton>
      <StyledButton onClick= {cancelar} >Cancelar</StyledButton>
    </StyledForm>
    </>
  );
}

export default CrearOfertas;