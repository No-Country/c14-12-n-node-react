// import FondoAdmin from "../components/Fondo_Admin";
import MenuAdmin from "../components/Menu_Admin";
import MyPanel from "../components/Panel_Admin";
import styled from "styled-components"

const StyledFondo = styled.div`
background-color: #e7e7e7;
`;

const StyledContainerTitle = styled.div`
display: flex;
flex-direction: column;
text-aling: center;
aling-itens: center;
padding: 3rem;
margin-top: 3rem;
margin-left: 30rem;
width:100rem;
`;

const StyledTitle = styled.h1`
color: black;
display: flex;
justify-content: left;
padding-top: 30px;
`;

const StyledSubTitle = styled.h3`
color: black;
margin-top: 10px;
margin-bottom: 0;
`;


const Admin = () => {
  return (
  <StyledFondo>
    <MenuAdmin/>
    <StyledContainerTitle>
    <StyledTitle>Hola Marlui !!</StyledTitle>
    <StyledSubTitle>Todas las tareas que necesitas realizar, están acá:</StyledSubTitle>
    </StyledContainerTitle>
    <MyPanel/>      
  </StyledFondo> 
  );
}

export default Admin;
