import styled from 'styled-components';
import { FaThList, FaMoneyBillAlt, FaUserFriends, FaTruck, FaBoxOpen, FaTags } from 'react-icons/fa';
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
        <>
            <StyledCard onClick={ goCrearProducto }>
                <StyledIcons><FaThList/></StyledIcons>
                <StyledTask>Crear Producto</StyledTask>
            </StyledCard>
            <StyledCard onClick={ goCrearBanner} >
                <StyledIcons><FaBoxOpen/></StyledIcons>
                <StyledTask>Crear Banner</StyledTask>
            </StyledCard>
            <StyledCard onClick={ goEliminarClientes} >
                <StyledIcons><FaUserFriends/></StyledIcons>
                <StyledTask>Eliminar Clientes</StyledTask>
            </StyledCard>
            <StyledCard onClick={ goEnvios } >
                <StyledIcons><FaTruck/></StyledIcons>
                <StyledTask>Envíos</StyledTask>
            </StyledCard>
            <StyledCard onClick={ goCrearOfertas } >
                <StyledIcons><FaMoneyBillAlt/></StyledIcons>
                <StyledTask>Crear Ofertas</StyledTask>
            </StyledCard>
            <StyledCard onClick={ goMediosDePago } >
                <StyledIcons><FaTags/></StyledIcons>
                <StyledTask>Medios de Pagos</StyledTask>
            </StyledCard>        
        </>        
    );
}

export default CardsAdmin;
