import './ShuffleButton.css'

function ShuffleButton (props) {

    return (
        <button onClick={props.onClick} className='ShuffleButton'>
            shuffle
        </button>
    )

}

export default ShuffleButton;