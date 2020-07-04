import React from 'react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import PageTitle from '../../../components/PageTitle';
import SemiFooter from '../../../components/SemiFooter';
import Line from '../../../components/Line';

import imgJalecos from '../../../assets/Produtos/img-jalecos.png';

import {
    Content,
    Text
} from './styles';
import { Link } from 'react-router-dom';

const ProdutoDolma: React.FC = () => {
    return (
        <>
            <Header/>

            <PageTitle>JALECOS PERSONALIZADAS</PageTitle>

            <Content>
                <div>
                    <p>
                        Jalecos são peças primordiais para proteção de
                        trabalhadores, principalmente da área da saúde. 
                        Sendo, portanto, um equipamento de proteção
                        individual (EPI), protegendo-os contra os
                        microrganismos presentes no ambiente hospitalar.
                    </p>

                    <p>
                        O uso do jaleco é obrigatório para diversas
                        profissões, como é o caso de médicos, enfermeiros,
                        dentistas, profissionais de laboratório, entre
                        outros que lidam com a saúde.
                    </p>

                    <Link to="/Fale-Conosco">ORÇAMENTO</Link>
                </div>
                <img src={imgJalecos} alt="Jalecos"/>
            </Content>

            <Line/>

            <Text>
                O que define o uso dessa peça, é a segurança das pessoas,
                seja de quem vai prestar ou receber o atendimento.
            </Text>
            <SemiFooter/>
            <Footer/>
        </>
    );
};

export default ProdutoDolma;
