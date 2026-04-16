import React from "react";
export const SJF = ({processes}) => {
    let time=0;
    let completed=[];
    let remaining=[...processes];

    let timeline=[];

    while(remaining.length>0){
        let available=remaining.filter(p=>p.arrival<=time);
        if(available.length===0){
            time=Math.min(...remaining.map(p=>p.arrival)    );
            continue;
        }
        available.sort((a,b)=>a.burst-b.burst);
        let current=available[0];
        let start=time;
        let finish=Number(time)+Number(current.burst);

        completed.push({
            ...current,
            start,
            finish,
            waitingTime:start-current.arrival,
            turnaroundTime:finish-current.arrival
        });
        timeline.push({
            id:current.id,
            start,
            end:finish
        })
        time=finish;

        remaining=remaining.filter(p=>p.id!==current.id);

        }
        return {result:completed,timeline};
    }