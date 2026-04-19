export function RR(processes){
    let procs=processes.map(p=>({
        ...p,
        arrival:Number(p.arrival),
        burst:Number(p.burst),
        remaining:Number(p.burst)
    }));
    let time=Math.min(...procs.map(p=>p.arrival));
    let completed=0;
    let queue=[];   
    let n=procs.length;

    let timeline=[];
    let lastProcess=null;

    let added=new Set();

    while(completed<n){
        procs.forEach(p=>{
            if(p.arrival<=time && !added.has(p.id)){
                if(p.arrival<=time && !added.has(p.id)){
                    queue.push(p);
                    added.add(p.id);
                }
            }
        });
        if(queue.length===0){
            time++;
            continue;
        }
        let current=queue.shift();

        if(current.start===undefined){
            current.start=time;
        }
        if(lastProcess !== current.id){
            timeline.push({
                id:current.id,
                start:time
            });
            lastProcess=current.id;
        }
        let runTime=Math.min(2,current.remaining);
        current.remaining-=runTime;
        let startTime=time;
        time+=runTime;

        timeline[timeline.length-1].end=time;
        procs.forEach(p=>{
            if(p.arrival<=time && p.arrival>startTime && !added.has(p.id)){
                queue.push(p);
                added.add(p.id);
            }   
        });
        if(current.remaining>0){
            queue.push(current);
        }   else{
            current.finish=time;
            current.turnaroundTime=current.finish-current.arrival;
            current.waitingTime=current.turnaroundTime-current.burst;
            completed++;
        }   
    }
    return {
        result:procs,
        timeline
    }   

}