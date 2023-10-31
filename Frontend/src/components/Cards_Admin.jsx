import styled from 'styled-components';
import { FaThList, FaMoneyBillAlt, FaUserFriends, FaTruck, FaBoxOpen, FaTags } from 'react-icons/fa';
import CrearCategoria from './Regist_Categoria';
import CrearMediosDeEnvio from './Regist_Envios';
import CrearOferta from './Regist_Ofertas';
import CrearCliente from './Regist_Clientes';
import CrearMediosDePagos from './Regist_Pagos';
import CrearProducto from './Regist_Producto';
import { useNavigate } from 'react-router-dom';

const StyledCard = styled.div`
    background-color: #ffffff;
    width: 200px;
    height: 150px;
    margin: 15px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-itens: center;
        &:hover {
        box-shadow: 0px 0px 20px rgba(0,0,0,0.4);
        transform: translateY(-5px);
        transition: all .2s ease-in-out;
    }
`;

const StyledIcons = styled.div`
color: #eda415;
width: 40px;
height: 40px;
padding: 7px 12px;
margin: 30px 20px;
background-color: #e7e7e7;
border-radius: 50px;
font-size: 16px;
`;

const StyledTask = styled.p`
color: #eda415;
margin: 0 10px;
padding: 10px;
font-size: 16px
`;


const CardsAdmin = () => {
    const navigate = useNavigate(); 

    const goCrearCategoria = ( ) => {
        navigate('/admin/crearCategoria')
    }
    return (
        <>
            <StyledCard onClick={ goCrearCategoria }>
                <StyledIcons><FaThList/></StyledIcons>
                <StyledTask>Crear una Categoría</StyledTask>
            </StyledCard>
            <StyledCard onClick={() => { <CrearMediosDeEnvio/> }} >
                <StyledIcons><FaTruck/></StyledIcons>
                <StyledTask>Medios de Envío</StyledTask>
            </StyledCard>
            <StyledCard onClick={() => { <CrearOferta/> }} >
                <StyledIcons><FaBoxOpen/></StyledIcons>
                <StyledTask>Crear Ofertas</StyledTask>
            </StyledCard>
            <StyledCard onClick={() => { <CrearCliente/> }} >
                <StyledIcons><FaUserFriends/></StyledIcons>
                <StyledTask>Crear Clientes</StyledTask>
            </StyledCard>
            <StyledCard onClick={() => { <CrearMediosDePagos/> }} >
                <StyledIcons><FaMoneyBillAlt/></StyledIcons>
                <StyledTask>Medios de Pago</StyledTask>
            </StyledCard>
            <StyledCard onClick={() => { <CrearProducto/> }} >
                <StyledIcons><FaTags/></StyledIcons>
                <StyledTask>Crear Productos</StyledTask>
            </StyledCard>        
        </>        
    );
}

export default CardsAdmin;
