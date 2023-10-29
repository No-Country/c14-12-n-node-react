import styled from 'styled-components';
import CardsAdmin from './Cards_Admin';



const Panel = styled.section`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr);
gap: 20px;
margin-left:320px;
padding-bottom: 60px;
width: 65rem;
heigth: 100%;

`;


const MyPanel = () => {
    return (
        <Panel>
            <CardsAdmin/>
            <CardsAdmin/>            
            <CardsAdmin/>            
            <CardsAdmin/>            
            <CardsAdmin/>            
            <CardsAdmin/>         
        </Panel>
);
}

export default MyPanel;

