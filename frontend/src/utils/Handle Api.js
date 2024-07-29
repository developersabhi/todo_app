import axios from "axios";

const baseUrl = "http://localhost:5000"

const getAllToDO =(setToDo) =>{
    axios.get(baseUrl).then(({data})=>{
        console.log('data ---->', data);
        setToDo(data)
    })
}

const addToDo =(text ,setText ,setToDo)=>{
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
    axios
    .delete(`${baseUrl}/delete`,{ _id})
    .then((data)=>{
        console.log(data)
        getAllToDO(setToDo)
    }).catch((err)=>console.log(err))
}

export {getAllToDO , addToDo , updateToDo , deleteToDo} 