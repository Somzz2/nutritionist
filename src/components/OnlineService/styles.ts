import styled from "styled-components";

export const Body = styled.div`
    background-color: #fffffe;
    

`

export const Container = styled.div`
    max-width: 600px;
    margin: auto;
    
    align-items: center;
    padding: 30px;
   
    color: #594a4e;

    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 15%;
        background-color: #faeee7;
        width: 500px;
        margin: auto;
        padding: 30px;
        box-shadow: 0 0 20px black;

        @media (max-width: 700px) {
            width: 80%;

            h1 {
                font-size: 25px;
                text-align: center;
            }
        }

    h1 {
       color: #33272a;
    }

    li {
        margin: 10px;
    }

}
    

`