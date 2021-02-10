'use strict' ;
let userName = prompt ('whats your name please ' + ' name');
alert ('welcom in my guessing game ' + userName );
let score=0;

let myName = prompt( 'my name is Walaa ,do you agree thats true ?' + 'y/n');
if ( myName.toLowerCase() === 'y' || myName.toLowerCase() ==='yes')
{
  // console.log ( myName)
  alert ('true answer ,good ');
  score++;
}
else {
  alert( 'its wrong you dont know me !'); }

let myMajor = prompt ('Am I  a civil engineer  '+ 'y/n');
if (myMajor.toLowerCase() === 'n' || myMajor.toLowerCase() === 'no' )
{
  // console.log (myMajor)
  alert( 'good answer ');
  score++;
}
else { alert('its wrong you dont know me !');}

let mySituation =prompt ( 'Am I single ?'+ 'y/n');

if (mySituation.toLowerCase() === 'no' || mySituation.toLowerCase()=== 'n' )
{
  // console.log (mySituatio)
  alert( 'good answer ');
  score++;
}
else { alert('its wrong you dont know me !');}

let campus = prompt ('do I prefer to be in campus?' + 'y/n');

if (campus.toLowerCase() === 'no' || campus.toLowerCase() === 'n' )
{
  // console.log (campus)
  alert( 'good answer ');
  score++;
}
else { alert('its wrong you dont know me !');}

let delecious = prompt ('do I like shawerma ?' + 'y/n');

if (delecious.toLowerCase() === 'y' || mySituation.toLowerCase() === 'yes' )
{
  // console.log (delecious)
  alert( 'good answer ');
  score++;}

else { alert('its wrong you dont know me !');}

let age= prompt( 'what is my age ?');

for (let i=1; i < 4 ; i++) {
  age=parseInt(age);
  if (age === 27 ){
    alert ('thats true');
    score++;
    break;}
  if (age > 27){
    age = prompt ('too high ') ;
  }
  else { age = prompt('too low ');}

}
alert ('my old is 27 ');



let paint=['red','white','mouve'];
console.log (paint);
let favColor=prompt('enter my fav color ');
favColor=favColor.toLowerCase();
for (let i=1; i<6 ;i++) {
  let check=0;
  // eslint-disable-next-line no-empty
  for (let index =0 ;index<3 ;index++){
    if (paint[index]===favColor){alert('true one');
      score++;
      check++;
      break;}
  }

  if (check===1){break;}
}
alert ('all true answers '+ paint);

alert ('so your score out of 7 is ' +score);

alert ('thank you alot ' + userName);
