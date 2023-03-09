import {Link} from 'react-router-dom';
import '../CSS/Cadastro.css';
import { useState } from "react";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../Services/FirebaseAuth";

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  function handleSingIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, senha)
      .then((userCredential) => {
        setMensagem('Usuário autenticado com sucesso!');
        const user = userCredential.user;
      })
      .catch((error) => {
        setMensagem('Erro ao autenticar usuário: ' + error.message);
      });
  }

  if (loading) {
    return <p>carregando...</p>;
  }

  if (user) {
    console.log(user);
  }

  return (
    <div className="containerr">
      <div className="contente_login">
        <div className="login">
          <form>
            <h2>L O G I N</h2>
            {mensagem && <p>{mensagem}</p>}
            <p>
              <label htmlFor="email_login"> E-mail: </label>
              <input
                id="email"
                name="email"
                required
                type="email"
                value={email}
                placeholder="Digite seu email..."
                onChange={(e) => setEmail(e.target.value)}
              />
            </p>
            <p>
              <label htmlFor="senha_login">Senha: </label>
              <input
                id="senha"
                name="senha"
                required
                type="password"
                value={senha}
                placeholder="Digite sua senha..."
                onChange={(e) => setSenha(e.target.value)}
              />
            </p>
            <p>
              <input type="checkbox" name="manterlogado" id="manterlogado" value="" />
              <label htmlFor="manterlogado">Manter-me logado</label>
            </p>
            <p>
              <input type="button" onClick={handleSingIn} value="Logar"/>
            </p>
            <p className="link_l">
              Ainda não tem conta?  <Link to="/Cadastro"><span>Cadastre-se</span></Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;