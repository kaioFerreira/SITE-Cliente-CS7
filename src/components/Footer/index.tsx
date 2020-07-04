import React from 'react';
import { Container } from './styles';

import iconFacebook from '../../assets/icon-facebook.png';
import iconWhatsapp from '../../assets/icon-whatsapp.png';
import iconInstagram from '../../assets/icon-instagram.png';

const Footer: React.FC = () => (
    <Container>
        <div>
            <div>
                <p>Siga a <strong>CS7</strong> nas redes sociais</p>
            </div>

            <a href="https://www.facebook.com/AM-Uniformes-Goi%C3%A2nia-106474750968235/?ref=py_c"><img src={iconFacebook} alt="Facebook"/></a>
            <a href="https://www.instagram.com/amuniformesgoiania/"><img src={iconInstagram} alt="Instagram"/></a>
            <a href="https://api.whatsapp.com/send?phone=5562982044749&text=Ol%C3%A1%2C%20preciso%20de%20or%C3%A7amento."><img src={iconWhatsapp} alt="Whatsapp"/></a>

        </div>

        <section>
            <p>
                Todos os direitos reservados © <strong>CS7 Camargos e Santos</strong>
            </p>
        </section>
    </Container>
);

export default Footer;
