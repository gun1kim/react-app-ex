import PropTypes from 'prop-types';

function Input({onChange}) {
    return (
        <input onChange={onChange} type="text" placeholder="값을 입력하세요" />
    )
}

Input.propTypes = {
    onChange: PropTypes.func
}


export default Input;