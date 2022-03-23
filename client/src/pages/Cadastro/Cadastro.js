import './Cadastro.css'
import { useEffect, useState } from "react";
import Header from '../../components/Header/Header';

const Cadastro = () => {

    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [nascimento, setNascimento] = useState('')
    const [telefone, setTelefone] = useState('')
    const [sexo, setSexo] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaConfirmar, setSenhaConfirmar] = useState('')

    async function cadastrar(e){
        e.preventDefault()
        const response = await fetch('http://localhost:3001/server/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                nome, 
                cpf,
                nascimento,
                telefone,
                sexo,
                email,
                senha
            })
        })

        console.log(response.status)

    }
    
    return (
        <div>
            <Header/>
            <div className='body'>
                <h1>Cadastro</h1>
                <form onSubmit={cadastrar}>
                    <div className='cadastro-campo'>
                        <label className='details'>Nome</label>
                        <input type='text' onChange={(e) => setNome(e.target.value)} required/>
                    </div>
                    <div className='cadastro-campo'>
                        <label className='details'>CPF</label>
                        <input type='text' onChange={(e) => setCpf(e.target.value)} required/>
                    </div>
                    <div className='cadastro-campo'>
                        <label className='details'>Data Nascimento</label>
                        <input type='date' onChange={(e) => setNascimento(e.target.value)} required/>
                    </div>
                    <div className='cadastro-campo'>
                        <label className='details'>Telefone</label>
                        <input type='text' onChange={(e) => setTelefone(e.target.value)} required/>
                    </div>
                    <div className='cadastro-campo'>
                        <label className='details'>Sexo</label>
                        <select name='sexo' onChange={(e) => setSexo(e.target.value)} required>
                            <option value=''></option>
                            <option value='Masculino'>Masculino</option>
                            <option value='Feminino'>Feminino</option>
                        </select>
                    </div>
                    <div className='cadastro-campo'>
                        <label className='details'>E-mail</label>
                        <input type='text' onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div className='cadastro-campo'>
                        <label className='details'>Senha</label>
                        <input type='password' onChange={(e) => setSenha(e.target.value)} required/>
                    </div>
                    <div className='cadastro-campo'>
                        <label className='details'>Confirme sua senha</label>
                        <input type='password' onChange={(e) => setSenhaConfirmar(e.target.value)} required/>
                    </div>
                    
                    <input type='submit' className='button' value='Cadastrar'/>
                </form>
            </div>
        </div>
    );
}


export default Cadastro
