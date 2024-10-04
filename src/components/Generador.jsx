import {Users} from '../users.js'
import { useState } from 'react'

function Generador ({setUI, setUser, user}) {

    const [code, setCode] = useState('')
    const [copiado, setCopiado] = useState('')

    const generar = async () => {

        document.getElementById('boton-generar').className = 'boton-generar-block'
        document.getElementById('boton-copiar').className = 'boton-copiar'

        const codigo = crypto.randomUUID()
        setCode(user+codigo)
        
        const solicitud = {
            user: user,
            code: codigo
        };

        await fetch('https://exodo-api.netlify.app/.netlify/functions/index/codes', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(solicitud)
        })
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.error(err)
        }
        )
    }

    const copiar = () => {
        navigator.clipboard.writeText(code)
        .then(() => {
            setCopiado('Código copiado correctamente ✅')
        })
    }

    return (
        <div className='Generador'>
            <p className='codigo-generado'>{code}</p>
            <p className='copiado'>{copiado}</p>
            <button id='boton-generar' className='boton-generar' onClick={generar}>Generar Código de Descuento</button>
            <button id='boton-copiar' className='boton-copiar-block' onClick={copiar}>Copiar</button>
        </div>
    )
}

export default Generador