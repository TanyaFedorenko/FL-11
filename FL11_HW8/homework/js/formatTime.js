function formatTime (m){
    let day =Math.floor(m/1440);
    let hour=Math.floor((m-day*1440)/60);
    let min = Math.floor(m-hour*60-day*1440);
return (day +' day(s) '+ hour+ ' hour(s) '+min+' minute')
}
formatTime(120);
formatTime(59);
formatTime(3601); 
                                              