import logo from '../images/Logo.svg'

const Header = () => {
    return(
        <header>
            <img src={logo} alt="logo" />
            <div style={{
                display: "flex",
                justifyContent:"right",
                width:"100%"
            }}>
                <button className="button-primary">Users</button>
                <button className="button-primary">Sign up</button>
            </div>
        </header>
    )
}

export default Header