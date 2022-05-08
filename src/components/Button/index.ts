import styled from "styled-components";

export const Button = styled.button`
    max-width: 300px;
    width: 200px;
    border-radius: 10px;
    padding: 10px;
    border: 2px solid #555;
    background-color: #ff8ba7;
    color: #33272a;
    font-size: 15px;
    cursor: pointer;
    margin: 0 5px;

    &:hover {
        background-color: #fff;
        border: 2px solid #333;
        color: #333;
    }
`