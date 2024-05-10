import styled from 'styled-components';

export const HeaderArea = styled.div`
background-color:#FFF;
height:70px;
border-bottom: 1px solid #CCC;

.container {
    max-width: 1000px;
    margin: auto;
    display: flex;   
}

a{
    text-decoration: none;
}

.logo {
    flex: 1;
    display:flex;
    align-itens: center;
    margin-top: 15px;

    .logo-1,
    .logo-2,
    .logo-3 {
        font-size: 29px;
        font-weight:bold;
    }
        .logo-1 { color:#FF0000; }
        .logo-2 { color:#00FF00; }
        .logo-3 { color:#0000FF; }
    }
}

nav{
    padding-top: 10px;
    padding-botton: 10px;
    margin-top: 15px;
    
    ul, li{
        margin: 0;
        padding: 0;
        list-style: none;
    }

    ul{
        display: flex;
        align-itens: center;
        heigth: 40px;
    }

    li{
        margin-left: 20px;
        margin-right: 20px;

        a, button{
            border:0;
            background:none;
            color:#000;
            font-size: 15px;
            text-decoration: none;
            font-weight: 500;
            cursor: pointer;
            outline:0;

            &:hover {
                color: #999;
            }

            &.button {
                background-color: #FF8100;
                border-radius: 4px;
                color: white;
                padding: 7px 15px ;
            }

            &.button:hover{
                background-color: #E57706;
            }
        }
    }

    @media (max-width:600px){
        &{
            height: auto;
        }
        .container{
            flex-direction:column;
        }
        .logo{
            justify:center;
            margin:20px 0;
        }
        nav ul{
            flex-direcion:column;
            height:auto;
        }

        nav li{
            margin:10px 20px;
        }
    }
}
`;



