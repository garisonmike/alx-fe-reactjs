import { useState } from 'react';

function Counter() {
    // Initialize state with a starting value of 0
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Current Count: {count}</p>
            
            {/* Increment button increases the count by 1 */}
            <button 
                onClick={() => setCount(count + 1)} 
                style={{ margin: '5px', padding: '10px 15px', cursor: 'pointer' }}
            >
                Increment
            </button>

            {/* Decrement button decreases the count by 1 */}
            <button 
                onClick={() => setCount(count - 1)} 
                style={{ margin: '5px', padding: '10px 15px', cursor: 'pointer' }}
            >
                Decrement
            </button>

            {/* Reset button returns the count to 0 */}
            <button 
                onClick={() => setCount(0)} 
                style={{ margin: '5px', padding: '10px 15px', cursor: 'pointer', backgroundColor: '#ffcccc' }}
            >
                Reset
            </button>
        </div>
    );
}

export default Counter;
