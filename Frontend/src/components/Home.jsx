import React from 'react'
import { useContext } from 'react'
import {useAuth} from '../context/AuthContext'
import Navbar from '../components/Navbar'

function Home() {
  
  return (
    <div className=''>
      <Navbar/>
      <div className=''> 
      <div className="flex flex-col items-center justify-center min-h-screen text-white dark:text-navy-700 dark:bg-navy-900 bg-gradient-to-r from-navy-600  bg-navy-800">
      <header className="text-4xl font-bold mb-8 mt-10">Diana Sentinal</header>
      <section className="flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold mb-4">Streamline Your Workforce</h2>
        <p className="text-lg mb-8">
          Our employee management software helps you efficiently manage your workforce, automate tasks, and boost productivity. With our intuitive interface, you can easily create and manage teams, add employees, and organize them according to departments, projects, or roles.
        </p>
        <p className="text-lg mb-8">
          Simplify the employee onboarding process by centralizing all employee data in one place. Track employee progress, manage training programs, and monitor performance evaluations. Our software also allows you to assign projects, tasks, and deadlines to individual employees or teams, ensuring efficient project management.
        </p>
        <p className="text-lg mb-8">
          Foster collaboration within your organization with built-in communication and collaboration tools. Employees can exchange messages, share files, and collaborate on projects directly within the software. Stay updated with real-time notifications, task progress, and project status. Additionally, our software provides comprehensive reporting and analytics, giving you insights into employee performance, project timelines, and resource allocation.
        </p>
        <button className="px-6 py-3 bg-white text-navy-700 rounded-full font-bold shadow-lg hover:shadow-xl">
          Get Started
        </button>
      </section>
      <footer className="mt-auto text-sm text-gray-300">
        &copy; 2023 Employee Management Software. All rights reserved.
      </footer>
    </div>
       </div>
     
    </div>
  )
}

export default Home
