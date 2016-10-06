var guest = "Sign me as guest";
var cel = prompt ("what is your name" , guest );
if (cel === guest){
alert("Welcome Guest !");
}
else { 
alert("Welcome  " + cel + "!");

}
var cong = "Congratulation " + cel ;
var papers = ["urdu" , "Islamiat" , "math" , "science" ,"bio" ];
papers[00] = parseInt (prompt("Enter Your Urdu Marks" , "your Marks")) ;
papers[01] = parseInt (prompt("Enter Your Islamiat Marks" , "your Marks"));
papers[02] = parseInt (prompt("Enter Your Math Marks" , "your Marks"));
papers[03] = parseInt (prompt("Enter Your Science Marks" , "your Marks"));
papers[04] = parseInt (prompt("Enter Your Bio Marks" , "your Marks"));

var total = papers[00]+papers[01]+papers[02]+papers[03]+papers[04];
var p = (total/500)*100;
if (p <= 90) {
    alert(cong + "  You got 'A' Grade ");
}
 else if (p <= 70) {
    alert(cong + "  You got 'B' Grade ");

}
 else if (p <= 50) {
    alert(cong + "  You got 'C' Grade ");

}
else {
alert("Sorry You Are Fail :( ");}
