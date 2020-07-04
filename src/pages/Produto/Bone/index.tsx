import React from 'react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import PageTitle from '../../../components/PageTitle';
import SemiFooter from '../../../components/SemiFooter';
import Line from '../../../components/Line';

import imgBone from '../../../assets/Produtos/img-bone.png';

import {
    Content,
    Text
} from './styles';
import { Link } from 'react-router-dom';

const ProdutoBone: React.FC = () => {
    return (
        <>
            <Header/>

            <PageTitle>BONÉS PERSONALIZADOS</PageTitle>

            <Content>
                <div>
                    <p>
                        O boné pode ser usado como acessório de moda,
                        proteção contra o sol, além de ser uma das principais 
                        opção de brinde. É uma das peças mais usadas para
                        fazer com que o cliente lembre da sua marca por ser
                        uma peça fácil de incorporar no dia a dia e útil ao
                        mesmo tempo.
                    </p>

                    <p>
                        O boné é uma opção econômica, pois, além de ser
                        unissex, possui opção de regulagem de tamanhos
                        para atender à todos os clientes.
                    </p>

                    <Link to="/Fale-Conosco">ORÇAMENTO</Link>
                </div>
                <img src={imgBone} alt="Boné"/>
            </Content>

            <Line/>

            <Text>
                Na CS7, além dos tradicionais bonês, são produzidos outros
                acessórios que funcionam como brindes e, que em algumas
                funções, são consideradas equipamentos de proteção
                individual (EPI), como por exemplo o chapéu, as viseiras,
                caps e muitos outros modelos.
            </Text>
            <SemiFooter/>
            <Footer/>
        </>
    );
};

export default ProdutoBone;
