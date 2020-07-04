import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageTitle from '../../components/PageTitle';
import SemiFooter from '../../components/SemiFooter';

import imgAbada from '../../assets/Produtos/Produto/img-abada.png';
import imgAventais from '../../assets/Produtos/Produto/img-avental.png';
import imgBone from '../../assets/Produtos/Produto/img-bone.png';
import imgCamisa from '../../assets/Produtos/Produto/img-camisas.png';
import imgColete from '../../assets/Produtos/Produto/img-colete.png';
import imgConjunto from '../../assets/Produtos/Produto/img-conjuntoPersonalizado.png';
import imgDolma from '../../assets/Produtos/Produto/img-dolma.png';
import imgJaleco from '../../assets/Produtos/Produto/img-jaleco.png';
import imgUniforme from '../../assets/Produtos/Produto/img-uniformeEsportivo.png';

import {Link} from 'react-router-dom';

import {
    Content
} from './styles';

const ProdutoAbada: React.FC = () => {
    return (
        <>
            <Header/>

            <PageTitle>PRODUTOS</PageTitle>

            <Content>
                <div>
                    <div>
                        <img src={imgAbada} alt="Abadás"/>
                        <h1>Abadás</h1>
                        <Link to="/Produtos/Abadá">PAGINA DO PRODUTO</Link>
                    </div>

                    <div>
                        <img src={imgAventais} alt="Aventais"/>
                        <h1>Aventais</h1>
                        <Link to="/Produtos/Aventais">PAGINA DO PRODUTO</Link>
                    </div>

                    <div>
                        <img src={imgBone} alt="Boné"/>
                        <h1>Bonés</h1>
                        <Link to="/Produtos/Bonés">PAGINA DO PRODUTO</Link>
                    </div>

                    <div>
                        <img src={imgCamisa} alt="Camisas"/>
                        <h1>Camisas</h1>
                        <Link to="/Produtos/Camisas">PAGINA DO PRODUTO</Link>
                    </div>

                    <div>
                        <img src={imgColete} alt="Coletes"/>
                        <h1>Coletes</h1>
                        <Link to="/Produtos/Coletes">PAGINA DO PRODUTO</Link>
                    </div>

                    <div>
                        <img src={imgConjunto} alt="Conjuntos Personalizados"/>
                        <h1>Conjuntos Personalizados</h1>
                        <Link to="/Produtos/Conjuntos-Personalizados">PAGINA DO PRODUTO</Link>
                    </div>

                    <div>
                        <img src={imgDolma} alt="Dólmãs"/>
                        <h1>Dólmãs</h1>
                        <Link to="/Produtos/Dólmãs">PAGINA DO PRODUTO</Link>
                    </div>

                    <div>
                        <img src={imgJaleco} alt="Jalecos"/>
                        <h1>Jalecos</h1>
                        <Link to="/Produtos/Jalecos">PAGINA DO PRODUTO</Link>
                    </div>

                    <div>
                        <img src={imgUniforme} alt="Uniformes Esportivos"/>
                        <h1>Uniformes Esportivos</h1>
                        <Link to="/Produtos/Uniformes-Esportivos">PAGINA DO PRODUTO</Link>
                    </div>
                </div>
            </Content>

            <SemiFooter/>
            <Footer/>
        </>
    );
};

export default ProdutoAbada;
