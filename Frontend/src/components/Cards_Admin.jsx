import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;


const StyledCard = styled.div`
    background-color: #ffffff;
    width: 200px;
    height: 150px;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 20px rgba(0,0,0,0.4);
        transform: translateY(-5px);
        transition: all .2s ease-in-out;
    }
`;



const CardsAdmin = () => {
    return (
        <StyledContainer>
            <StyledCard/>
        </StyledContainer>
        
    );
}

export default CardsAdmin;
