
import styled from "styled-components";
import { useState } from "react";
import { FaBars, FaHome, FaDollarSign, FaBoxOpen, FaUserFriends,FaCog  } from 'react-icons/fa';


const StyledNavbar = styled.div`
  display: flex;
  flex-direction: column;
  text-aling: left;
  align-items: center;
`;

const StyledBoton = styled.button`
  margin-left: 50px;
  top: 80px;
  padding: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #fff; 
`;



const StyledUl = styled.ul`
position: fixed;
top: 100px;
left: 10px;
bottom: 0;
background-color: #ede9; 
width:300px;
heigth: calc(100% - 40px);
display: flex;
flex-direction: column;
text-align: left;
`;

const StyledLi = styled.li`
display: flex;
flex-direction: row;
text-aling: center;
aling-itens: center;
margin-top: 40px;
width:100%;
cursor: pointer;
&:hover {
    background-color: #905994;    
} 
`;

const StyledSpan = styled.span`
margin-left: 30px;
`;

const StyledH3 = styled.h3`
margin-left: 30px;
padding-top: 2rem;
color: black;
`;

const StyledIcon = styled.i`
margin-left: 50px;
padding-top: 2rem;
`;



const NavbarAdministrando = () => { 

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  }
  return (
  <StyledNavbar>
    <StyledBoton onClick={handleClick}>
      <FaBars />
    </StyledBoton>    
      {open && (
        <StyledUl>
          <StyledLi><StyledIcon><FaHome/></StyledIcon><StyledSpan/><StyledH3>Inicio</StyledH3></StyledLi>         
          <StyledLi><StyledIcon><FaDollarSign/></StyledIcon><StyledSpan/><StyledH3>Ventas</StyledH3></StyledLi>          
          <StyledLi><StyledIcon><FaBoxOpen/></StyledIcon><StyledSpan/><StyledH3>Productos</StyledH3></StyledLi>
          <StyledLi><StyledIcon><FaUserFriends/></StyledIcon><StyledSpan/><StyledH3>Clientes</StyledH3></StyledLi>
          <StyledLi><StyledIcon><FaCog/></StyledIcon><StyledSpan/><StyledH3>Configuración</StyledH3></StyledLi>
        </StyledUl>
      )};
  </StyledNavbar>
    
  );
};


export default NavbarAdministrando;

