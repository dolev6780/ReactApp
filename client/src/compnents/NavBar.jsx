import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function NavBar(props) {
    const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center p-4 font-bold bg-blue-300">
      <div>
        <button onClick={()=>(navigate('/'))}>Logo</button>
        <p>Welcome {props.username === "" ? "" : props.username}</p>
      </div>
      <div className="flex w-full justify-end">
        <button className="p-4 hover:text-white" onClick={()=>navigate('/signin')}>sign in</button>
        <button className="p-4">sign up</button>
        <button className="p-4">contact us</button>
      </div>
    </div>
  );
}
