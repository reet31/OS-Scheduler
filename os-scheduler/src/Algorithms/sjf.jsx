import React from "react";
export const SJF = ({processes}) => {
    let time=0;
    let completed=[];
    let remaining=[...processes];

    let timeine=[];

    while(remaining.length>0){
        let available=remaining.filter(p=>p.arrival<=time);
        if(available.length===0){
            time=Math.min(...remaining.map(p=>p.arrival)    );
            continue;
        }
        available.sort((a,b)=>a.burst-b.burst);
        let current=available[0];
        let start=time;
        let finish=time+current.burst;
    }