import React from 'react'

function Lista({itens}) {
  return (
    <div>
        <h3>Minha lista</h3>
        {
            itens.map((item, id) => <p key={id}>{item}</p>)
        }
    </div>
  )
}

export default Lista