import styled from "styled-components";
import ImgBanner from '../img/banner.png'
import ImgJhonathas from '../img/jhonathas.png'
import ImgVinicius from '../img/vinicius.jpg'
import ImgGabriel from '../img/gabriel.jpg'
import ImgNathalia from '../img/nathalia.png'

// *-- Estilização da Landing Page
export const SectionHeader = styled.header`
    background-color: transparent;
    padding: 15px 2%;
    /* position: fixed; */
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid white;
    }
    .logo {
        font-size: 30px;
        align-items: center;
        font-weight: 500;
        color: #fff;
        padding: 15px 0;
    }
    nav.menu {
        padding: 15px 0;
        ul.menu {
            display: flex;
            list-style: none;
            align-items: center;
            li {
                margin-left: 50px;
                text-align: center;
                /* width: 103px; */
                position: relative;
                span {
                    background-color: red;
                    padding: 10px 20px;
                    border-radius: 50px;
                    background: rgb(2, 0, 36);
                    background: linear-gradient(41deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);
                }
                a {
                    color: white;
                    text-decoration: none;
                    transition: 0.3s;
                    font-weight: bold;
                }
            }
        }
    }
`;

export const SectionBanner = styled.section`
    width: 100%;
    height: 550px;
    position: relative;
    top: 0;
    left: 0;
    z-index: 2;
    overflow: hidden;
    background-color: black;
    .img {
        width: 100%;
        height: 100%;
        background-image: url(${ImgBanner});
        background-size: 70%;
        background-position: left top;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
    .texto {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 2%;
        width: 700px;
        z-index: 3;
        color: white;
        h1 {
            text-transform: uppercase;
            font-weight: bold;
            font-size: 3em;
            span:first-of-type {
                font-size: 1.5em;
                display: block;
            }
            span:last-of-type {
                color: var(--roxo);
            }
        }
        p {
            font-size: 1.3em;
            padding-top: 5px;
        }
    }
`;

export const SectionSobre = styled.section`
    background-color: black;
    h2.title {
        color: white;
    }
    p {
        font-size: 18px;
        padding: 7px;
        color: white;
    }
    .cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 30px;
    }
`;

export const DivParticipantes = styled.div`
    .flex {
    display: flex;
    align-items: flex-start;
    }
    width: 40%;
    padding: 6px;
    background-color: var(--roxo);
    margin: 13px 0;
    -webkit-box-shadow: 5px 5px 3px 1px rgba(92, 92, 92, 0.71);
    box-shadow: 5px 5px 3px 1px rgba(92, 92, 92, 0.71);
    color: rgb(33, 33, 33);
    .imgPartipante {
        width: 100px;
        height: 100px;
        border-radius: calc(100px/2);
        /* background-image: url('../img/vinicius.jpg'); */
        background-position: center;
        background-size: 100%;
        background-repeat: no-repeat;
        border: 1px solid #ccc;
    }
    .infos {
        margin-left: 10px;
    }
    .imgPartipante.jhonathas {
        background-image: url(${ImgJhonathas});
        background-size: 100%;
    }
    .imgPartipante.vinicius {
        background-image: url(${ImgVinicius});
        background-size: 100%;
        background-position: 50% 30%;
    }
    .imgPartipante.gabriel {
        background-image: url(${ImgGabriel});
        background-size: 100%;
        background-position: 50% 50%;
    }
    .imgPartipante.nathalia {
        background-image: url(${ImgNathalia});
        background-size: 100%;
        background-position: 50% 50%;
    }
`;

export const SectionVantagens = styled.section`
    margin-bottom: 20px;
    div.clear {
        clear: both;
    }
`;

export const DivBoxes = styled.div`
    div.box {
        background-color: white;
        padding: 8px;
        margin-bottom: 10px;
        width: 60%;
    }

    div.box.left {
        float: left;
        border-radius: 0 20px 20px 0;
    }
    div.box.right {
        float: right;
        border-radius: 20px 0 0 20px;
        text-align: right;
    }
`;

