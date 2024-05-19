import './App.css';
import { useState } from 'react';


function Testcomponent() {

    const name = "Wim";
    const [count, setCount] = useState(0);


    return(
        <header className="App-header">
            <div>
                <h3>This is {name}'s test</h3>
                <button onClick={()=> setCount(count+1)} >clicked {count} times</button>
            </div>    
        </header>        
    );
}

export default Testcomponent;