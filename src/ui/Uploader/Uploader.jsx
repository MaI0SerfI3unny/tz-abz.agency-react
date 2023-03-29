import PropTypes from 'prop-types';
import {toast} from 'react-toastify';

const Uploader = ({ setPhoto, photo }) => {

    const changePhotoValue = (e) => {
        const file = Math.round((e.size / 1024));
        if(1024 * 5 <= file){
            toast.error("Cann`t upload a file less than 5mb")
        }else{
            setPhoto(e)
        }
    }
    return (
        <div className="file-uploader">
            <input type="file" name="file" onChange={(e) => changePhotoValue(e.target.files[0])} id="file" className="inputfile" accept="image/jpeg, image/png image/jpg"  />
            <label htmlFor="file">
                <div className="file_button">
                    Upload
                </div>
                <div className="file_panel">
                    {photo ? photo.name.slice(0,28) : "Upload your photo"}
                </div>
            </label>
        </div>
    )
}

Uploader.propTypes = { 
    setPhoto: PropTypes.func,
    photo: PropTypes.any,
}


export default Uploader