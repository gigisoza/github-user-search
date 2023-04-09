import { useState } from "react"
import { Header } from "./components/Header"
import { SearchBar } from "./components/SearchBar"

function App() {

  const [value, setValue] = useState("");
  const [click, setClick] = useState(false);

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(
          e.target.value
      )
  }

  const handleClick = () => {
    setClick((click) => (!click))
    setValue("")
  }

  return (
    <div className="App">
      <div className="container">
        <Header title="devfinder" icon="dark" />
        <SearchBar 
          search="Search" value={value} setValue={setValue} handleValue={handleValue} 
          click={click} setClick={setClick} handleClick={handleClick}
        />
      </div>
    </div>
  )
}

export default App
