 //getting values form local strorage
 var ts1 = localStorage.getItem("ts1");
 var ts2 = localStorage.getItem("ts2");
 var t1arr = localStorage.getItem("arr");
 var t2arr = localStorage.getItem("arr2");

 //reset the local storage
 localStorage.setItem("ts1","");
 localStorage.setItem("ts2","");
 localStorage.setItem("arr","");
 localStorage.setItem("arr2","");

 var reducer = (prev, currentValue) => prev + currentValue;


 //converting string to number
 t1arr = t1arr.split("-"); //split using "-" 
 t1arr.pop(); // remove empty space " "
 t1arr = t1arr.map(el => {
   return el.split(",");
 });

 t2arr = t2arr.split("-");
 t2arr.pop();
 t2arr = t2arr.map(el => {
   return el.split(",");
 });


 //inserting total score to dom
 document.getElementById("total1").innerText += ts1;
 document.getElementById("total2").innerText += ts2;


 var mom1 = []; //man of the match array(contains all the players individual  score)
 var mom2 = [];

 
 //inserting individul score to dom
 for (i = 0; i < t1arr.length; i++) {
   let j = i + 1;

   t1arr[i] = t1arr[i].filter(el => { //rrmove empty string in the array
     if (el != "") {
       return el;
     }
   });

   t1arr[i] = t1arr[i].map(el => parseInt(el)); // convert string into number

   // console.log(t1arr[i]);

   total1 = t1arr[i].reduce(reducer);
   mom1.push(total1);

   t2arr[i] = t2arr[i].filter(el => {
     if (el != "") {
       return el;
     }
   });

   t2arr[i] = t2arr[i].map(el => parseInt(el));

   // console.log(t2arr[i]);

   total2 = t2arr[i].reduce(reducer);
   mom2.push(total2);
   
   //team 01
   document.getElementById("dom" + j).innerText += " " + t1arr[i] ;
   document.getElementById("t1" + j).innerText += total1;
   //team02
   document.getElementById("do" + j).innerText +=" " + t2arr[i]
   document.getElementById("t2" + j).innerText += total2;
 }

 //compare total team score
 ts1 = parseInt(ts1);
 ts2 = parseInt(ts2);
 if (ts1 > ts2) {
   document.getElementById("dom").innerText = "Team1 won the match";
 } else {
   document.getElementById("dom").innerText = "Team2 won the match";
 }


 //getting the index of max number
 const indext1 = mom1.indexOf(Math.max(...mom1));
 const indext2 = mom2.indexOf(Math.max(...mom2));

 //compare the two teams max player score to find man of the match
 if( (Math.max(...mom1)) > (Math.max(...mom2)) ){
    //  console.log("player"+ " "+(indext1+1)+" man of the mach")
     document.getElementById("motm").innerText +="Player"+ " "+(indext1+1)+" in team 1 "
 }
 else{
    //  console.log("player"+ " "+(indext2+1)+" man of the mach")
     document.getElementById("motm").innerText +="Player"+ " "+(indext2+1)+" in team 2"
 }
