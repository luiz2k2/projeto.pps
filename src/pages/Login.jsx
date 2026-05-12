import './Login.css'
import downloadImg from '../assets/dowload.png'

function Login() {
  return (
    <>
    <main className="container">

      {/* LADO ESQUERDO (IMAGEM) */}
      <div className="left">
        <img src={downloadImg} alt="PlayStation"/>
      </div>

      {/* LADO DIREITO (LOGIN) */}
      <div className="right">
        <div className="loginBox">

          <h1 className="logo">PlayStation</h1>
          <h2>Fazer login</h2>

          <label>Login</label>
          <input 
            type="text"
            placeholder="Digite seu login..."
            onChange={(e) => setLogin(e.target.value)}
          />

          <label>Senha</label>
          <input 
            type="password"
            placeholder="Digite sua senha..."
            onChange={(e) => setSenha(e.target.value)}
          />

          <button>ENTRAR</button>

          <a href="#">Esqueci meu login ou senha</a>

        </div>
      </div>

    </main>
  </>
  )
}

export default Login
