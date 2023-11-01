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

function MediosDePago() {
  const navigate = useNavigate() ;
  const cancelar = () => {
    navigate('/admin')
  }
  return (
    <>
    <StyledTitle>Adelante, muestra a tus clientes las opciones de Pagos !!</StyledTitle>
    <StyledForm>
      <StyledInput type="text" placeholder="Tipo de Pago..." />
      <StyledInput type="text" placeholder="Montos permitidos..." />
      <StyledInput type="text" placeholder="Descuentos..." />
      <StyledInput type="text" placeholder="Observaciones..." />
      <StyledButton>Guardar Cambios</StyledButton>
      <StyledButton onClick= {cancelar} >Cancelar</StyledButton>
    </StyledForm>
    </>
  );
}

export default MediosDePago;