export function SRTF({processes}) {
    let procs=processes.map(p=>({
        ...p,
        arrival:Number(p.arrival),
        burst:Number(p.burst),
        remaining:Number(p.burst)
    }));
    let time=Math.min(...procs.map(p=>p.arrival));
    let completed=[];
    let n=procs.length;

    let timeline=[];

    let lastProcess=null;
    while(completed.length<n){

        let available=procs.filter
        (p=>p.arrival<=time && p.remaining>0);

        if(available.length===0){
            time=Math.min(...procs.filter(p=>p.remaining>0).map(p=>p.arrival));
            continue;
        }
        available.sort((a,b)=>{
            if(a.remaining===b.remaining){
                return a.arrival-b.arrival;
            }
            return a.remaining-b.remaining;
    });
        let current=available[0];

        if(lastProcess !== current.id){
            timeline.push({
                id:current.id,
                start:time
            });
            lastProcess=current.id;
        }
        current.remaining--;
        time++;
        if(current.remaining===0){
            current.finish=time;
            current.turnaroundTime=current.finish-current.arrival;
            current.waitingTime=current.turnaroundTime-current.burst;
            completed++;
        }
        
        timeline[timeline.length-1].end=time;
    }
    return {
        result:procs,
        timeline
    }
    }