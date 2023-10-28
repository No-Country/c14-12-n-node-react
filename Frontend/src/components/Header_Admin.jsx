import { useState } from "react";
import { styled } from "styled-components";
import NavbarAdministrando  from "./Menu_Admin";

const StyledHeader = styled.header`
display: flex;
justify-content: space-between;
align-items: center; 
width: 100%;
height: 100px;
background-color: #633974;
z-index: 2;
`;

const StyledDiv = styled.div`
display: flex;
flex-direction: row;
aling-itens: center;
justify-content: space-between;
`;

const StyledImg = styled.img`
width: 70px;
height: 80px;
`;


const StyledContainerInput = styled.div`
display: flex;
align-items: center;
width: 400px;
height: 40px;
background-color: #FFFFFF;
border: 1px solid #CCCCCC;
border-radius: 15px;
`;

const StyledInput = styled.input`
flex-grow: 1;
width: 100%;
height: 100%;
padding: 0 10px;
border: none;
border-top: 15px;
border-bottom-left-radius: 15px;
border-top-left-radius: 15px;
`;

const StyledButton = styled.button`
width: 110px;
height: 100%;
background-color: #eda415;
color: #FFFFFF;
border: none;
border-radius: 15px;
`;

const StyledPerfil = styled.img`
background-color: #eda415;
width: 80px;
height: 80px;
border-radius: 50%;
border: 2px solid #fff;
margin-right: 50px;
`;

const HeaderAdministrador = () => {

    const [hidePlaceholder, setHidePlaceholder] = useState(false);
    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setHidePlaceholder(inputValue.length > 0);
    };

    return (
    
        <StyledHeader>        
            <NavbarAdministrando/>
            <StyledDiv>
                <StyledImg
                    src="/src/assets/Logo_Marlui-removebg-preview 1.png"                        
                    alt="Logo"
                />
            </StyledDiv>
            <StyledContainerInput>
                <StyledInput type="text"  placeholder={
                hidePlaceholder ? "" : "Buscar..."
                }
                onChange={handleInputChange}
                />
                <StyledButton>🔍</StyledButton>
            </StyledContainerInput>
            <StyledPerfil/>              
        </StyledHeader>
    
    );
};


export default HeaderAdministrador;
