import { useEffect } from "react"
import { redirect, useNavigate } from "react-router-dom"

export default function Home(){
    const navigate = useNavigate();
    useEffect(()=>{
        navigate('/page/1')
    });
    return 'asa'
}

