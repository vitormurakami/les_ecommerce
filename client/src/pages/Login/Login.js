import { useEffect,useState } from "react";

const Login = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function loginUser(e){
        e.preventDefault()
        const response = await fetch('http://localhost:3001/server/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                email,
                senha,
            }),
        })

        const data = await response.json()
        localStorage.setItem('id', data.cliente.id)
        window.location.href = '/'
        
    }

    useEffect(() => {
        if(localStorage.getItem('id')){
            window.location.href = '/'
        }
    })

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginUser}>
                <label>Login: </label>
                <input type='email' onChange={(e) => setEmail(e.target.value)} required/>
                <input type='password' onChange={(e) => setSenha(e.target.value)} required/>
                <input type='submit' value='Entrar'/>
            </form>
        </div>
    );
}

export default Login