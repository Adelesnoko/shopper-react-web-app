import React from "react";

// const WhoToFollowListItem = () => {
//    const who = [
//     { userName: 'Bob', handle: 'bob', avatarIcon: 'Bob.jpg' },
//     { userName: 'Alice', handle: 'alice', avatarIcon: 'Alice.jpg' },
//     { userName: 'CuteCat', handle: 'cutecat', avatarIcon: 'Cat.jpg' },
//     { userName: 'JS', handle: 'js', avatarIcon: 'JS.jpg' },
//     { userName: 'NodeJS', handle: 'nodejs', avatarIcon: 'NodeJS.jpg' }
//    ];
   
//     return(
//         <ul className="list-group">
//             {who.map((who,index) => (
//                 <li key={index} className="list-group-item">   
//                     <div className="row">
//                         <div className="col-2">
//                             <img className="rounded-circle" height={48} src={`/images/${who.avatarIcon}`}/>
//                         </div>
//                         <div className="col-8">
//                             <div className="fw-bold">{who.userName}</div>
//                             <div>@{who.handle}</div>
//                         </div>
//                         <div className="col-2">
//                             <button className="btn btn-primary rounded-pill float-end">Follow</button>
//                         </div>
//                     </div> 
//                 </li> 
//             ))}
//         </ul>
//     );
// };

const WhoToFollowListItem = (
    {
      who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'Nasa.jpg' }
    }
   ) => {
    return(
        <li className="list-group-item">
        <div className="row">
            <div className="col-2">
                <img className="rounded-circle" height={45} src={`/images/${who.avatarIcon}`} alt="UserImage"/>
            </div>
            <div className="col-8">
                <div className="fw-bold">{who.userName}</div>
                <div>@{who.handle}</div>
            </div>
            <div className="col-2">
                <button className="btn btn-primary rounded-pill float-end">Follow</button>
            </div>
        </div>
        </li>
    );
   };   
export default WhoToFollowListItem;