import axios from "axios";

const baseUrl = "http://localhost:5000"

const getAllToDO =(setToDo) =>{
    axios.get(baseUrl).then(({data})=>{
        console.log('data ---->', data);
        setToDo(data)
    })
}

const addToDo =(text ,setText ,setToDo)=>{
    if(text ===''){
        alert("Please fill in the blankds");
        return;
    }
    axios.post(`${baseUrl}/save`,{text}).then((data)=>{
        console.log(data)
        setText("")
        getAllToDO(setToDo)
    }).catch((err)=>console.log(err))
}


const updateToDo =(toDoId , text , setToDo , setText, setIsUpdating)=>{
    axios
    .put(`${baseUrl}/update`,{_id:toDoId,text})
    .then((data)=>{
        setText("")
        setIsUpdating(false)
        getAllToDO(setToDo)
    }).catch((err)=>console.log(err))
}


const deleteToDo =(_id , setToDo)=>{
    console.log("=====data==",_id,setToDo);
    const data = {
        _id,
        text: setToDo
    }
    axios
    .post(`${baseUrl}/delete`,data)
    .then((data)=>{
        console.log(data)
        getAllToDO(setToDo)
    }).catch((err)=>console.log(err));
    getAllToDO(setToDo);
}

export {getAllToDO , addToDo , updateToDo , deleteToDo} 