// ! conditional rendering: 1

// export default function Todo ({task,isDone}){
//     if(isDone){
//         return(
//             <div>
//                 <ul>
//                     <li>Done: {task}</li>
//                 </ul>
//             </div>
//         )
//     }
//     else{
//         return(
//             <div>
//                 <ul>
//                     <li>Pending: {task}</li>
//                 </ul>
//             </div>
//         )
//     }
// }

// !conditional rendering: 2

// export default function Todo ({task,isDone,time=0}){

//     if(isDone){
//         return(
//             <div className="singer">
//                 <ul>
//                     <li>Done: {task} duration: {time}</li>
//                 </ul>
//             </div>
//         )
//     }
//   return <li>To be done : {task}</li>
// }

// ! conditional rendering: 3

// export default function Todo ({task,isDone, time=0}){

//    return isDone? <li>Done: {task} duration: {time}</li>: <li>not done : {task}</li>;
// }

// ! conditional rendering : 4 &&

// export default function Todo({ task, isDone, time = 0 }) {
//   return (isDone && <li>done {task} time{time} </li> );
// }

// ! conditional rendering : 5 ||

// export default function Todo({ task, isDone, time = 0 }) {
//    return (isDone || <li>not done {task} time{time} </li> );
//  }


// ! conditional renderring : 6

export default function Todo ({task,isDone,time}){
    const dispalyTime = time ? time : 100;
   let listItem;
       if(isDone){
           listItem = <li>Done: {task} {dispalyTime}</li>
       }
       else{
        listItem = <li>Pending: {task}</li>
       }
       return listItem
   }


