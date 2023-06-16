import React from 'react'

function CompanyLogin() {
  return (
    <div>
      <form onSubmit={loginUser}> 
            <input type="text" name="username" placeholder="Enter username" className="text-black" />
            <input type="password" name="password" placeholder="enter the password"  className="text-black"/>
            <input type="submit" />

            <h1>
              this is the testing branch i wana add some thing here 
            </h1>
    
    </form>
    </div>
  )
}

export default CompanyLogin
