import React from 'react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import PageTitle from '../../../components/PageTitle';
import SemiFooter from '../../../components/SemiFooter';
import Line from '../../../components/Line';

import imgUniformeEsportivo from '../../../assets/Produtos/img-uniformesEsportivos.png';

import {
    Content,
    Text,
    Bloco
} from './styles';
import { Link } from 'react-router-dom';

const ProdutoUniformesEsportivos: React.FC = () => {
    return (
        <>
            <Header/>

            <PageTitle>UNIFORMES ESPORTIVOS PERSONALIZADA</PageTitle>

            <Content>
                <div>
                    <p>
                        Seja dentro ou fora de quadra um uniforme esportivo
                        faz total diferença. Primeiro que, antes de qualquer
                        coisa, para participar de eventos esportivos oficiais
                        os jogadores não podem entrar em quadra sem um 
                        uniforme que representa a equipe.
                    </p>

                    <p>
                        E segundo, que: tem coisa mais legal do que uma
                        camisa estilosa pra andar por aí chamando atenção e
                        mostrando que faz parte do time? Faça agora mesmo o seu!
                    </p>

                    <Link to="/Fale-Conosco">ORÇAMENTO</Link>
                </div>
                <img src={imgUniformeEsportivo} alt="Uniforme Esportivo"/>
            </Content>

            <Line/>

            <Text>
                A importância do uniforme esportivo é a identificação das
                equipes e suas torcidas em jogos e eventos. Além de se
                destacar através de uma identidade visual única, cria
                senso de comunidade entre as pessoas que apoiam o time,
                fortalecendo sua marca.
            </Text>

            <Bloco/>

            <SemiFooter/>
            <Footer/>
        </>
    );
};

export default ProdutoUniformesEsportivos;
