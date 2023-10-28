import styled from 'styled-components';
import CardWithIcon from './Cards_Admin';



const Panel = styled.section`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr);
gap: 20px;
margin-left:320px;
width: 65rem;
heigth: 100%;
background-color: ;
`;


const MyPanel = () => {
    return (
        <Panel>
            <CardWithIcon></CardWithIcon>
            <CardWithIcon></CardWithIcon>
            <CardWithIcon></CardWithIcon>
            <CardWithIcon></CardWithIcon>
            <CardWithIcon></CardWithIcon>
            <CardWithIcon></CardWithIcon>
        </Panel>
);
}

export default MyPanel;

