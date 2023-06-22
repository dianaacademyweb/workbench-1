import React from "react";

function LeftNav() {
    return (
        <div>
        <nav className="min-h-screen  text-white">
        <ul className="p-4 flex flex-col">
          <button><li className="mb-2 p-4 leftnav">
            <a href="/leader">Our Leader</a>
          </li>
          </button>
          <button><li className="mb-2 p-4 leftnav">
            <a href="/manager">Managers</a>
          </li>
          </button>
          <button><li className="mb-2 p-4 leftnav">
            <a href="/hr">Human Resources</a>
          </li>
          </button>
          <button><li className="mb-2 p-4 leftnav">
            <a href="/administration">Administration</a>
          </li>
          </button>
          <button><li className="mb-2 p-4 leftnav">
            <a href="/technical">Technical</a>
          </li>
          </button>
          <button><li className="mb-2 p-4 leftnav">
            <a href="/sales">Sales</a>
          </li>
          </button>
          <button><li className="mb-2 p-4 leftnav">
            <a href="/creative">Creative Social Media</a>
          </li>
          </button>
        </ul>
      </nav>
      </div>
    )
}
export default LeftNav;