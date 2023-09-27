import PropTypes from 'prop-types';
import './Button.css';
function Button({onClick}) {
    // state = {
    //     counter: 0,
    // }
    // onClick = () => {
    //     this.setState(cur => ({counter: cur => (cur.counter + 1)}));
    // }
    return (
        <button className="btn" onClick={onClick}>
            Click
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func
}

export default Button;
