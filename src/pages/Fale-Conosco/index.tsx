import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageTitle from '../../components/PageTitle';

import {
    Orcamento,
    Contato
} from './styles';

import iconWhatsapp from '../../assets/icon-whatsapp.png';

const FaleConosco: React.FC = () => {
    return (
        <>
            <Header/>

            <PageTitle>FAÇA UM ORÇAMENTO</PageTitle>
            <Orcamento>
                <section>
                    <form action="/email.php" method="POST">
                        <p>
                            Você pode pedir um orçamento na CS7 de forma fácil
                             e rápida preenchendo o formulário abaixo. <br/><br/>
                             Depois de enviar sua solicitação, você receberá
                              uma resposta no seu e-mail o mais breve possível.
                        </p>
                        <input type="text" name="nome_empresa" placeholder="Nome da empresa"/>
                        <input type="text" name="nome_responsavel" placeholder="Nome do responsável pela cotação"/>
                        <input type="text" name="telefone" placeholder="Telefone"/>
                        <input type="email" name="email" placeholder="Seu melhor e-mail"/>
                        <textarea name="mensagem" placeholder="Descreva seu orçamento: Modelo, quantidade, cor etc..."/>

                        <button type="submit">ENVIAR</button>
                    </form>
                    <Contato>
                        <h1>TELEFONES</h1>
                        <div>
                            <img src={iconWhatsapp} alt="Whatsapp"/>
                            <h1>(62) 9 8204-4749</h1>
                        </div>
                    </Contato>
                </section>
            </Orcamento>

            <Footer/>
        </>
    );
};

export default FaleConosco;
