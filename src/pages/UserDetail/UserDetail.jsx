import { useEffect, useState } from 'react';
import { useParams ,useNavigate } from "react-router";


function   UserDetail(props) {




  return (
    <div className="max-w-[800px] flex flex-col justify-start items-start text-left gap-5 m-auto">
     
      <div>
         <h1>{props.user.firstName} {props.user.lastName}</h1>
      </div>
      <div>
        <img src={props.user.image} className="w-[400px] rounded-lg"></img>
        <h2>Details : </h2> 
        <ul>
            <li>Difficulty : {props.user.age}</li>
            <li>Cooking Time : {props.user.gender}</li>
            <li>Preparation Time : {props.user.email}</li>
            <li>Servings : {props.user.phone}</li>
            <li>Difficulty : {props.user.username}</li>
            <li>Cooking Time : {props.user.birthDate}</li>
            <li>Preparation Time : {props.user.height}</li>
            <li>Servings : {props.user.weight}</li>
        </ul>
      </div>
    </div>
  )
}

export default UserDetail