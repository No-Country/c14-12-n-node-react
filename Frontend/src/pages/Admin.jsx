// import HeaderAdministrador from "../components/Header_Admin";
import MyPanel from "../components/Panel_Admin";
import styled from "styled-components"



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
`;

const StyledSubTitle = styled.h3`
color: black;
margin-top: 3rem;
`;


const Admin = () => {
  return (
    <>
    {/* <HeaderAdministrador/> */}
    <StyledContainerTitle>
    <StyledTitle>Hola Marlui !!</StyledTitle>
    <StyledSubTitle>Todas las tareas que necesitas realizar, están acá:</StyledSubTitle>
    </StyledContainerTitle>
    <MyPanel/>      
    </>
  );
}

export default Admin;
