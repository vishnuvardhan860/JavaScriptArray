//This methofd is used to Generate Date between startdate and enddate range

 //@param dates startDate and EndDate

 //return month 1-12
 
 function randomDate(start, end) {
    let DOB= new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    console.log(DOB.getMonth())
    return DOB.getMonth();
}

birthArray=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0);
for(i=1;i<=50;i++){
let month=randomDate(new Date(1998, 5, 25), new Date(1999, 5, 25));
birthArray[month]=birthArray[month]+1;
}
console.log(birthArray)