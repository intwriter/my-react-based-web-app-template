import styled from 'styled-components';

const StyledExampleButtonComponent = styled.button`
    background-color: ${props => props.theme.buttonBackgroundColor};
    padding: 5px;
    font-weight: bold;
`;

export default StyledExampleButtonComponent;