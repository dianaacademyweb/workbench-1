import React from "react";

const LeftNav=()=>{
    return (
        <div>
        <nav className="min-h-screen text-center text-white">
        <ul className="p-4 flex flex-col gap-4">
          <li className="mb-2 p-4 leftnav">
            <a href="/leader">Our Leader</a>
          </li>
          
          <li className="mb-2 p-4 leftnav">
            <a href="/manager">Managers</a>
          </li>
          
          <li className="mb-2 p-4 leftnav">
            <a href="/hr">Human Resources</a>
          </li>
          
          <li className="mb-2 p-4 leftnav">
            <a href="/administration">Administration</a>
          </li>
          
          <li className="mb-2 p-4 leftnav">
            <a href="/technical">Technical</a>
          </li>
          
          <li className="mb-2 p-4 leftnav">
            <a href="/sales">Sales</a>
          </li>
          
          <li className="mb-2 p-4 leftnav">
            <a href="/creative">Creative Social Media</a>
          </li>
          
        </ul>
      </nav>
      </div>
    )
}
export default LeftNav;