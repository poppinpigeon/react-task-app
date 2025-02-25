import './App.css'
import { appContainer, board, buttons } from './App.css.ts'

function App() {
  return (
    <div className={appContainer}>
      <div className={board}>

      </div>
      <div className={buttons}>
        <button>Delete Task List</button>
        <button>View Edit History</button>
      </div>
    </div>
  )
}

export default App
