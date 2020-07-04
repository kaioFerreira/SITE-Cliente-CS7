import React from 'react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import PageTitle from '../../../components/PageTitle';
import SemiFooter from '../../../components/SemiFooter';
import Line from '../../../components/Line';

import imgConjuntoPersonalizado from '../../../assets/Produtos/img-conjuntoPersonalizado.png';

import {
    Content,
    Text
} from './styles';
import { Link } from 'react-router-dom';

const ProdutoConjuntosPersonalizados: React.FC = () => {
    return (
        <>
            <Header/>

            <PageTitle>CONJUNTOS PERSONALIZADOS</PageTitle>

            <Content>
                <div>
                    <p>
                        Alguns uniformes de produção devem seguir normas
                        técnicas do setor e/ou ter elementos que protegem
                        o trabalhador no exercício de sua função. É o caso
                        de uniformes que devem ter faixas refletivas e material
                        antichamas, além de tecido mais espesso, como o brim.
                    </p>

                    <p>
                        Para maior conforto dos colaboradores, sem perder a
                        qualidade, os conjuntos podem ser confeccionaldos no
                        brim leve e no brim pesado.
                    </p>

                    <Link to="/Fale-Conosco">ORÇAMENTO</Link>
                </div>
                <img src={imgConjuntoPersonalizado} alt="Conjunto Personalizado"/>
            </Content>

            <Line/>

            <Text>
                O uniforme composto de jaleco e calça é caracterizado pelo uso
                nas funções mais operacionais de uma empresa. Assim, é usado
                por colaboradores como mecânicos, eletricistas, profissionais
                que trabalham na linha de montagem, açougues, funcionários
                da área de limpeza, dentre outros.
            </Text>
            <SemiFooter/>
            <Footer/>
        </>
    );
};

export default ProdutoConjuntosPersonalizados;
