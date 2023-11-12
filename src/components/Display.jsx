import PropTypes from 'prop-types';

Display.propTypes = {
    value: PropTypes.any
}

function Display(props) {

    return (
        <>
            <input 
                name='display' 
                value={props.value} 
                type="text" 
                disabled
                className='w-full rounded-lg bg-transparent ring-1 ring-white ring-opacity-50 p-3 text-sm md:text-base' 
            />
        </>
    )
}
  
export default Display
  