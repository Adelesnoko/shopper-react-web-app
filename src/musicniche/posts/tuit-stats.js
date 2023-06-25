import React, {useState} from "react";
import {FaRegComment, FaRegShareSquare} from "react-icons/fa";
import {AiOutlineRetweet, AiOutlineHeart, AiFillHeart} from "react-icons/ai";
import {BsHandThumbsDownFill, BsHandThumbsDown} from "react-icons/bs";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";

const TuitStats = ({tuit}) => {
    const [liked, setLiked] = useState(tuit.liked);
    const [likes, setLikes] = useState(tuit.likes);
    const [disliked, setDisliked] = useState(tuit.disliked);
    const [dislikes, setDislikes] = useState(tuit.dislikes);

    const dispatch = useDispatch();

    const handleLike = () => {
        const updatedLikes = liked ? likes - 1 : likes + 1;
        setLikes(updatedLikes);
        setLiked(!liked);
        dispatch(updateTuitThunk({ ...tuit, likes: updatedLikes }));
    };
    const handleDislike = () => {
        const updatedDislikes = disliked ? dislikes - 1 : dislikes + 1;
        setDislikes(updatedDislikes);
        setDisliked(!disliked);
        dispatch(updateTuitThunk({ ...tuit, dislikes: updatedDislikes }));
    };
     
    return (
        <>
            <div className="col-2">
                <FaRegComment />
                <span style={{ marginLeft: "5px" }}>{tuit.replies}</span>
            </div>
            
            <div className="col-2">
                <AiOutlineRetweet />
                <span style={{ marginLeft: "5px" }}>{tuit.retuits}</span>
            </div>
            
            <div className="col-2">
                {liked ? (
                    <AiFillHeart
                        onClick={handleLike}
                        style={{ color: "#F00040" }}
                    />
                ) : (
                    <AiOutlineHeart onClick={handleLike} />
                )}
                <span style={{ marginLeft: "5px" }}>{likes}</span>
            </div>
            
            <div className="col-2">
                {disliked ? (
                    <BsHandThumbsDownFill
                        onClick={handleDislike}
                        style={{ color: "light-grey" }}
                    />
                ) : (
                    <BsHandThumbsDown onClick={handleDislike} />
                )}
                <span style={{ marginLeft: "5px" }}>{dislikes}</span>
            </div>
            
            <div className="col-2">
                <span style={{ marginLeft: "5px" }}>
                <FaRegShareSquare />
                </span>
            </div>
        </>
    );
};
export default TuitStats;