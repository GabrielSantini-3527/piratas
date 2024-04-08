import React from 'react'
import Piratas from './components/Piratas'

function App() {
  return (
    <main className='bg-gray-300'>
      <div>
        <h1 className='uppercase font-pirata font-bold text-4xl items-center ml-3 mb-3 '>Piratas do Caribe</h1>

        <Piratas />
      </div>
    </main>
    
  )
}

export default App