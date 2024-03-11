import { useState } from 'react'
import './App.css'
import Watch from './component/watch'
import { useEffect } from 'react';

function App() {
  let [api,setApi] = useState([]);
  useEffect(() => {
    const apiFetch = async () => {
      const apiJson = await fetch(`facebook.json`);
      const apiConvat = await apiJson.json();
      setApi(apiConvat)
    }

    apiFetch()
  }, [])

  return (
    <>
      
      <h1>Vite + React</h1>
      {api.map(watch => <Watch key={watch.id} props={watch}></Watch>)}
    </> 
  )
}

export default App
