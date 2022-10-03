
import {addDoc, collection,deleteDoc,doc,getDocs, orderBy, updateDoc} from 'firebase/firestore';
import {db} from './Firebase';
import { useState,useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import NewTodoForm from './components/NewTodoForm';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  let [isOpen, setIsOpen] = useState(false);

  const [todoArray,setTodoArray]=useState([]);

  

  useEffect(() => {
    
  getTodosFromFirebase();
   
  }, []);
  
const getTodosFromFirebase=async()=>{

              const todoSnapshot= await getDocs(collection(db,"todos"),orderBy('date','desc'));
              
              const tempdoc=todoSnapshot.docs.map((doc)=>{

                console.log(doc.id)
                const tempdoc=doc.data();
                const newdoc={...tempdoc,id:doc.id};
                return newdoc;

              })
              console.log(tempdoc);
              setTodoArray(tempdoc);

}

const addTodoToFirebase= async(newTodo)=>{

                await addDoc(collection(db,"todos"),newTodo);
                setIsOpen(false);
                getTodosFromFirebase();
  

}


const deleteTodoFromFirebase=async(todo)=>{
  // console.log(todo)
            console.log(todo.id)
            if(window.confirm("Are you sure to delete")){
              const todoRef=doc(db,"todos",todo.id);
            
              await deleteDoc(todoRef).then(()=>
              {
                toast.success("Todo Deleted")
                getTodosFromFirebase();
              })
            
            
            }
            else{
              toast("delete cancelled");
            }
                
}

async function updateDoneToFirebase(todo){
  console.log("updated")
  await updateDoc(doc(db,"todos",todo.id),
    {...todo,done:true})
    getTodosFromFirebase().then(()=>{toast.success("Todo Completed")})
  }

 async function updateDataToFirebase(newtodo){
  console.log(newtodo.id)
  await updateDoc(doc(db,"todos",newtodo.id),newtodo)
  console.log(newtodo)
  getTodosFromFirebase().then(()=>{toast.success("Updated")})
 }
  





  return (
    <div>
       <Toaster />
      <Header setIsOpen={setIsOpen} isOpen={isOpen}/>
      <ToDoList todoArray={todoArray} deleteTodoFromFirebase={deleteTodoFromFirebase} updateDoneToFirebase={updateDoneToFirebase} updateDataToFirebase={updateDataToFirebase}/>
      <NewTodoForm isOpen={isOpen} setIsOpen={setIsOpen}  todoArray={todoArray} addTodoToFirebase={addTodoToFirebase}  />
      
    </div>
  );
}

export default App;
