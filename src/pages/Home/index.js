import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src={
            'https://static.netshoes.com.br/produtos/05/HZM-1276-405/HZM-1276-405_detalhe1.jpg?ims=280x280'
          }
          alt="tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src={
            'https://static.netshoes.com.br/produtos/05/HZM-1276-405/HZM-1276-405_detalhe1.jpg?ims=280x280'
          }
          alt="tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src={
            'https://static.netshoes.com.br/produtos/05/HZM-1276-405/HZM-1276-405_detalhe1.jpg?ims=280x280'
          }
          alt="tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src={
            'https://static.netshoes.com.br/produtos/05/HZM-1276-405/HZM-1276-405_detalhe1.jpg?ims=280x280'
          }
          alt="tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src={
            'https://static.netshoes.com.br/produtos/05/HZM-1276-405/HZM-1276-405_detalhe1.jpg?ims=280x280'
          }
          alt="tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src={
            'https://static.netshoes.com.br/produtos/05/HZM-1276-405/HZM-1276-405_detalhe1.jpg?ims=280x280'
          }
          alt="tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
