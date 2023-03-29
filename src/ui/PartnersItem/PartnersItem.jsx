import PropTypes from 'prop-types';

const PartnersItem = ({ photo, name, position, email, phone}) => {
    return (
        <div className="partners_item">
            <div className="partners_subcontainer">
                <img src={photo} alt={name}/>
                    <p className="name">{name.length > 32 ? name.slice(0,32)+"..."  : name}</p>
                    <p>{position}</p>
                    <p>{email.length > 32 ? email.slice(0,32)+"..."  : email}</p>
                    <p>{phone}</p>
            </div>
        </div>
    )
}

PartnersItem.propTypes = { 
    photo: PropTypes.any,
    name: PropTypes.string,
    position: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string
}


export default PartnersItem