import Signup from "@repo/ui/Signup"
import axios from 'axios'
export default function signupPage(){

    return (
      <div>
        < Signup onClick={async ( email,password)=>{
          const response = await axios.post("admin",{email,password})
        }} />
      </div>
    );
}
