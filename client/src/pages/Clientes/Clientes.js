import React from 'react'
import Header from "../../components/Header/Header";
//import Lista from '../../components/Lista/Lista';
import './Clientes.css'


const Clientes = () => {

    //const meusItens = ['React', 'Vue', 'Angular']
    const meusItens = [{id: 1, framework: 'React'}, {id: 2, framework: 'Vue'}, {id: 3, framework: 'Angular'}]

  return (
    <div>
        <Header/>
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Luiz</td>
                    <td>luiz@gmail.com</td>
                    <td>Atualizar Excluir</td>
                </tr>
                <tr>
                    <td>João</td>
                    <td>joao@gmail.com</td>
                    <td>Atualizar Excluir</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Clientes