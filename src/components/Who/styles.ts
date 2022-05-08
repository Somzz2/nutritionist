import styled from "styled-components";

export const Container = styled.div `
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 100px;
    background-color: #fff;
    padding: 20px;
    border-radius: 10%;
    text-align: center;
    justify-content: space-around;
    align-items: center;

    h1 {
        width: 90%;
        padding: 5px;
        border-bottom: 1px solid #aaa;
        color: #33272a;
       
    
    }
    img {
        width: 300px;
        border-radius: 20px;
        box-shadow: 10px 5px 5px #666;

        @media (max-width: 700px) {
            width: 200px;
        }
    }

    .cont {
        max-width: 1200px;
        margin: auto;
        display: flex;
        
        
        
        justify-content: space-around;
        align-items: center;

        @media (max-width: 700px) {
            flex-direction: column;
            
        }
    }

`

export const About = styled.div`
    color: #594a4e;
    font-family: 'Open Sans', cursive;
    padding: 20px;
    width: 50%;
    background-color: #fffffe;
    border-radius: 10%;
    box-shadow: 0 0 20px black;
    
    @media (max-width: 700px) {
        width: 80%;
        margin-top: 30px;
        font-size: 15px;
        
    }

`