export const SectionFooter = styled.section`
    width: 100%;
    background-color: rgb(75, 75, 75);
    padding: 15px;
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .patrocinadores {
        h3 {
            margin-bottom: 10px;
        }
        .imgs {
            display: flex;
            img {
                height: 50px;
                margin-right: 10px;
            }
        }
    }
`;

// *-- Estilização da tela de Login

export const SectionLogin = styled.section`
    display: flex;
    height: 100vh;
    .foto {
        width: 70%;
        height: 100%;
        /* background-color: red; */
        padding: 15px;
    }
    .form {
        width: 30%;
        height: 100%;
        background-color: black;
        background-attachment: fixed;
        padding: 15px;
        form {
            width: 100%;
            max-width: 300px;
            position: relative;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            a {
                font-size: 0.8em;
                color: blue;
            }
        }
    }
`;

export const DivinputSingle = styled.div`
    width: 100%;
    margin-top: 35px;
    position: relative;
    :first-of-type {
    margin-top: 0;
    }
    :last-of-type {
        margin-bottom: 10px
    }
    label {
        font-size: 16px;
        position: absolute;
        left: 5px;
        bottom: 6px;
        color: gray;
        cursor: text;
        transition: 0.5s ease-in-out;
    }
    .inputText {
        width: 100%;
        padding: 5px;
        color: gray;
        border: 0;
        border-bottom: 2px solid gray;
        outline: 0;
        font-size: 16px;
    }
    .inputText.bgBlack {
        background-color: black;
    }
    .inputText.bgWhite {
        background-color: white;
    }
    .inputText:focus,
    .inputText:valid {
        border-bottom: 2px solid var(--roxo);
    }
    .inputText:focus~label,
    .inputText:valid~label {
        transform: translateY(-27px);
        font-size: 14px;
        color: var(--roxo);
        left: 0;
        font-weight: bold;
    }

`;

export const DivCheckBoxSingle = styled.div`
    margin: 20px 0 0 0;
    label {
        padding-left: 7px;
        font-size: 0.9em;
    }
`;

export const DivSubmit = styled.div`
    input[type='submit'] {
        margin-top: 15px;
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        border-radius: 20px;
        font-weight: bold;
        background-color: var(--roxo);
        cursor: pointer;
        text-transform: uppercase;
        border: 1px solid black;
    }
`;

export const DivtextAreaSingle = styled.div`
    margin-top: 40px;
    width: 100%;
    textarea {
        width: 100%;
        height: 100%;
        resize: vertical;
        width: 100%;
        height: 150px;
        border: 2px solid gray;
        padding: 7px;
        outline: 0;
        font-size: 16px;
        :focus {
            border: 2px solid var(--roxo);
        }
    }
`;

export const SectionAdministracao = styled.section`
    padding: 20px 0;
    .box {
        width: 100%;
        padding: 13px;
        h3 {
            font-size: 1.3em;
            padding-left: 7px;
            position: relative;
            ::before {
                content: '';
                width: 3px;
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;
                background-color: var(--roxo);
            }
        }
        form {
            width: 100%;
            max-width: 500px;
            margin: 25px auto;
        }
    }
`;

export const SectionCandidato = styled.section`
    padding: 20px 0;
    .box {
        width: 100%;
        padding: 13px;
        h3 {
            font-size: 1.3em;
            padding-left: 7px;
            position: relative;
            ::before {
                content: '';
                width: 3px;
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;
                background-color: var(--roxo);
            }
        }
        form {
            width: 100%;
            max-width: 500px;
            margin: 25px auto;
        }
    }
`;

