import React from 'react';
import { Container } from './styles';

import { Link } from 'react-router-dom';

const SemiFooter: React.FC = () => (
    <Container>
        <p>
            Entre em contato conosco e solicite o seu orçamento.
            <br/><br/>Estamos prontos para lhe atender com rapidez,
            praticidade e entregar seu produto de acordo com a
            necessidade do seu negócio ou evento.
        </p>

        <Link to="/Fale-conosco">SOLICITAR ORÇAMENTO</Link>
    </Container>
);

export default SemiFooter;
