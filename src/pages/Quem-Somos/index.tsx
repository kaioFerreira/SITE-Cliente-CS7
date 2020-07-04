import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageTitle from '../../components/PageTitle';
import SemiFooter from '../../components/SemiFooter';
import Line from '../../components/Line';

import imgQuemSomos from '../../assets/img-quem-somos.png';
import {
    Resume,
    Values,
    Text
} from './styles';

const QuemSomos: React.FC = () => {
    return (
        <>
            <Header/>

            <PageTitle>QUEM SOMOS</PageTitle>

            <Resume>
                <p>
                    A CS7 Uniformes Profissionais,  está há mais de 10 anos
                    no mercado, produzindo uniformes de alta qualidade.
                    <br/><br/>
                    Contamos com uma equipe altamente qualificada, pronta
                    para desenvolver o projeto ideal para suas necessidades.
                    Nossa infraestrutura é completa, com tecnologia de ponta
                    com altos índices de produção,  e um excelente controle
                    de qualidade.
                    <br/><br/>
                    Nosso objetivo é oferecer soluções personalizadas e
                    integradas que proporcionem ganho de tempo e otimização
                    de custos para os clientes, atendendo com eficiência às
                    necessidades específicas de diferentes empresas e
                    departamentos.
                </p>
                <img src={imgQuemSomos} alt="Mulher"/>
            </Resume>

            <Values>
                <div>
                    <span></span>
                    <h1>Missão, Visão e Valores</h1>
                    <span></span>
                </div>

                <section>
                    <h1>MISSÃO</h1>
                    <p>
                        Prestar serviços de qualidade, orientar no uso, manutenção
                        e adequação de uniformes para os mais diversos ramos de
                        atividades, de forma a contribuir para a imagem e sucesso
                        de seus clientes.
                    </p>

                    <h1>VISÃO</h1>
                    <p>
                        Ser reconhecida nacionalmente como empresa referência
                        no mercado de uniformes, lembrada por seus produtos de
                        qualidade, soluções personalizadas e atendimento
                        diferenciado.
                    </p>

                    <h1>VALORES</h1>
                    <ul>
                        <li>Valorizar o perfil de cada cliente.</li>
                        <li>Buscar a satisfação do cliente por meio do atendimento e serviços prestados.</li>
                        <li>Ser transparente em todas as etapas.</li>
                    </ul>
                </section>
            </Values>

            <Line/>

            <Text>
                A CS7 Uniformes Profissionais acredita que profissionais
                vestidos com o uniforme adequado reforçam positivamente a
                imagem, confiabilidade, postura, organização, segurança e
                higiene de uma empresa ou residência. Um uniforme bonito e
                confortável motiva o profissional e ajuda na execução de suas
                funções com qualidade.
            </Text>

            <SemiFooter/>

            <Footer/>
        </>
    );
};

export default QuemSomos;
