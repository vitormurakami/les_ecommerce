import { useEffect,useState } from "react";
import Header from "../../components/Header/Header";

const MeusDados = () => {

    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [nascimento, setNascimento] = useState('')
    const [telefone, setTelefone] = useState('')
    const [sexo, setSexo] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaConfirmar, setSenhaConfirmar] = useState('')

    async function atualizar(){
        
    }

    async function setCliente(){
        const id = localStorage.getItem('id')
        const response = await fetch('http://localhost:3001/server/onecustomer/'+id)
        const cliente = await response.json()
        console.log(cliente)

        setNome(cliente.nome)
        setCpf(cliente.cpf)
        setNascimento(cliente.nascimento)
        setTelefone(cliente.telefone)
        setSexo(cliente.sexo)
        setEmail(cliente.email)
        setSenha(cliente.senha)
    }

    useEffect(() => {
        if(!localStorage.getItem('id')){
            window.location.href = '/'
        }
        setCliente()
        
    },[])

    return (
        <div>
            <Header/>
            <div className='meus-dados-body'>
                <h1>Meus Dados</h1>
                <form onSubmit={atualizar}>
                    <div className='cadastro-campo'>
                        <label className='details'>Nome</label>
                        <input type='text' value={nome} onChange={(e) => setNome(e.target.value)} required/>
                    </div>
                    <div className='cadastro-campo'>
                        <label className='details'>CPF</label>
                        <input type='text' value={cpf} onChange={(e) => setCpf(e.target.value)} required/>
                    </div>
                    <div className='cadastro-campo'>
                        <label className='details'>Data Nascimento</label>
                        <input type='date' value={nascimento} onChange={(e) => setNascimento(e.target.value)} required/>
                    </div>
                    <div className='cadastro-campo'>
                        <label className='details'>Telefone</label>
                        <input type='text' value={telefone} onChange={(e) => setTelefone(e.target.value)} required/>
                    </div>
                    <div className='cadastro-campo'>
                        <label className='details'>Sexo</label>
                        <select name='sexo' value={sexo} onChange={(e) => setSexo(e.target.value)} required>
                            <option value=''></option>
                            <option value='Masculino'>Masculino</option>
                            <option value='Feminino'>Feminino</option>
                        </select>
                    </div>
                    <div className='cadastro-campo'>
                        <label className='details'>E-mail</label>
                        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div className='cadastro-campo'>
                        <label className='details'>Senha</label>
                        <input type='password' value={senha} onChange={(e) => setSenha(e.target.value)} required/>
                    </div>
                    <input type='submit' className='button' value='Alterar'/>
                </form>
            </div>
        </div>
    );
}

export default MeusDados