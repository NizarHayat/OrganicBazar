import axios from "axios"
import {useState,useEffect} from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"



const UpdateContact=()=>{
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    message:""
  })
  const {id}=useParams();
  const navigate=useNavigate();
  const fetchData=async()=>{
const response=await axios.get(`http://localhost:8000/contact/${id}`)
const data=await response.data.contact;
setFormData({
  name:data.name,
  email:data.email,
  message:data.message
})
   }
   useEffect(()=>{
    fetchData();
   },[])

   const onSubmit=async(e)=>{
    e.preventDefault();
    const data=await axios.put(`http://localhost:8000/contact/${id}`,formData)
    toast.success("Contact Updated Successfully!")
    navigate("/contact")

   }
   const onChange=(e)=>{
setFormData({...formData,[e.target.name]:e.target.value})
   }
   const {name,email,message}=formData;
    return (
      <>
      <form onSubmit={onSubmit}>
      <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Name:</label>
      <input type="text" name="name" value={name} class="form-control" onChange={onChange} id="exampleFormControlInput1" placeholder="Enter your name"/>
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Email:</label>
      <input type="email" name="email" value={email} class="form-control" onChange={onChange} id="exampleFormControlInput1" placeholder="Enter your email"/>
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Message:</label>
      <textarea name="message" value={message} class="form-control" onChange={onChange} id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <button className='btn btn-primary'>Submit</button>
    </form>
    </>
    )
}
export default UpdateContact