import React from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';

import logoImg from '../../assets/logo.png';

const Header: React.FC = () => (
    <>
        <Container>
            <img src={logoImg} alt="AM Uniformes - Logo"/>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/Quem-Somos">QUEM SOMOS</Link></li>
                <li><Link to="/Produtos">PRODUTOS</Link>
                    <ul>
                        <li><Link to="/Produtos/Abadá">Abadás</Link></li>
                        <li><Link to="/Produtos/Aventais">Aventais</Link></li>
                        <li><Link to="/Produtos/Bonés">Bonés</Link></li>
                        <li><Link to="/Produtos/Camisas">Camisas</Link></li>
                        <li><Link to="/Produtos/Coletes">Coletes</Link></li>
                        <li><Link to="/Produtos/Conjuntos-Personalizados">Conjuntos Personalizados</Link></li>
                        <li><Link to="/Produtos/Dólmãs">Dólmãs</Link></li>
                        <li><Link to="/Produtos/Jalecos">Jalecos</Link></li>
                        <li><Link to="/Produtos/Uniformes-Esportivos">Uniformes Esportivos</Link></li>
                    </ul>
                </li>
                <li><Link to="/Clientes">CLIENTES</Link></li>
                <li><Link to="/Fale-Conosco">FALE CONOSCO</Link></li>
            </ul>
            <Link to="/Fale-Conosco">
                <FaPhoneAlt size="20"/>
                LIGAMOS PARA VOCÊ
            </Link>
        </Container>
    </>
);

export default Header;
