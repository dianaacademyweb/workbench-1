// import React from 'react';
// import { Transition } from '@headlessui/react';
// import { CheckIcon } from '@heroicons/react/solid'; // Import from '@heroicons/react/solid' for Heroicons v2

// const EmployeeOnboarding = () => {
//   const [isOnboardingComplete, setIsOnboardingComplete] = React.useState(false);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <h1 className="text-4xl font-bold mb-6">Employee Onboarding</h1>
//       <Transition
//         show={!isOnboardingComplete}
//         enter="transition-opacity duration-500"
//         enterFrom="opacity-0"
//         enterTo="opacity-100"
//         leave="transition-opacity duration-500"
//         leaveFrom="opacity-100"
//         leaveTo="opacity-0"
//       >
//         <div className="p-8 bg-white rounded-lg shadow-lg">
//           <h2 className="text-xl mb-4">Welcome to our company!</h2>
//           <p className="text-gray-700 mb-4">
//             We are excited to have you on board. Here's what you can expect during the onboarding process:
//           </p>
//           <ul className="list-disc pl-6 mb-4">
//             <li>Introduction to the team and company culture</li>
//             <li>Training sessions on our products and services</li>
//             <li>Review of company policies and procedures</li>
//           </ul>
//           <button
//             className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//             onClick={() => setIsOnboardingComplete(true)}
//           >
//             Get Started
//           </button>
//         </div>
//       </Transition>
//       <Transition
//         show={isOnboardingComplete}
//         enter="transition-opacity duration-500"
//         enterFrom="opacity-0"
//         enterTo="opacity-100"
//         leave="transition-opacity duration-500"
//         leaveFrom="opacity-100"
//         leaveTo="opacity-0"
//       >
//         <div className="flex items-center space-x-4 p-4 bg-green-500 text-white rounded-lg mt-4">
//           <CheckIcon className="h-6 w-6" />
//           <span>Employee onboarding complete!</span>
//         </div>
//       </Transition>
//     </div>
//   );
// };

// export default EmployeeOnboarding;
