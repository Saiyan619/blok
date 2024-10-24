// "use client"
// import React from "react";
// import {
//   Navbar,
//   Collapse,
//   Typography,
//   IconButton,
// } from "@material-tailwind/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
 
// function NavList() {
//   return (
//     <ul className="text-white my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-medium"
//       >
//         <a href="#" className="flex items-center text-white hover:text-blue-500 transition-colors">
//           Pages
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-medium"
//       >
//         <a href="#" className="flex items-center text-white hover:text-blue-500 transition-colors">
//           Account
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-medium"
//       >
//         <a href="#" className="flex items-center text-white hover:text-blue-500 transition-colors">
//           Blocks
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-medium"
//       >
//         <a href="#" className="flex items-center text-white hover:text-blue-500 transition-colors">
//           Docs
//         </a>
//       </Typography>
//     </ul>
//   );
// }
 
// export function NavbarSimple() {
//   const [openNav, setOpenNav] = React.useState(false);
 
//   const handleWindowResize = () =>
//     window.innerWidth >= 960 && setOpenNav(false);
 
//   React.useEffect(() => {
//     window.addEventListener("resize", handleWindowResize);
 
//     return () => {
//       window.removeEventListener("resize", handleWindowResize);
//     };
//   }, []);
 
//   return (
//     <Navbar className="z-20 absolute bg-black mx-auto w-full px-6 py-3">
//       <div className="flex items-center justify-between text-white">
//         <Typography
//           as="a"
//           href="#"
//           variant="h6"
//           className="mr-4 cursor-pointer py-1.5"
//         >
//           Material Tailwind
//         </Typography>
//         <div className="hidden lg:block">
//           <NavList />
//         </div>
//         <IconButton
//           variant="text"
//           className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
//           ripple={false}
//           onClick={() => setOpenNav(!openNav)}
//         >
//           {openNav ? (
//             <XMarkIcon className="h-6 w-6" strokeWidth={2} />
//           ) : (
//             <Bars3Icon className="h-6 w-6" strokeWidth={2} />
//           )}
//         </IconButton>
//       </div>
//       <Collapse open={openNav}>
//         <NavList />
//       </Collapse>
//     </Navbar>
//   );
// }


import React from 'react'

const NavbarMenu = () => {
  return (
    <div className='bg-green-500 p-5 rounded-md '>
      <div className='flex items-center justify-between'>

        <div>
          <span className='font-bold uppercase'>flashform</span>
        </div>

        <div>
        <ul className='flex items-center uppercase gap-3 text-xs'>
        <li>why flashform</li>
       
      </ul>
        </div>

      </div>
     
    </div>
  )
}

export default NavbarMenu
