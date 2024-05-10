import styled from 'styled-components';

export const Item = styled.div`
a{
    display:block;
    border: 1px solid #CCC;
    margin:10px;
    text-decoration:none;
    padding: 10px;
    border-radius:5px;
    color:#000;
    background-color:#fff;
    transition:all ease .2s;

    &:hover{
        background-color:#EEE;
        border solid 1px #CCC;
    }

    .ItemImage img{
        width:100%;
        border-radius:5px;
    
    }
    
    .ItemName{
        font-weight:bold;
    }
    


}
`;