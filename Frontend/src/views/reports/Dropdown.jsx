import React , {useState} from 'react';


const Dropdown = () => {
    const [isOpen , setIsOpen] = useState(false);




    const handleMenuClick = (pageUrl) => {
        // Open a new page or perform any desired action
        window.open(pageUrl, '_blank');
        setIsOpen(false);
      };
    
  return (
    <div>
        <button onClick={() => setIsOpen(!isOpen)}>Reports</button>
      {isOpen && (
        <ul>
          <li onClick={() => handleMenuClick('/reports/c')}>Page 1</li>
          <li onClick={() => handleMenuClick('/reports/b')}>Page 2</li>
          <li onClick={() => handleMenuClick('/reports/employereport')}>Page 3</li>
        </ul>
      )}
    </div>
  )
}

export default Dropdown;
