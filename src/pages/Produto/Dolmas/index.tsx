import React from 'react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import PageTitle from '../../../components/PageTitle';
import SemiFooter from '../../../components/SemiFooter';
import Line from '../../../components/Line';

import imgDolma from '../../../assets/Produtos/img-dolma.png';

import {
    Content,
    Text
} from './styles';
import { Link } from 'react-router-dom';

const ProdutoDolma: React.FC = () => {
    return (
        <>
            <Header/>

            <PageTitle>DÓLMÃS PERSONALIZADAS</PageTitle>

            <Content>
                <div>
                    <p>
                        As Dólmãs são o uniforme oficial dos chefs de cozinha
                        profissionais. Elas também são chamadas de jaqueta,
                        gambuza ou fardamento de chef. 
                    </p>

                    <p>
                        Por trás do design do dólmã, tem muito mais do que
                        você imagina. O dólmã é muito mais que um uniforme
                        sofisticado, é um equipamento de proteção contra o
                        fogo e o calor existentes na cozinha, mas, fino o
                        suficiente para que a pele respire.
                    </p>

                    <Link to="/Fale-Conosco">ORÇAMENTO</Link>
                </div>
                <img src={imgDolma} alt="Dólmã"/>
            </Content>

            <Line/>

            <Text>
                A Dólmã não é um uniforme qualquer. A roupa de chef de
                cozinha tem o papel de proteger o corpo dos possíveis
                acidentes de uma cozinha, isolando o contato de alimentos
                quentes com a pele para proteger de queimaduras.
            </Text>
            <SemiFooter/>
            <Footer/>
        </>
    );
};

export default ProdutoDolma;
