import React from 'react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import PageTitle from '../../../components/PageTitle';
import SemiFooter from '../../../components/SemiFooter';
import Line from '../../../components/Line';

import imgCamisas from '../../../assets/Produtos/img-camisas.png';
import imgCamisaCaixa from '../../../assets/Produtos/img-camisa-caixa.png';
import imgCamisaFenix from '../../../assets/Produtos/img-camisa-fenix.png';
import imgCamisaLev from '../../../assets/Produtos/img-camisa-lev.png';

import {
    Content,
    Text,
    Bloco
} from './styles';
import { Link } from 'react-router-dom';

const ProdutoCamisas: React.FC = () => {
    return (
        <>
            <Header/>

            <PageTitle>CAMISAS E CAMISETAS PERSONALIZADAS</PageTitle>

            <Content>
                <div>
                    <p>
                        Os uniformes proporcionam além do conforto, a escolha
                        de cores diferenciadas, praticidade, modelagens
                        específicas e mais práticidade.
                    </p>

                    <p>
                        Temos soluções completas para uma maior personalização
                        e necessidades específicas, verifique as nossas opções
                        de tecidos, malha e modelos e conte-nos sobre a sua
                        ideia.
                    </p>

                    <Link to="/Fale-Conosco">ORÇAMENTO</Link>
                </div>
                <img src={imgCamisas} alt="Camisas"/>
            </Content>

            <Line/>

            <Text>
                A CS7 oferece o melhor custo-benefício em uniformes para sua
                empresa, colocando à sua disposição, materiais e modelos
                que garantem conforto e durabilidade adequadas para cada
                função.
            </Text>

            <Bloco>
                <h2>
                    PEÇAS para empresas ou eventos!
                </h2>
                <h1>
                    VOCÊ ESCOLHE, A GENTE FAZ
                </h1>
                <div>
                    <div>
                        <img src={imgCamisaCaixa} alt="Camisa CAIXA"/>
                        <h1>CAMISETA</h1>
                    </div>
                    <div>
                        <img src={imgCamisaFenix} alt="Camisa Fenix"/>
                        <h1>POLO</h1>
                    </div>
                    <div>
                        <img src={imgCamisaLev} alt="Camisa Lev"/>
                        <h1>SOCIAL</h1>
                    </div>
                </div>
            </Bloco>
            <SemiFooter/>
            <Footer/>
        </>
    );
};

export default ProdutoCamisas;
