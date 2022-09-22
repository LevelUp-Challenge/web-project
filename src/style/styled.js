import styled from "styled-components";

export const Header = styled.header`
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
        background-image: url("../img/banner.png");
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
        background-image: url('../img/jhonathas.png');
        background-size: 100%;
    }
    .imgPartipante.vinicius {
        background-image: url('../img/vinicius.jpg');
        background-size: 100%;
        background-position: 50% 30%;
    }
    .imgPartipante.gabriel {
        background-image: url('../img/gabriel.jpg');
        background-size: 100%;
        background-position: 50% 50%;
    }
    .imgPartipante.nathalia {
        background-image: url('../img/nathalia.png');
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
`