var arrt1 = []; //per player (per over [0 to 6])
var arrt2 = [];
var scrt1 = []; //total scores for each player [one,two,three]
var scrt2 = [];
var countt1 = 0; //ball count
var countt2 = 0;
var playerst1 = 10; //number of players
var playerst2 = 10;
var playernumt1 = 1;//dom Id
var playernumt2 = 1;
var t1allscr = []; //all player score
var t2allscr = [];

var reducer = (prev, currentValue) => prev + currentValue;

function team1() {

  var ts2 = localStorage.getItem("ts2"); 
  if(ts2==""){
  document.getElementById("team2").style.visibility="hidden"; //to disable the other team 
  }

  if (countt1 == 60 || playerst1 == 0) {
    localStorage.setItem("ts1",  t1allscr.reduce(reducer));
    localStorage.setItem("arr", scrt1);
    document.getElementById("team2").style.visibility="visible";
    return;
  }

  //creating randum score
  var s = Math.floor(Math.random() * 7);
  arrt1.push(s); // push scores to arr
  t1allscr.push(s);
  document.getElementById("ts1").value = t1allscr.reduce(reducer); //total score
  document.getElementById("t1p" + playernumt1).value += s + " "; //individual score


  //condition to change players (end of over or out)
  if (arrt1.length == 6 || s == 0) {
    scrt1.push([...arrt1]); //individual score pushed to new arr
    scrt1.push("-"); //"-" used to seperate players
    // console.log(scrt1);
    arrt1.splice(0, 6); //clear the arr
    playernumt1++; //dom ID increases
    playerst1 -= 1; // player decreases
  }

  for(i=1;i<11;i++){
    pl=document.getElementById("t1p" + i)
    p=document.getElementById("tp" + i)
    // console.log("gcgc")
    console.log(pl.value)
    if(pl.value !== ""){
      p.style.visibility="visible"
    }
  }

  countt1++;
}


function team2() {

  var ts1 = localStorage.getItem("ts1");
  if(ts1==""){
  document.getElementById("team1").style.visibility="hidden"
}

  if (countt2 == 60 || playerst2 == 0) {
    localStorage.setItem("ts2",  t2allscr.reduce(reducer));
    localStorage.setItem("arr2", scrt2);
    document.getElementById("team1").style.visibility="visible"
    return;
  }

  var s = Math.floor(Math.random() * 7);
  t2allscr.push(s);
  arrt2.push(s);

  document.getElementById("ts2").value = t2allscr.reduce(reducer);
  document.getElementById("t2p" + playernumt2).value += s + " ";

  if (arrt2.length == 6 || s == 0) {
    scrt2.push([...arrt2]);
    scrt2.push("-");
    console.log(scrt2);
    arrt2.splice(0, 6);
    playernumt2++;
    playerst2 -= 1;
  }

  for(i=1;i<11;i++){
    pl=document.getElementById("t2p" + i)
    p=document.getElementById("tp2" + i)
    // console.log("gcgc")
    console.log(pl.value)
    if(pl.value !== ""){
      p.style.visibility="visible"
    }
  }

  countt2++;
}


//timer for the game
var it = 60;
(function() {
  setInterval(() => {
    if (this.it == 0) {
      document.getElementById("timer").innerHTML = "<h1> Time over </h1>";
      return;
    }
    document.getElementById("demo").innerText = this.it--;

    if(it==10){
      alert("only 10sec left")
    }

  }, 1000);

})();


//function to navigate to result page
function result() {
  var t1arr = localStorage.getItem("arr");
  var t2arr = localStorage.getItem("arr2");
  if(it==0){
    if(t1arr=="" || t2arr==""){
      alert("time out you have to start a new game")
    }
  }
  if(t1arr=="" || t2arr==""){
    alert("play the full game to see the winner")
  }
  else{
  window.location.href = "result.html";
}
}
