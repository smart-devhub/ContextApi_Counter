import React,{useContext} from 'react'
import { Statistic} from 'semantic-ui-react'
import { CounterContext } from '../Context/context'

const CounterDisplay = () =>{
    const [count]=useContext(CounterContext)

    return (
        <div>
        <Statistic>
            <Statistic.Value>{count}</Statistic.Value>
            <Statistic.Label>Counter</Statistic.Label>
            
            
        </Statistic>
        </div>
    )
}

export default CounterDisplay
