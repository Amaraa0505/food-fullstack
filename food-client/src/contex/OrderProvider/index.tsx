// "use client";
// import React, {
//   PropsWithChildren,
//   createContext,
//   useEffect,
//   useState,
// } from "react";

// import axios from "axios";

// interface IPayment {
//     paymentAmount: number;
//     status: "paid" | "unpaid";
//     paidDate: Date;
//     createdAt: Date;
//   }
  
//   interface IAddress {
//     khoroo: string;
//     duureg: string;
//     buildingNo: string;
//     info?: string;
//   }
  
//   interface IDelivery {
//     status: "Pending" | "Progressing" | "Delivered";
//     deliveredAt: Date;
//   }
// interface IOrder {
//     _id: string;
//     orderNo: string;
//     payment: IPayment;
//     address: IAddress;
//     delivery: IDelivery;
//   }



// export const OrderContext = createContext<IDBCursorDirection>(
//     {} as IOrderContext
// )


// export const OrderProvider = ({children}:PropsWithChildren)=>{
//     const [order, setOrder]=useState([])



// const getOrder = async()=>{
//     try {
//         const {
//             data:{order}
//         }=(await axios.get("http://localhost:8080/order"))as {
//             data:{order:[]}
//         }
//         setOrder(order)
//     } catch (error) {
//        console.log("zahialhad aldaa garlaa")
//     }
// }

// useEffect(()=>{
//     getOrder()
// }, [])



// return (
//     <OrderContext.Provider value={{order}}>
//         {children}
//     </OrderContext.Provider>
// )
// }