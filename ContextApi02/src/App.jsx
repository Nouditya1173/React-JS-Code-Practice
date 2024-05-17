import { useEffect, useState } from 'react'
import './App.css'
import Btn from './Components/Btn'
import Card from './Components/Card'
import  { ThemeProvider } from './Context/Context'

function App() {
       const[ThemeMode,setThemeMode] = useState("light")

       const ThemeLight = ()=>{
          setThemeMode("light")
       }
       const ThemeDark = ()=>{
        setThemeMode("dark")
       }

       useEffect(()=>{
         document.querySelector('html').classList.remove("light","dark")
         document.querySelector('html').classList.add(ThemeMode)
       },[ThemeMode])
  return (
    <ThemeProvider value={{ThemeMode,ThemeDark,ThemeLight}}>
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    <Btn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                     <Card/>
                    </div>
                </div>
   </div>
    </ThemeProvider>

      
  )
}

export default App
