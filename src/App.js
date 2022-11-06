import DigitButton from "./DigitButton"
import OperationButton from "./OperationButton"
import "./App.css"
import React,{useReducer} from "react"

export const ACTIONS = {
  add : 'add',
  clear : 'clear',
  delete : 'delete',
  chooseOperation : 'choose',
  evaluate : 'eval'
}

function App() {

  function evaluate(state){
    const prev = parseFloat(state.prevOper)
    const curr = parseFloat(state.currOper)

    let computation=''
    if (isNaN(prev)||isNaN(curr)) return computation
    switch(state.operation){
      case '+':
        computation = prev + curr
        return computation.toString()
      
      case '*':
        computation = prev * curr
        return computation.toString()
      
      case '÷':
        computation = prev / curr
        return computation.toString()
           
      case '-':
        computation = prev - curr
        return computation.toString()
                 
    }
  }

  function reducer(state, {type, payload}){

    switch(type){
      case ACTIONS.add:
        
        if (state.currOper==null) 
        
        return {
          ...state,
          currOper:payload.digit
        }
        
        if (state.currOper==='0'&&payload.digit==='0') return state

        if (state.currOper.includes('.')&&payload.digit==='.') return state
        
        if (state.overwrite) return {
          ...state,
          overwrite:false,
          currOper:payload.digit
        }

        return {
          ...state,
          currOper:state.currOper+payload.digit
        }
      case ACTIONS.clear:
        return {}
        
      case ACTIONS.chooseOperation:
          
        if (state.currOper==null&&state.prevOper==null) return state

        
        if (state.currOper==null) return {
          ...state,
          operation:payload.operation,
        }
        
        
        if (state.prevOper==null) return {
          ...state,
          operation:payload.operation,
          currOper:null,
          prevOper:state.currOper
        }
        return {
          ...state,
          operation:payload.operation,
          currOper:null,
          prevOper:evaluate(state)
        }

      case ACTIONS.evaluate:
        if (!state.currOper||!state.prevOper||!state.operation) return state
        
        return {
          ...state,
          overwrite:true,
          operation:null,
          prevOper:null,
          currOper:evaluate(state)
        }

      case ACTIONS.delete:
        if (state.overwrite) return {
          ...state,
          currOper:null,
          overwrite:false
        }
        if (!state.currOper) return state
        if (state.currOper.length===1) return {
          ...state,
          currOper:null
        }
        return {
          ...state,
          currOper:state.currOper.slice(0,-1)
        }
    }

  }

  const [{prevOper, currOper, overwrite, operation}, dispatch] = useReducer(reducer, {})

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {prevOper}{operation}
        </div>
        <div className="current-operand">{currOper}</div>
      </div>
      <button
        className="span-two"
        onClick={()=>dispatch({type:ACTIONS.clear})}
      >
        AC
      </button>
      <button onClick={()=>dispatch({type:ACTIONS.delete})}>
        DEL
      </button>
      <OperationButton operation="÷"dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch}/>
      <DigitButton digit="2" dispatch={dispatch}/>
      <DigitButton digit="3" dispatch={dispatch}/>
      <OperationButton operation="*" dispatch={dispatch}/>
      <DigitButton digit="4" dispatch={dispatch}/>
      <DigitButton digit="5" dispatch={dispatch}/>
      <DigitButton digit="6" dispatch={dispatch}/>
      <OperationButton operation="+" dispatch={dispatch}/>
      <DigitButton digit="7" dispatch={dispatch}/>
      <DigitButton digit="8" dispatch={dispatch}/>
      <DigitButton digit="9" dispatch={dispatch}/>
      <OperationButton operation="-" dispatch={dispatch}/>
      <DigitButton digit="." dispatch={dispatch}/>
      <DigitButton digit="0" dispatch={dispatch}/>
      <button
        className="span-two"
        onClick={()=>dispatch({type:ACTIONS.evaluate})}
      >
        =
      </button>
    </div>
  )
}

export default App