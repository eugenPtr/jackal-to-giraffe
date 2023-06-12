import { useState } from 'react'
import './Popup.css'
import RangeInput from './components/RangeInput'
import Form from './components/Form'

function App() {
  const [crx, setCrx] = useState('create-chrome-ext')

  return (
    <main className="w-[400px] h-[800px] p-[20px] text-center">
      <h3 className="font-bold text-xl">Popup Page!</h3>

      <div className="mt-[50px]">
        {/* <RangeInput/> */}
        <Form/>
      </div>
    </main>
  )
}

export default App
