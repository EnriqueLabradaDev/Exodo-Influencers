import {Users} from '../users.js'
import { useState } from 'react'

function Registro ({setUI, setUser}) {

const [usuario, setUsuario] = useState('')
const [contraseña, setContraseña] = useState('')
const [error, setError] = useState('')

    const saveUser = () => {
        const user = document.getElementById('usuario')
        setUsuario(user.value)
    }

    const savePassword = () => {
        const password = document.getElementById('contraseña')
        setContraseña(password.value)
    }

    const autenticar = () => {
        Users.map(user => {
            if(user.user === usuario && user.password === contraseña) {
                console.log('Acces Alowed')
                setUI(false)
                setUser(usuario)
                setError('')
            }
            else if(user.user === usuario && user.password !== contraseña){
                setError('Contraseña Incorrecta')
            }
            else if(user.user !== usuario && user.password === contraseña){
                setError('Usuario Incorrecto')
            }
            else {
                setError('Acceso Denegado')
            }
        })
    }

    return(
        <div className='Registro'>
            <form>
                <input id='usuario'   type='text' placeholder='Usuario' onChange={() => saveUser()}/>
                <input id='contraseña' type='text' placeholder='Contraseña' onChange={() => savePassword()}/>
            </form>
            <p className='error'>{error}</p>
            <button className='confirmar' onClick={autenticar}> Confirmar </button>
        </div>
    )
}

export default Registro