import { useEffect, useState } from "react"
import axios from 'axios';

export default function Json() {
    const [data,setData] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:8001/Books')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error from AXIOS : " + error);
            })
    },[])
    return (
      <div>
        <h4>{JSON.stringify(data, null, 1)}</h4>
      </div>
    )
}