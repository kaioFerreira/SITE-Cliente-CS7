import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SemiFooter from '../../components/SemiFooter';
import Line from '../../components/Line';

import {
Background,
Medalha,
Subtitulo,
Uniformes,
Orcamento,
UniformePersonalizado,
Depoimentos
} from './styles';

import uniformeCamiseta from '../../assets/uniforme-camiseta.png';
import uniformePolo from '../../assets/uniforme-polo.png';
import uniformeSocial from '../../assets/uniforme-social.png';
import tenYearMedal from '../../assets/ten-year-medal.png';
import imgUniformePersonalizado from '../../assets/uniforme-personalizado.png';
import depoimentosApas from '../../assets/depoimentos-aspas.png';

const Home: React.FC = () => {
    return (
        <>
            <Header/>

            <Background/>

            <Medalha>
                <img src={tenYearMedal} alt="Medalha de dez anos"/>
            </Medalha>

            <Subtitulo>
                <h1>UNIFORMES PROFISSIONAIS</h1>
                <h2>PERSONALIZADOS</h2>
            </Subtitulo>

            <Line/>

            <Uniformes>
                <div>
                    <img src={uniformeCamiseta} alt="Camiseta"/>
                    <h1>CAMISETA</h1>
                </div>
                <div>
                  <img src={uniformePolo} alt="Gola polo"/>
                  <h1>POLO</h1>
                </div>
                <div>
                    <img src={uniformeSocial} alt="Social"/>
                    <h1>SOCIAL</h1>
                </div>
            </Uniformes>

            <Orcamento>
                <Link to="/Fale-Conosco">SOLICITAR ORÇAMENTO</Link>

                <Line/>

                <div>
                    <p>
                    <strong>INVISTA</strong> na imagem de seus colaboradores com <strong>UNIFORMES </strong>
                     profissionais e que se destaque na <strong>ELEGÂNCIA</strong>, na <strong>PRATICIDADE</strong> e,
                     principalmente, no <strong>MARKETING OFFLINE</strong> alcançando um número
                      incalculável de pessoas.
                    </p>
                </div>

            </Orcamento>

            <UniformePersonalizado>
                <div>
                    <h1>UNIFORMES PERSONALIZADOS</h1>
                    <h5>FAZEM TODA A DIFERENÇA!</h5>
                </div>

                <section>
                    <div>
                        <p>
                        A confecção de uniformes com design <strong>exclusivo</strong> requer
                         uma estrutura diferenciada de produção, que garanta
                          o sigilo, a qualidade e o padrão das medidas, cores
                           e materiais que somente a <strong>CS7</strong> pode lhe oferecer.
                        </p>
                        <p>
                        A <strong>CS7 Uniformes Personalizados</strong>, possui uma produção
                         moderna com mão de obra especializada própria e
                          experiência de mais de <strong>10 anos</strong> em confecção.
                        </p>
                    </div>
                    <img src={imgUniformePersonalizado} alt="Uniforme personalizado"/>
                </section>
            </UniformePersonalizado>

            <Depoimentos>
                <div>
                    <span></span>
                    <h1>DEPOIMENTOS</h1>
                    <span></span>
                </div>

                <section>
                    <div>
                        <img src={depoimentosApas} alt="Aspas"/>
                        <p>
                            Amei a qualidade e o bom atendimento da empresa.
                            Super satisfeita com os produtos, e qualidade
                            do material. Obrigada pelo compromisso com os clientes.
                        </p>

                        <h5>Andressa Oliveira</h5>
                    </div>

                    <div>
                        <img src={depoimentosApas} alt="Aspas"/>
                        <p>
                            Na CS7 a qualidade dos tecidos e peças é indiscutível.
                            Nos surpreendemos com os uniformes, pois possuem
                            acabamento impecável, custura resistente e tecido de
                            alta qualidade.
                        </p>

                        <h5>Juliano Souza</h5>
                    </div>

                    <div>
                        <img src={depoimentosApas} alt="Aspas"/>
                        <p>
                            Há muito tempo fazemos nossos uniformes com a CS7 e
                            sempre ficamos satisfeitos. Modelos modernos e os
                            tecidos de ótima qualidade.
                        </p>

                        <h5>Mariana Ribeiro</h5>
                    </div>
                </section>
            </Depoimentos>

            <SemiFooter/>

            <Footer/>

        </>
    );
};

export default Home;
