import PropTypes from 'prop-types';

Buttons.propTypes = {
    Buttonclicked: PropTypes.func
}

function Buttons(props) {

    const handleclicks = (e) => {
        props.Buttonclicked(e.target.value)
    }

    return (
        <div className="my-3 grid gap-y-2">
            <div className="grid grid-cols-4 gap-x-2">
                <button 
                    className="p-3 bg-white bg-opacity-30 rounded-lg" 
                    onClick={handleclicks} 
                    value="c"
                >AC</button>
                <button 
                    className="p-3 bg-white bg-opacity-30 rounded-lg" 
                    onClick={handleclicks} 
                    value="+/-"
                >+/-</button>
                <button 
                    className="p-3 bg-white bg-opacity-30 rounded-lg" 
                    onClick={handleclicks} 
                    value="%"
                >%</button>
                <button 
                    className="p-3 bg-white bg-opacity-30 rounded-lg" 
                    onClick={handleclicks} 
                    value="/"
                >÷</button>
            </div>
            <div className="grid grid-cols-4 gap-x-2">
                <button 
                    className="p-3 bg-white bg-opacity-30 rounded-lg" 
                    onClick={handleclicks} 
                    value="7"
                >7</button>
                <button 
                    className="p-3 bg-white bg-opacity-30 rounded-lg" 
                    onClick={handleclicks} 
                    value="8"
                >8</button>
                <button 
                    className="p-3 bg-white bg-opacity-30 rounded-lg" 
                    onClick={handleclicks} 
                    value="9"
                >9</button>
                <button 
                    className="p-3 bg-white bg-opacity-30 rounded-lg" 
                    onClick={handleclicks} 
                    value="*"
                >x</button>
            </div>
            <div className="grid grid-cols-4 gap-x-2">
                <button 
                    className="p-3 bg-white bg-opacity-30 rounded-lg" 
                    onClick={handleclicks} 
                    value="4"
                >4</button>
                <button 
                    className="p-3 bg-white bg-opacity-30 rounded-lg" 
                    onClick={handleclicks} 
                    value="5"
                >5</button>
                <button 
                    className="p-3 bg-white bg-opacity-30 rounded-lg" 
                    onClick={handleclicks} 
                    value="6"
                >6</button>
                <button 
                    className="p-3 bg-white bg-opacity-30 rounded-lg" 
                    onClick={handleclicks} 
                    value="-"
                >-</button>
            </div>
            <div className="grid grid-cols-4 gap-x-2">
                <button 
                    className="p-3 bg-white bg-opacity-30 rounded-lg" 
                    onClick={handleclicks} 
                    value="1"
                >1</button>
                <button 
                    className="p-3 bg-white bg-opacity-30 rounded-lg" 
                    onClick={handleclicks} 
                    value="2"
                >2</button>
                <button 
                    className="p-3 bg-white bg-opacity-30 rounded-lg" 
                    onClick={handleclicks} 
                    value="3"
                >3</button>
                <button 
                    className="p-3 bg-white bg-opacity-30 rounded-lg" 
                    onClick={handleclicks} 
                    value="+"
                >+</button>
            </div>
            <div className="grid grid-cols-4 gap-x-2">
                <button 
                    className="col-span-2 p-3 bg-white bg-opacity-30 rounded-lg" 
                    onClick={handleclicks} 
                    value="0"
                >0</button>
                <button 
                    className="p-3 bg-white bg-opacity-30 rounded-lg" 
                    onClick={handleclicks} 
                    value="."
                >.</button>
                <button 
                    className="p-3 bg-white bg-opacity-30 rounded-lg" 
                    onClick={handleclicks} 
                    value="="
                >=</button>
            </div>
        </div>
    )
}

export default Buttons