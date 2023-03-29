import PropTypes from 'prop-types';

const RadioButton = ({id, clickEvent, name}) => {
    return(
        <div key={id} className="custom-radio">
            <label>
                <input type="radio" name="radio"/>
                <div onClick={clickEvent} className="custom-radio__label">
                    <p>{name}</p>
                </div>
            </label>
        </div>
    )
}

RadioButton.propTypes = { 
    id: PropTypes.number,
    clickEvent: PropTypes.func,
    name: PropTypes.string
}

export default RadioButton