import './Usuarios.css'

function Usuarios() {
  return (
    <>
      <main>
        <div className='login'>
          <div className='borda'>
          <h1>PlayStation</h1>
          <input type="text" className="nome" placeholder="Nome"/>
          <input type="email" className="email" placeholder="Email" />
          <input type="password" className="senha1" placeholder="Senha" />
          <input type="password" className="senha2" placeholder="Confirme sua senha" />
          <input type="submit" className="entrar" placeholder="Entrar"/>
          </div>
        </div>
      </main>
      </>
  )
}

export default Usuarios
