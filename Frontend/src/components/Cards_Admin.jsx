import styled from 'styled-components';
import { FaThList, FaMoneyBillAlt, FaUserFriends, FaTruck, FaBoxOpen, FaTags } from 'react-icons/fa';


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
    return (
        <>
            <StyledCard><StyledIcons><FaThList/></StyledIcons><StyledTask>Crear una Categoría</StyledTask></StyledCard>
            <StyledCard><StyledIcons><FaTruck/></StyledIcons><StyledTask>Medios de Envío</StyledTask></StyledCard>
            <StyledCard><StyledIcons><FaBoxOpen/></StyledIcons><StyledTask>Crear Ofertas</StyledTask></StyledCard>
            <StyledCard><StyledIcons><FaUserFriends/></StyledIcons><StyledTask>Crear Clientes</StyledTask></StyledCard>
            <StyledCard><StyledIcons><FaMoneyBillAlt/></StyledIcons><StyledTask>Medios de Pago</StyledTask></StyledCard>
            <StyledCard><StyledIcons><FaTags/></StyledIcons><StyledTask>Crear Productos</StyledTask></StyledCard>        
        </>        
    );
}

export default CardsAdmin;
