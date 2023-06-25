import React from "react";
import {useDispatch} from "react-redux";
import {TbDiscountCheckFilled} from "react-icons/tb";
import {BsDot} from "react-icons/bs";
import {BiX} from "react-icons/bi"
import TuitStats from "./tuit-stats";
// import { deleteTuit } from "../reducers/tuits-reducer";
import {deleteTuitThunk} from "../services/tuits-thunks";


const TuitItem = ({tuit}) =>{
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    
    return(
        <>
            <li className="list-group-item">
                    <div className="row">
                        <div className="col-1 mt-1">
                            {/* <img className="rounded-circle" width={50} src={require(`../images/${tuit.image}`)} alt="TuitImage"/> */}
                            {tuit.image && (
                                <img
                                    className="rounded-circle"
                                    width={50}
                                    src={require(`../images/${tuit.image}`)}
                                    alt="TuitImage"
                                />
                            )}
                        </div>
                        <div className="col-11">
                            <div style={{ display: "flex", alignItems: "center" }}>
                                
                                <strong>{tuit.userName}</strong>{" "}
                                <span style={{ color: "#0064C8", marginLeft: "5px" }}>
                                <TbDiscountCheckFilled />
                                </span>
                                <span style={{ marginLeft: "5px" }}>{tuit.handle}</span>
                                <span style={{ marginLeft: "5px" }}><BsDot /></span>
                                <span style={{ marginLeft: "5px" }}>{tuit.time}</span>
                                <div className="ms-auto">
                                    <button
                                        onClick={() => deleteTuitHandler(tuit._id)}
                                        className="btn"
                                        title="Delete Tuit"
                                    >
                                        <BiX />
                                    </button>
                                </div>
                            </div>
                            <div >{tuit.tuit}</div>
                            <div className="row mt-3" >
                                <TuitStats tuit={tuit}/>
                            </div>
                        </div>
                    </div>
            </li>
        </>
    );
};
export default TuitItem;

