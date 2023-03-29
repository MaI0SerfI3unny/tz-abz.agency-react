import { useState,useEffect } from "react"
import PropTypes from 'prop-types';
import { getPosition,createUser } from "../query/axios"
import RadioButton from "../ui/RadioButton/RadioButton"
import Uploader from "../ui/Uploader/Uploader"
import Input from "../ui/Input/Input"
import {ToastContainer} from 'react-toastify';
import { validateForm } from "../services/validateForm";

const FormUpload = ({setHandleChange,handleChange,setUser}) => {
    const [name, setName] = useState("");
    const [disableSend, setDisableSend] = useState(true);
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [position, setPosition] = useState([]);
    const [currentPosition, setCurrentPosition] = useState("");
    const [photo, setPhoto] = useState("");

    const createNewUser = () => {
            createUser({name, email, phone, currentPosition, photo, setHandleChange,handleChange,setUser})
            setEmail("")
            setName("")
            setPhone("")
            setCurrentPosition("")
            setPhoto("")
            setDisableSend(true)
    }
    
    useEffect(()=> {
        const fetchData = async () => {
             const { data } = await getPosition()
             setPosition(data.positions)
          }
          fetchData()
    },[])

    useEffect(() => {
        if(validateForm({name, email, phone, currentPosition, photo})){
            setDisableSend(false)
        }
    },[name, email, phone, currentPosition, photo])

    return(
        <div className="upload_form">
            <h2>Working with POST request</h2>
            <div className="form_upload_container">
                <div className="form_upload_subcontainer">
                    <Input 
                        type="text" 
                        value={name} 
                        onChangeFunc={setName} 
                        placeholder="Your name"/>
                    <Input 
                        type="email" 
                        value={email} 
                        onChangeFunc={setEmail} 
                        placeholder="Email"/>
                    <Input 
                        type="tel" 
                        value={phone} 
                        onChangeFunc={setPhone} 
                        placeholder="Phone"/>
                <div className="radio_container">
                    <p className="title">Select your position</p>
                    {position.map((el,key) => 
                        <RadioButton
                            key={key}
                            id={el.id} 
                            name={el.name} 
                            clickEvent={() => setCurrentPosition(el.id)} />)}
                    <Uploader 
                        photo={photo} 
                        setPhoto={setPhoto} />
                </div>
                <div className="text-center">
                    <button onClick={() => createNewUser()} disabled={disableSend} className="button-primary">Sign up</button>
                </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

FormUpload.propTypes = { 
    setHandleChange: PropTypes.func,
    handleChange: PropTypes.bool,
    setUser: PropTypes.func
}

export default FormUpload;