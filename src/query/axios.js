import axios from "axios";
import { toast } from "react-toastify";

const getToken = async () => {
    return await axios.get(process.env.REACT_APP_URL_REQUEST + "/api/v1/token")
}

export const getPosition = async() => {
    return await axios.get(process.env.REACT_APP_URL_REQUEST + "/api/v1/positions");
}

export const getUsers = async(page = 1, pageSize = 6) => {
    return await axios.get(process.env.REACT_APP_URL_REQUEST + `/api/v1/users?page=${page}&count=${pageSize}`);
}

export const createUser = async(info) => {
    const { name, email, phone, currentPosition, photo, handleChange, setHandleChange,setUser} = info
    const { data } = await getToken();
    
    let formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('position_id', currentPosition);
    formData.append('photo', photo);
    const config = {     
        headers: { 
            'content-type': 'multipart/form-data',
            'Token': data.token
        }
    }
    axios.post(process.env.REACT_APP_URL_REQUEST+"/api/v1/users" , formData, config)
        .then((res) => {
            if(res.status === 201){
                toast.success("User has been created")
                setUser([])
                setHandleChange(!handleChange)
            }
        })
}