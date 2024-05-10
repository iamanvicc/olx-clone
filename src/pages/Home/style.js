import styled from 'styled-components';

export const SearchArea = styled.div`
    background-color:#DDD;
    border-bottom: 1px solid #CCC;
    padding: 20px 0px;


.searchBox{
    background-color:#9BB83C;
    padding:20px 15px;
    border-radius:5px;
    box-shadow:1px 1px 1px 0.3 rgba(0,0,0,0.2);
    display:flex;

    form{
        flex:1;
        display:flex;
         
        input, select{
            heigth:40px;
            border:0;
            border-radius:5px;
            outline:0;
            font-size:15px;
            color:#000;
            margin-rigth:20px;
        }
    }

    @media (max-width:600px){
        .searchBox form{
            flex-direction:column;

            input{
                padding:10px;
                margin-right:0;
                maring-bottom: 10px; 
            }

            select{
                width:100%;
                margin-bottom:10px;
            }
        }

        .categoryList .categoryItem{
            width: 50%;
            padding: 10px;
        }
    }
}


.categoryList {
    display:flex;
    flex-wrap:wrap;
    margin-top:20px;

    .categoryItem{
        width:25%;
        display:fex;
        align-itens:center;
        color:#000;
        text-decoration:none;
        heigth:50px;
        margin-bottom:10px;

        img{
            width:45px;
            heigth:45px;
            margin-rigth:10px;
        }
    }
}

`;

export const PageArea = styled.div`
    h2{
        font-size:20px;
    }
    .list{
        display:flex;
        flex-wrap:wrap;

        .adItem{
            width:25%;
        }
    }
    .seeAllLink{
        color:#000;
        text-decoration:none;
        font-weight:bold;
        display:inline-block;
        margin-top:10px;
    }

    @media (max-width:600px){

        &{
            margin: 10px;
        }

        .list .adItem{
         width: 50%;
        }
    }
`;