import PropTypes from 'prop-types';
import PartnersItem from "../ui/PartnersItem/PartnersItem"

const Partners = ({users,setPage, page, visible}) => {
    return(
        <div className="partners_container">
            <h2>Working with GET request</h2>
            <div className="partners_flex">
                <div className="partners_flex_subcontainer">
                    {users?.map((el, key) => 
                        <PartnersItem 
                            key={key}
                            name={el.name}
                            photo={el.photo}
                            email={el.email}
                            phone={el.phone}
                            position={el.position}/>)}
                </div>
            </div>
            {visible? 
                <div className="text-center">
                    <button 
                    className="button-primary" 
                    onClick={() => setPage(page+1)}>
                    Show more</button>
                </div>
            : null}
        </div>
    )
}

Partners.propTypes = { 
    users: PropTypes.array,
    setPage: PropTypes.func,
    page: PropTypes.number,
    visible: PropTypes.bool
}

export default Partners