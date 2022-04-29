import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 60%;
    justify-content: space-between;
    margin-top: 100px;

    section{
        width: 25%;
        background-color: #FFF;
        height: 250px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    section>p ,span{
        font-weight: 600;
    }

    section h3{
        width: 100%;
        height: 30px;
    }


    p{
        width: 100%;
        margin: 0;
        display: flex;
        justify-content: space-around;
    }

    section>button{
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
        cursor: pointer;
        margin-bottom: 20px;
    }

    @media (max-width: 1024px){
        flex-direction: column;
        width: 90%;
        align-items: center;

        section{
            width: 60%;
        }
    }
`

export const DivTitulo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding-left: 30px;
    padding-right: 30px;
    border: 1px solid #F5F5DC;
    background-color: #FFF;
    border-bottom: none;

    p{
        font-weight: 700;
        width: 100px;
    }

    @media (max-width: 1024px){
        span{
            display: none;
        }
        p{
            width: 100%;
        }
    }
`

export const CartUl = styled.ul`
    width: 70%;
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: #FFF;
    margin-bottom: 50px;

    li{
        box-sizing: border-box;
        justify-content: space-between;
        display: flex;
        width: 100%;
        height: 350px;
        border: 1px solid #F5F5DC;
        align-items: center;
        padding-right: 10px;
        height: 220px;
    }

    button{
        border: none;
        border-radius: 100%;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 20px;
        cursor: pointer;
    }

    li h1{
        display: flex;
        width: 100%;
        justify-content: center;
    }

    span{
        width: 100px;
    }

    p,span{
        font-weight: 700;
    }

    figure{
        margin:0;
    }

    li img{
        width: 200px;
        max-height: 200px;
    }

    @media (max-width: 1024px){
        width: 100%;

        li{
            flex-direction: column;
            height: 230px;
            padding-top: 10px;
            padding-bottom: 10px;
            box-sizing: border-box;
        }
        li img{
            width: 120px;
        }
        p,span{
            font-size: 14px;
        }
    }

`