import React,{useContext} from 'react'
import { Button ,ButtonGroup} from 'semantic-ui-react'
import { CounterContext } from '../Context/context'
const CounterButtons = () => {
    const [count,setcount]=useContext(CounterContext)
    return (
        <div>
        <ButtonGroup>
            <Button color="green" onClick={()=>setcount(count+1)}>Add</Button>
            <Button color="red" onClick={()=>setcount(count-1)}>Delete</Button>

            
        </ButtonGroup>
        </div>
    )
}

export default CounterButtons
