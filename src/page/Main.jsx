import { useState, useEffect } from "react"
import Banner from "../components/Banner"
import Partners from "../components/Partners"
import FormUpload from "../components/FormUpload"
import { getUsers } from "../query/axios"

const Main = () => {
    const [users, setUser] = useState([])
    const [page, setPage] = useState(1)
    const [handleChange, setHandleChange] = useState(false)
    const [visible,setVisible] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getUsers(page)
            if(data.total_pages === page)
            {
                setVisible(false)
            }
            setUser(users.concat(data.users))
         }
         fetchData()
    },[page,handleChange])
    return(
        <div className="max-flex">
            <div className="max_container">
                <Banner/>
                <Partners
                    visible={visible}
                    page={page}
                    setPage={setPage}
                    users={users}/>
                <FormUpload
                    setUser={setUser}
                    handleChange={handleChange}
                    setHandleChange={setHandleChange}/>
            </div>
        </div>
    )
}

export default Main