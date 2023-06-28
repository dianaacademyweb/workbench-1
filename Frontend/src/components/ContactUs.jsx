import React , {useState}from "react";
import homeimage from "../assets/Images/layouts/home.jpg";

import '/src/App.jsx';
const ContactUs =()=>{
    const [selectedItem, setSelectedItem] = useState('');
    const [selectedSubItem, setSelectedSubItem] = useState('');
    
    const mainListItems = [
        {
          label: 'HR Policies and Procedures',
          subItems: [
            'Leave Policies',
            'Expense reimbursement procedures',
            'Code of conduct',
            'Benefits and Compensation'
          ]
        },
        {
          label: 'Health insurance',
          subItems: [
            'Retirement plans',
            'Paid time off',
            'Salary inquiries'
          ]
        },
        {
          label: 'Time-Off Requests',
          subItems: [
            'Vacation requests',
            'Sick leave requests',
            'Personal day requests',
            ' Time-off request status',
            'Payroll and Taxes'
          ]
        },
        {
            label: 'Paycheck inquiries',
            subItems: [
              'Deductions and taxes',
              'Payroll processing issues',
              'Training and Development'
            ]
          },
          {
            label: 'Available training programs',
            subItems: [
              ' Professional development opportunities',
              'Course or workshop inquiries',
              ' Performance Management'
            ]
          },
          {
            label: 'Performance evaluations',
            subItems: [
              ' Goal-setting inquiries',
              'Performance metrics',
              'Feedback during reviews',
              'IT and Technical Support'
            ]
          },
          {
            label: 'IT and Technical Support',
            subItems: [
              'Computer hardware issues',
              'Equipment malfunctions',
              'Hardware upgrades or replacements',
              'Peripheral device troubleshooting (e.g., printer, scanner)'

            ]
          },
          {
            label: 'Software problems',
            subItems: [
              'Application errors or crashes',
              'Software compatibility issues',
              'Software license inquiries',
              'Software updates or patches'
            ]
          },
          {
            label: 'Network connectivity',
            subItems: [
              'Wi-Fi or network',
              'connectivity problems',
              'connectivity problems',
              'VPN (Virtual Private Network) access issues',
              'Firewall or security-related concerns'
            ]
          },
          {
            label: 'Application access',
            subItems: [
              'Login or password reset requests',
              'Account permissions or access issues',
              'Assistance with specific software or tools',
              'Accessing shared network drives or files'
            ]
          },
          {
            label: 'Email and Communication',
            subItems: [
              'Email setup or configuration',
              'Email account access issues',
              'Email delivery problems',
              'Troubleshooting instant messaging or video conferencing tools'
            ]
          },
          {
            label: 'Cybersecurity',
            subItems: [
              'Phishing or suspicious email reporting',
              'Malware or virus detection and removal',
              'Data breaches or data loss incidents',
              'Security awareness training inquiries'
            ]
          },
          {
            label: 'Hardware and Software Procurement',
            subItems: [
              'Requesting new hardware or software',
              'Software license renewal or procurement',
              'Equipment or software purchasing inquiries',
              'Compatibility and system requirements'
            ]
          },
          {
            label: 'Data Backup and Recovery',
            subItems: [
              'Data backup procedures and schedules',
              'Data backup procedures and schedules',
              'File restoration requests',
              'Data loss prevention measures'
            ]
          },
          {
            label: 'Workplace conflicts',
            subItems: [
              'Grievances',
              'Disciplinary actions',
              'Harassment issues',
              'Onboarding and New Hire Information'
            ]
          },
          {
            label: 'Onboarding process inquiries',
            subItems: [
              'Required documentation',
              'Orientation programs',
              'General Inquiries'
            ]
          },
          {
            label: 'Company events',
            subItems: [
              ' Required documentation',
              ' Community engagement initiatives',
              ' Miscellaneous questions'
            ]
          },
          
      ];
    
      const handleMainItemChange = (event) => {
        setSelectedItem(event.target.value);
        setSelectedSubItem('');
      };
    
      const handleSubItemChange = (event) => {
        setSelectedSubItem(event.target.value);
      };
      
    return(
        <div className="  bg-auto sm:bg-cover md:bg-contain lg:bg-auto xl:bg-cover  mx-auto "style={{ backgroundImage: `url(${homeimage})` }}> 
       <br />
        <div className="container  mx-auto md:px-6">

  <section className="mb-32">
    <div
      className="relative h-[230px] overflow-hidden ">
    </div>
    <div className=" md:px-12">
      <div
        className="block rounded-lg bg-[hsla(0,0%,100%,0.7)]  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
          
        <div className=" grid gap-x-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="mx-auto  text-center lg:mb-0 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" className=" mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <h6 className="font-medium original-element">Unites Kingdom</h6>
            <div className="new-element">Level 20, 40 Bank street,London, E14 5NR,United Kingdom.</div>
            
            
          </div>
          
          <div className="mx-auto  text-center lg:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <h6 className="font-medium original-element">United States</h6>
            <div className="new-element">Sutton #28/29-H, 959, 1st Ave,New York, NY.10022,United State Of America. </div>
          </div>
          <div className="mx-auto  text-center lg:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <h6 className="font-medium original-element">Singapore</h6>
            <div className="new-element">10 Anson Road,#11-20 International Plaza,Singapore. 079903</div>
          </div>
          <div className="mx-auto text-center md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <h6 className="font-medium">+44 7441441208</h6>
          </div>
         
        </div>
        <h1 className="text-center font-medium"><span className="text-navy-600">ASK OUR </span>HR EXPERTS</h1>
        <div className="mx-auto max-w-[700px]">
          <form>
            <div className="relative mb-6">
            <label
                
                for="exampleInput90">Name
              </label>
              <input type="text"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleInput90" placeholder="Name" />
             
            </div>

            <div className="relative mb-6" >
              <label
                
                for="exampleInput91">Email address
              </label><input type="email"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleInput91" placeholder="Email address" />
              
            </div>
            <div className="relative mb-6" >
           
           <label htmlFor="mainItems">Select Enquiry Type : </label>
        <select
          id="mainItems"
          value={selectedItem}
          onChange={handleMainItemChange}
        >
          <option value="">Select an option</option>
          {mainListItems.map((item, index) => (
            <option key={index} value={item.label}>{item.label}</option>
          ))}
        </select>
            
        {selectedItem && (
          <div className="pt-2">
            <label htmlFor="subItems">Choose Detailed Enquiry : </label>
            <select
              id="subItems"
              value={selectedSubItem}
              onChange={handleSubItemChange}
            >
              <option value="">Select a sub item</option>
              {mainListItems.find(item => item.label === selectedItem)?.subItems.map((subItem, index) => (
                <option key={index} value={subItem}>{subItem}</option>
              ))}
            </select>
            </div>
           )}
            </div>
     
            <div className="relative mb-6" ><label for="exampleFormControlTextarea1" 
                className="">Message</label>
              <textarea
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlTextarea1" rows="2" placeholder="Your message"></textarea>
              
            </div>
                
            <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
              <input
                className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="checkbox" value="" id="exampleCheck96" checked />
              <label className="inline-block pl-[0.15rem] hover:cursor-pointer" for="exampleCheck96">
                Send me a copy of this message
              </label>
            </div>

            <button type="button" data-te-ripple-init data-te-ripple-color="light"
              className="inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0">
              Send
            </button>

          </form>
        </div>
      </div>
    </div>
    
  </section>
  
  

</div>
<br />

</div>



    )
}

export default ContactUs;