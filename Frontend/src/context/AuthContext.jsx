import React ,{createContext , useState , UseEffect} from 'react'
import jwt_decode from "jwt-decode";


const AuthContext = createContext ()

export default AuthContext;


export const AuthProvider = ({children}) => {
    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    let [loading, setLoading] = useState(true)

    let loginUser = async(e)=> {
        e.preventDefault()
        let response =await fetch('http://127.0.0.1:8000/api/token/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'

            },
            body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
        })
        let data = await response.json()
        console.log('response', response)
        if (response.status ===200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))

        }
        else{
            alert ('something went wrong')
        }


    }

    let contextData = {
        loginUser:loginUser
    }
    return(
       <AuthContext.Provider value ={contextData}>
        {children}
       </AuthContext.Provider>
    )
}
    
