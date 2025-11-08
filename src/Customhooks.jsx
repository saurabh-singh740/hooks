import {useState} from 'react';


const Usetoggle=()=>{
    

    const[data,setdata]=useState(true);

    function toggle(){
        setdata(!data)
    }
    return [data,toggle]

}

export default Usetoggle;