import { useEffect, useState } from "react"
import Display from "./components/Display"
import Buttons from "./components/Buttons"

function App() {
  const [ Result, setResult ] = useState('')
  
  useEffect(() => { document.title = "Calculator / React" })

  function handleclicks(value) {
    switch (value) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
      case '+':
      case '-':
      case '/':
      case '*':
        if (Result === "0") {
          setResult(value)

        } else {
          setResult(Result + value)
        }
        break;
      case '=':
        setResult(eval(Result))
        break;
      case 'c':
        setResult('')
        break;
      case '+/-':
        setResult(parseInt(Result, 10) * -1)
        break;
      case '%':
        setResult(parseFloat(Result, 10) / 100)
        break;
      default:
        break;
    }
  }

  return (
    <>
      <main className="bg-gradient-to-l from-indigo-500 to-sky-500 animate-background flex items-center justify-center h-screen w-screen px-2 py-24 md:px-8">
        <div className="w-full md:w-96 bg-white bg-opacity-40 backdrop-blur-lg rounded-xl drop-shadow-lg text-center">
          <div className="p-5 overflow-hidden text-white">
            <Display value={Result} />
            <Buttons Buttonclicked={handleclicks} />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
