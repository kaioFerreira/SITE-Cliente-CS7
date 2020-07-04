import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import FaleConosco from '../pages/Fale-Conosco';
import QuemSomos from '../pages/Quem-Somos';
import Produtos from '../pages/Produto';
import Clientes from '../pages/Clientes';
import ProdutoAbada from '../pages/Produto/Abada';
import ProdutoAvental from '../pages/Produto/Avental';
import ProdutoBone from '../pages/Produto/Bone';
import ProdutoCamisas from '../pages/Produto/Camisas';
import ProdutoColetes from '../pages/Produto/Coletes';
import ProdutoConjunto from '../pages/Produto/Conjunto';
import ProdutoDolmas from '../pages/Produto/Dolmas';
import ProdutoUniformeEsportivo from '../pages/Produto/Uniforme';
import ProdutoJalecos from '../pages/Produto/Jalecos';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/Quem-Somos"component={QuemSomos}/>
        <Route path="/Produtos" exact component={Produtos}/>
        <Route path="/Produtos/Abadá"component={ProdutoAbada}/>
        <Route path="/Produtos/Aventais"component={ProdutoAvental}/>
        <Route path="/Produtos/Bonés"component={ProdutoBone}/>
        <Route path="/Produtos/Camisas" component={ProdutoCamisas}/>
        <Route path="/Produtos/Coletes" component={ProdutoColetes}/>
        <Route path="/Produtos/Conjuntos-Personalizados" component={ProdutoConjunto}/>
        <Route path="/Produtos/Dólmãs" component={ProdutoDolmas}/>
        <Route path="/Produtos/Uniformes-Esportivos" component={ProdutoUniformeEsportivo}/>
        <Route path="/Produtos/Jalecos" component={ProdutoJalecos}/>
        <Route path="/Clientes"component={Clientes}/>
        <Route path="/Fale-Conosco"component={FaleConosco}/>
    </Switch>
);

export default Routes;
