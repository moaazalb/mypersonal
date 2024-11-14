import './Info.css'

import React , {useState} from "react";
import { toast } from 'react-toastify';


export default function Info() {
    const [user,setUser] = useState(
      {
        Name: '' ,  Email: '' , Number: ' ', Message: '' 
      }
    )
    
    let name, value
    const data = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]: value});
        console.log('user',user)
    }
    const getData = (e) => {
      const {Name, Email, Number, Message} = user;
      e.preventDefault();
      const option = {
        method: 'POST',
        headers : {
          'Contact-Type' : 'aplication/json'
        },
        body: JSON.stringify({
          Name, Email, Number, Message
        })
      }
      const res = fetch('https://info-865e3-default-rtdb.firebaseio.com/UserData.json',
        option
      )
      if(res)
      {
        toast.success("message  sent")
      } else {
       toast.error("Error!")
      }
    }
   
    
    


     
   



    return (
        <section id="contact" className="contact">
        <div className="row mt-5">

        <div className="col-lg-4">
          <div className="info">
            <div className="address">
              <i className="bi bi-geo-alt"></i>
              <h4>Location:</h4>
              <p>Damascus, Syria</p>
            </div>

            <div className="email ">
              <i className="bi bi-envelope"></i>
              <h4>Email:</h4>
              <p>mohazalbari02@gmail.com</p>
            </div>

            <div className="phone">
              <i className="bi bi-phone"></i>
              <h4>Call:</h4>
              <p>0936862796</p>
            </div>

          </div>

        </div>

        <div className="col-lg-8 mt-5 mt-lg-0">

          <form action="forms" method="post" role="form" className="email-form" >
            <div className="row">
              <div className="col-md-6 form-group">
                <input type="text" name='Name'  className="form-control" placeholder="Your Name"  value={user.Name} onChange={data} autoComplete='' />
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input type="email" name='Email' className="form-control"   placeholder="Your Email"  value={user.Email} onChange={data}/>
              </div>
            </div>
            <div className="form-group mt-3">
              <input type="text" name='Number' className="form-control"  placeholder="phone number"  value={user.Subject} onChange={data}/>
            </div>
            <div className="form-group mt-3">
              <textarea  type="text" name='Message' className="form-control"  placeholder="Enter your Message" value={user.Message} onChange={data}/>
            </div>
           
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit" onClick={getData}>Send Message</button></div>
          </form>

        </div>

      </div>
     </section>




    )
}
