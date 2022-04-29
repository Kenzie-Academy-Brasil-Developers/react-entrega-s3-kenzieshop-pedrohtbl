import styled from "styled-components"

export const Li = styled.li`
    width: 250px;
    height: 390px;
    margin-right: 50px;
    margin-bottom: 50px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    figure{
        margin: 0;
        width: 100%;
        height: 200px;
    }
    
    img{
        margin-top: 10px;
        width: 200px;
        max-height: 200px;
    }

    div{
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        width: 90%;
    }

    div>p{
        font-weight: 500;
        text-align: start;
        height: 50px;
        margin: 0;
        margin-bottom: 10px;
    }

    div>span{
        font-weight: 700;
        font-size: 18px;
        text-align: start;
        margin: 0;
    }

    button{
        border: none;
        border-radius: 4px;
        background-color: #6CA6CD;
        color: #FFF;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90%;
        height: 40px;
        font-weight: 700;
        font-size: 16px;
        margin-bottom: 20px;
        cursor: pointer;
    }

    @media (max-width: 1024px){
        margin-right: 0;
    }
`