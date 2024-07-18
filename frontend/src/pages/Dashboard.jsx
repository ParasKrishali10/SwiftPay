import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"

export const Dashboard=()=>{
    return <div>
        <Appbar/>
        <div>
            <Balance value={"20000"}/>
        </div>
        <div>
            <Users/>
        </div>
    </div>
}