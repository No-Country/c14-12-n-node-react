import styled from 'styled-components';

const StyledMenu = styled.nav`
  position: absolute;
  width: 240px;
  height: 88%;
  margin-left: -195px;
  margin-top:10px;
  margin-bottom: 160px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
  left: 10px;
  &:hover {
  transform:translateX(200px);
  transition: transform 0.3s ease-in-out;
  } 
`;

const StyledUpMenu = styled.h3`
color: #633974;
margin-left: 189px;
margin-top: 0;
margin-bottom: 0;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-top: 50px;
  padding: 0;
`;

const StyledItem = styled.li`
  color: rgba (230, 230, 230, .9);
  padding: 20px 0;
  border-bottom: 1px solid rgba (100, 100, 100, .3);
  text-align: center;
  cursor: pointer;

  &:hover {
    color: #ffffff;
    background:#633974;;
    transform: scale(1.1);
    transition: all .2s ease-in-out;
  }
`;

function MenuAdmin() {
  return (
    <StyledMenu>
      <StyledUpMenu>M</StyledUpMenu>
      <StyledUpMenu>e</StyledUpMenu>
      <StyledUpMenu>n</StyledUpMenu>
      <StyledUpMenu>ú</StyledUpMenu>
      <StyledList>
        <StyledItem>Inicio</StyledItem>
        <StyledItem>Perfil</StyledItem>
        <StyledItem>Pedidos</StyledItem>
        <StyledItem>Ayuda</StyledItem>
        <StyledItem>Salir</StyledItem>
      </StyledList>
    </StyledMenu>   
  );
}

export default MenuAdmin; 