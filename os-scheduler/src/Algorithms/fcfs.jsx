import {useState} from 'react';

export function FCFS({processes}) {
  const sorted= [...processes]
  .map(p=>({
    ...p,
    arrival: Number(p.arrival),
    burst: Number(p.burst),
  })).sort((a,b)=> a.arrival - b.arrival);
  let currentTime = 0;
  let result=[];
  let timeline=[];

    sorted.forEach(p => {
        if(currentTime < p.arrival){
            currentTime=p.arrival;
        }

        const start= currentTime;
        const finish = start + p.burst;
        const waiting = start - p.arrival;
        const turnaround = finish - p.arrival;
        result.push({
            ...p,
            start,  
            finish,
            waitingTime: start - p.arrival,
            turnaroundTime: finish - p.arrival,
        });
        timeline.push({id: p.id,
             start, 
             end: finish});
        currentTime = finish;
    });
    return {result, timeline};
}
 
