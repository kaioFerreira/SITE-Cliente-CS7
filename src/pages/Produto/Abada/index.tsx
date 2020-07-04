import React from 'react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import PageTitle from '../../../components/PageTitle';
import SemiFooter from '../../../components/SemiFooter';
import Line from '../../../components/Line';

import imgAbada from '../../../assets/Produtos/img-abada.png';

import {
    Content,
    Text
} from './styles';
import { Link } from 'react-router-dom';

const ProdutoAbada: React.FC = () => {
    return (
        <>
            <Header/>

            <PageTitle>ABADÁS PERSONALIZADOS</PageTitle>

            <Content>
                <div>
                    <p>
                        Garanta o sucesso do seu bloco, evento ou reunião com
                        amigos! Camisetas Abadás 100% personalizadas com estampa
                        total na frente e costas.
                    </p>

                    <p>
                        A característica marcante do abadá é sua customização,
                        que segue a identidade visual do evento e, geralmente
                        carrega cores vibrantes.
                    </p>

                    <Link to="/Fale-Conosco">ORÇAMENTO</Link>
                </div>
                <img src={imgAbada} alt="Abadá"/>
            </Content>

            <Line/>

            <Text>
                Como os abadás foram incorporados até mesmo em festas
                familiares, há opção entre camiseta regata e camiseta
                com manga, proporcionando conforto e beleza para
                todos os gostos.
            </Text>
            <SemiFooter/>
            <Footer/>
        </>
    );
};

export default ProdutoAbada;
