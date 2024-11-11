
import { UseCallback } from './UseCallback/UseCallback'
import {DarkLight, ThemeProvider} from './useContex/index'
import { MemoParentComponent } from './UseMemo/UseMemo'
import { Reducer } from './useReducer'
function App() {

  return (
      <ThemeProvider>
        <UseCallback />
      </ThemeProvider>
  )
}

export default App