export const SectionBoasVindas = styled.section`
    section.vagas {
    display: flex;
    padding: 50px 0;
}
section.vagas .painelVagas .groupVagas .vaga button {
    padding: 10px;
    margin-top: 20px;
    border-radius: 10px;
    color: rgba(2, 0, 36, 1);
    background-color: rgb(82, 113, 255);
    
}
section.vagas .painelVagas .groupVagas .vaga button:hover {
    background-color: rgba(2, 0, 36, 1);
    color: #fff;
    
}
section.vagas .filtros {
    width: 30%;
    padding: 20px;
    border-right: 2px solid rgb(82, 113, 255);
}
section.vagas .filtros button {
    width: 100%;
    margin: 15px 0;
    padding: 7px 0;
    font-size: 20px;
    background-color: rgb(82, 113, 255);
    border-color: rgba(2, 0, 36, 1);
    cursor: pointer;
    transition: 0.3s;
}
section.vagas .filtros button:hover {
    background-color: rgba(2, 0, 36, 1);
    color: white;
}
section.vagas .filtros ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 15px 0;
    border-bottom: 1px dotted black;
}
section.vagas .filtros ul:last-of-type {
    border-bottom: 0;
}

section.vagas .filtros ul li:first-of-type {
    font-size: 19px;
    font-weight: bold;
    margin-bottom: 10px;
}

section.vagas .filtros ul li input {
    margin-right: 7px;
}
section.vagas .painelVagas {
    width: 70%;
    padding: 20px;
}
section.vagas .painelVagas .groupVagas .vaga {
    width: 100%;
    padding: 15px;
    border: 1px solid black;
    margin: 20px 0;
}
section.vagas .painelVagas .groupVagas .vaga h3 {
    color: rgb(82, 113, 255);
    margin-bottom: 10px;
}
section.vagas .painelVagas .groupVagas .vaga ul {
    margin-left: 45px;
}
`;


    
    

    


    



export const SectionRecrutador = styled.section`
    padding: 20px 0;
    .box {
        width: 100%;
        padding: 13px;
        h3 {
            font-size: 1.3em;
            padding-left: 7px;
            position: relative;
            ::before {
                content: '';
                width: 3px;
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;
                background-color: var(--roxo);
            }
        }
        form {
            width: 100%;
            max-width: 500px;
            margin: 25px auto;
        }
    }
`;

export const SectionMenu = styled.section`
    width: 175px;
    height: 100vh;
    overflow: auto;
    background-color: rgb(82, 113, 255);
    padding: 20px 0;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 1;
    ::-webkit-scrollbar {
        background-color: rgb(82, 113, 255);
        width: 10PX;
    }
    ::-webkit-scrollbar-button {
        display: none;
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgba(2, 0, 36, 1);
        border-radius: 20PX;
    }
    nav ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        li {
            width: 100%;            
            display: flex;
            :hover {
                background-color: rgb(10, 0, 201);
            }
            a {
                color: black;
                padding: 20px 0;
                text-decoration: none;
                width: 100%;
            }
            :hover a {
                text-decoration: underline;
                color: #ccc;
            }
        }
    }
`;

export const MainConteudo = styled.main`
    width: calc(100% - 175px);
    height: 100vh;
    float: left;
    overflow: auto;
    header {
        width: 100%;
        background-color: rgb(226, 226, 226);
        padding: 13px;
        position: relative;
        z-index: 2;
        nav {
            float: right;
            ul {
                list-style: none;
                display: flex;
                li {
                    margin: 0 15px;
                    a {
                        color: black;
                    }
                }
            }
        }
    }
    section.float {
        float: left;
    }
`;

export const SectionSistema = styled.section`
    .clear {
        clear: both;
    }
`;

export const SectionCadastro = styled.section`
    height: 100vh;
    background-color: black;
    background-size: 100%;
    background-attachment: fixed;
    form {
        width: 450px;
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        h2 {
            color: white;
            margin-bottom: 25px;
            font-size: 1.4em;
            span {
                color: var(--roxo);
            }
        }
    }
`;

export const SectionVagas = styled.section`
    margin: 25px 0;
    .flex {
        display: flex;
        flex-direction: column;
        gap: 20px 0;
    }
`;

export const DivVagaSingle = styled.div`
    background-color: black;
    border: 1px solid var(--roxo);
    width: 100;
    padding: 20px;
    h3.titulo {
        color: white;
        padding-bottom: 20px;
    }
    p {
        color: #ccc;
        b {
            color: white;
        }
        ul {
            padding-left: 25px;
        }
    }
    button {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        padding: 10px 20px;
        cursor: pointer;
        background-color: var(--roxo);
    }
`;