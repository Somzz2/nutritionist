import styled from "styled-components";

export const Container = styled.div`
    background-color: #ffc6c7;
    color: #33272a;
    padding: 20px;
    font-size: 15px;
    display: flex;
    justify-content: space-around;

    @media (max-width: 650px) {
        flex-direction: column;
        text-align: center;
        
        span {
            padding: 5px;
        }
    }
`