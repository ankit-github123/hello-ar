import React, { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import {faUserPlus,faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";
import "./modal.css"
export default function AddUser() {
    const [namelist,setnamelist] = useState([])
    const [uidlist,setuidlist] = useState([])
    const [datelist,setdatelist] = useState([])
    const [rolelist,setrolelist] = useState([])
    const [toggle,settoggle] = useState(false)
  const [open, setopen] = useState(false);
  const [user,setUser] =useState({
      uid:"",
      name:"",
      role:"Admin"
  })
  useEffect(()=>{
    let str = localStorage.getItem("uids")
    setUser({...user,name:"",role:"Admin"})
    console.log(str);
     if(str!=="") {
        setuidlist(JSON.parse(str))
        setnamelist(JSON.parse(localStorage.getItem("names")))
        setrolelist(JSON.parse(localStorage.getItem("roles")))
        setdatelist(JSON.parse(localStorage.getItem("dates")))
         console.log(namelist,rolelist);
     }

  },[toggle])
  const onUserAdd = async() => {
      if (user.name !=="" && user.role!=="") {
        let uuid=uuidv4()
        let tempUID = uidlist;
        let tempname = namelist
        let temprole = rolelist
        let tempdate = datelist
        if (tempUID===undefined || tempUID===null) {
            tempUID = [];
             tempname = []
             temprole = []
             tempdate = []
        }
        
        tempUID.push(uuid)
        tempname.push(user.name)
        temprole.push(user.role)
        tempdate.push(new Date())
        console.log(uuid,uidlist,tempname,"sdffffffff");
        localStorage.setItem("uids",JSON.stringify(tempUID))
        localStorage.setItem("names",JSON.stringify(tempname))
        localStorage.setItem("roles",JSON.stringify(temprole))
        localStorage.setItem("dates",JSON.stringify(tempdate))
        settoggle(!toggle)
        onCloseModal()
        setUser({...user,uid:uuid,name:"",role:"Admin"})
      }    
  }
  const onUserDelete = (index) => {
      let tempUID = uidlist;
      let tempname = namelist
      let temprole = rolelist
      let tempdate = datelist
      
      tempUID.splice(index,1)
      tempname.splice(index,1)
      temprole.splice(index,1)
      tempdate.splice(index,1)
      localStorage.setItem("uids",JSON.stringify(tempUID))
      localStorage.setItem("names",JSON.stringify(tempname))
      localStorage.setItem("roles",JSON.stringify(temprole))
      localStorage.setItem("dates",JSON.stringify(tempdate))
      settoggle(!toggle)
  }
  const onOpenModal = () => {
    setopen(true);
  };

  const onCloseModal = () => {
    setopen(false);
  };
  return (
      <div>
    <div className="adduser_container">
      <Modal classNames={"modal_table"} open={open} onClose={onCloseModal}>
        <div className="modal_container">
            <div className="modal_left">
            <div style={{display:"flex",justifyContent:"center",margin:"20px"}}><FontAwesomeIcon icon={faUserPlus} style={{color:"white"}} size={'6x'} /></div>
            <p>Magna Lorem aliqua incididunt nisi sit culpa non cupidatat eu adipisicing nostrud nostrud.Id ad in do esse ut laborum sit mollit nulla tempor minim. Nisi irure sint eu cupidatat anim laborum. Laboris velit cillum esse culpa eiusmod commodo voluptate ipsum voluptate velit ea et elit.</p>
            </div>
            <div className="modal_right">
                <h2>User Information</h2>
                <div className="email_container">
                <h6>Email Id of the User</h6>
                <input value={user.name} onChange={e=>setUser({...user,name:e.target.value})} className="email_input" placeholder="Email" />
                </div>
                <div>
                <h6>Role</h6>
                <select onChange={e =>setUser({...user,role:e.target.value})} className="select_option" name="role">
                    <option value="Admin">Admin</option>
                    <option value="Owner">Owner</option>
                    <option value="Sales">Sales</option>
                    <option value="Customer">Customer</option>
                    </select>
                </div>
                
                    <div className="button_holder">
                        <button onClick={onCloseModal} style={{background:"#ffbb41"}} className="button_common">Cancel</button>
                        <button onClick={onUserAdd}  style={{background:"#57ca85",marginLeft:"35px"}} className="button_common">Add</button>
                    </div>
                
            </div>
        </div>
      </Modal>
      <button onClick={onOpenModal} className="add_user_button">
        Add User
      </button>
    </div>
    <div>
        <table class="table table_width">
  <thead class="thead-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">User</th>
      <th scope="col">Last Signed In</th>
      <th scope="col">Role</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
      {uidlist!==null?uidlist.map((item,index)=> {
          return <tr>
          <th scope="row">{index+1}</th>
          <td>{namelist[index]}</td>
          <td>{datelist[index]}</td>
          <td>{rolelist[index]}</td>
          <td><span onClick={()=>onUserDelete(index)}  className="delete_icon"><FontAwesomeIcon icon={faTrashAlt} style={{color:"white",cursor:"pointer",fontSize:"15px"}} size={'md'} /></span></td>
        </tr>
      }):null}
    
  
  </tbody>
</table>
    </div>

    </div>
  );
}
