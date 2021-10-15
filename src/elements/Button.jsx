import styled, {css} from "styled-components";

const Button = styled.a`
    display: inline-block;
    margin: 1rem;
    padding: 15px 30px;
    color: #2196f3;
    border: 2px solid #2196f3;
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 1.5rem;
    transition: 0.3s;
    cursor: pointer;

    &:hover{
        transform: scale(1.1);
        color: #255784;
        background: #2196f3;
        box-shadow: 0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3;
    }

    ${props => props.green && css`
        color: #00ff73;
        border: 2px solid #00ff73;

        &:hover{
            color: #00853c;
            background: #00ff73;
            box-shadow: 0 0 10px #00ff73, 0 0 40px #00ff73, 0 0 80px #00ff73;
        }
    `}
`;

export default Button;