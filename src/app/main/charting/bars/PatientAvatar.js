import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

export default function PatientAvatar(props){
  return(
    <div className="md:flex">
      <div className="md:w-2/6 mr-12">
          <img className="rounded-lg w-full" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" alt="Woman paying for a purchase" />
      </div>
      <div className="md:1-4/6 mt-4 md:mt-0 md:ml-12">
        <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold mt-8">{props.name}</div>
        <div className="mt-16">
          <span>{props.birthday},</span> &nbsp;<span>{props.age} {props.gender}</span>
        </div>
        <div className="mt-16">
          <span>{props.require}</span>
        </div>
      </div>
    </div>
  )
}