setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);
// setInterval(() => {
//     a = new Date();
//     date = a.toLocaleDateString(undefined, options);
//     time = a.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric',second:'numeric', hour12: true })
//     document.getElementById('time').innerHTML = time;
//     document.getElementById('date').innerHTML = date;
// }, 1000);