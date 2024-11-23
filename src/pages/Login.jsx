import React, { useState } from 'react'

const Login = () => {

  const [currentState, setCurrentState] = useState('Inscreva-se');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState === 'Login' ? '' : <input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Nome' required />}
      <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='E-mail' required />
      <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Senha' required />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Esqueceu a senha?</p>
        {
          currentState === 'Login'
          ? <p onClick={()=>setCurrentState('Inscreva-se')} className=' cursor-pointer'>Criar uma conta</p>
          : <p onClick={()=>setCurrentState('Login')} className=' cursor-pointer'>Acessar Conta</p>
        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Iniciar Sessão' : 'Inscreva-se'}</button>
    </form>
  )
}

export default Login
