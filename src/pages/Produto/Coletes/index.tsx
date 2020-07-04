import React from 'react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import PageTitle from '../../../components/PageTitle';
import SemiFooter from '../../../components/SemiFooter';
import Line from '../../../components/Line';

import imgColetes from '../../../assets/Produtos/img-coletes.png';

import imgCamisa1 from '../../../assets/Produtos/img-coletes-1.png';
import imgCamisa2 from '../../../assets/Produtos/img-coletes-2.png';

import {
    Content,
    Text,
    Bloco
} from './styles';
import { Link } from 'react-router-dom';

const ProdutoColetes: React.FC = () => {
    return (
        <>
            <Header/>

            <PageTitle>COLETES PERSONALIZADOS</PageTitle>

            <Content>
                <div>
                    <p>
                        Os coletes são peças que frequentam vários espaços de
                        trabalho e eventos, como por exemplo: agências
                        bancárias, construção civil, testas, atividades
                        físicas e afins.
                    </p>

                    <p>
                        Por ser de uso prático e, até obrigatório, em algumas
                        funções, há opção de modelos mais encorpados,
                        que podem ajudar os profissionais a guardarem
                        objetos úteis enquanto desempenham o trabalho.
                    </p>

                    <Link to="/Fale-Conosco">ORÇAMENTO</Link>
                </div>
                <img src={imgColetes} alt="Coletes"/>
            </Content>

            <Line/>

            <Text>
                Pensar na segurança do trabalho é garantir à empresa
                crescimento, ética e credibilidade no mercado. Valorizar a
                integridade física de trabalhadores é também cuidar da
                imagem e do desenvolvimento sadio da sua empresa.
            </Text>

            <Bloco>
                <div>
                    <div>
                        <img src={imgCamisa1} alt="Colete"/>
                    </div>
                    <div>
                        <img src={imgCamisa2} alt="Colete"/>
                    </div>
                </div>
            </Bloco>
            <SemiFooter/>
            <Footer/>
        </>
    );
};

export default ProdutoColetes;
