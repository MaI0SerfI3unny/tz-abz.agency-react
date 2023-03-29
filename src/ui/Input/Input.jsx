import PropTypes from 'prop-types';

const InputComponent = ({type, value, onChangeFunc, placeholder=""}) => {
    return(
        <input 
        type={type}
        value={value}
        onChange={(e) => onChangeFunc(e.target.value)}
        placeholder={placeholder}/>
    )
}

const Input = ({ type, value, onChangeFunc, placeholder="" }) => {
    if(type === "tel"){
        return(
            <div className="input_tel_container">
                <InputComponent 
                    type={type} 
                    value={value} 
                    onChangeFunc={onChangeFunc} 
                    placeholder={placeholder} />
                <p>+38 (XXX) XXX - XX - XX</p>
            </div>
        )
    }
    return(
        <InputComponent 
        type={type} 
        value={value} 
        onChangeFunc={onChangeFunc} 
        placeholder={placeholder} />
    )
}

Input.propTypes = { 
    type: PropTypes.string,
    value: PropTypes.string,
    onChangeFunc: PropTypes.any,
    placeholder: PropTypes.string
}

InputComponent.propTypes = { 
    type: PropTypes.string,
    value: PropTypes.string,
    onChangeFunc: PropTypes.any,
    placeholder: PropTypes.string
}

export default Input