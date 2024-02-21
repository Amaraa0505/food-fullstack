// 'use client'
// import axios from "axios";
// import React, { createContext, useState, ReactNode, PropsWithChildren} from "react";
// import { toast } from "react-toastify";
// import { useRouter } from "next/router";

// interface ICategory {
//     _id: string 
//     name: string
//     description: string
//     image: string
// }

// export const CategoryContext = createContext({
    
// });

// const createCategory = async ()=>{
//     const [category, setCategory]=useState()
//    try {
//     const {
//         data: {categories},
//     }=(await axios.get("http://localhost:8080/categories")) as {
//         data:{categories: []}
//     }

//     setCategory(category)
//    } catch (error) {
//     console.log(error)
//    }
// }

// export const CategoryProvider = ({children}:PropsWithChildren) => {
//     const [newCategory, setNewCategory] = useState({
//         name: "",
//         description: "",
//       });
//       return (
//         <CategoryContext.Provider value={{createCategory}}>
//             {children}
//         </CategoryContext.Provider>
//     )

// }
// export default function 

