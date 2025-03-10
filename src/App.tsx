import { useState } from 'react'
import './App.css'
import { appContainer, board, buttons } from './App.css.ts'
import BoardList from './components/BoardList/BoardList.tsx'

function App() {
  const [activeBoardId, setActiveBoardId] = useState('board-0');

  return (
    <div className={appContainer}>
      <BoardList activeBoardId={activeBoardId} setActiveBoardId={setActiveBoardId}/>
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
