import React from 'react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import PageTitle from '../../../components/PageTitle';
import SemiFooter from '../../../components/SemiFooter';
import Line from '../../../components/Line';

import imgAvental from '../../../assets/Produtos/img-avental.png';

import {
    Content,
    Text
} from './styles';
import { Link } from 'react-router-dom';

const ProdutoAvental: React.FC = () => {
    return (
        <>
            <Header/>

            <PageTitle>AVENTAIS PERSONALIZADOS</PageTitle>

            <Content>
                <div>
                    <p>
                        Os Aventais personalizados podem ser a alternativa
                        certa para empresas que desejam padronizar seus
                        funcionários para que a identificação por parte dos
                        clientes e consumidores seja feita de modo mais
                        simples e fácil.
                    </p>

                    <p>
                        A personalização pode ser realizada de acordo com as
                        exigências da empresa, ou seja, pode trazer consigo
                        informações sobre a própria empresa como seu nome,
                        logotipo e informações para contato, como também
                        pode contar com o nome do funcionário e a função
                        que este possui.
                    </p>

                    <Link to="/Fale-Conosco">ORÇAMENTO</Link>
                </div>
                <img src={imgAvental} alt="Avental"/>
            </Content>

            <Line/>

            <Text>
                Com maior variedade de modelos, estampas e até mesmo
                materiais, o avental é usado em diversos setores
                trabalhistas, como o mecânico, o da beleza e estética,
                recreativo e, é claro, alimentício, como chefs, cozinheiros,
                garçons, etc. Variando sempre o material mais adequado às
                características das profissões e empresas.
            </Text>
            <SemiFooter/>
            <Footer/>
        </>
    );
};

export default ProdutoAvental;
