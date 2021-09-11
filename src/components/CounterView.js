import React from 'react'
import { Segment } from 'semantic-ui-react'
import CounterContextProvider from '../Context/context'
import CounterButtons from './CounterButtons'
import CounterDisplay from './CounterDisplay'

const CounterView = () => {
    return (
              <div>
                  
            <CounterContextProvider>
                
                <h3>Counter App</h3>
                <Segment textAlign="center">
            <CounterDisplay />
            <CounterButtons />
            </Segment>
            </CounterContextProvider>
                  </div> 
        
    )
}

export default CounterView
   