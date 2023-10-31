import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

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
margin-left: 198px;
margin-top: 5px;
margin-bottom: 0;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-top: 60px;
  padding: 0;
`;

const StyledItem = styled.li`
  color: rgba (230, 230, 230, .9);
  padding: 25px 0;
  border-bottom: 1px solid rgba (100, 100, 100, .3);
  text-align: center;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    color: #ffffff;
    background:#633974;;
    transform: scale(1);
    transition: all .3s ease-in-out;
  }
`;

function MenuAdmin() {
  const navigate = useNavigate(); 

  const goCrearProducto = ( ) => {
      navigate('/admin/CrearProducto')
  }
  const goCrearBanner = ( ) => {
      navigate('/admin/CrearBanner')
  }
  const goEliminarClientes = ( ) => {
      navigate('/admin/EliminarClientes')
  }
  const goEnvios = ( ) => {
      navigate('/admin/Envios')
  }  
  const goCrearOfertas = ( ) => {
      navigate('/admin/CrearOfertas')
  }
  const goMediosDePago = ( ) => {
      navigate('/admin/MediosDePago')
  }
  return (
    <StyledMenu>
      <StyledUpMenu><FaBars/></StyledUpMenu>      
      <StyledList>
        <StyledItem onClick={ goCrearProducto } >Crear Producto</StyledItem>
        <StyledItem onClick={ goCrearBanner } >Crear Banner</StyledItem>
        <StyledItem onClick={ goEliminarClientes } >Eliminar Cliente</StyledItem>
        <StyledItem onClick={ goEnvios } >Envíos</StyledItem>
        <StyledItem onClick={ goCrearOfertas } >Crear Ofertas</StyledItem>
        <StyledItem onClick={ goMediosDePago } >Medios de pago</StyledItem>
      </StyledList>
    </StyledMenu>   
  );
}

export default MenuAdmin; 