// problem 1
function calculateAverage(...args){
    var sum=0;
    for(var i=0;i<args.length;i++){
        sum+=args[i];
    }
    return "average is: "+(sum/args.length);
}

var nums=[1,2,8,9,7,8,10,11,15,17];
console.log(calculateAverage(...nums));
///problem 1 ends here


//problem 2
function areaOfTriangle(base,height){
    return "area equals: "+ (0.5*base*height);
}

var x=10;
var y=20;
console.log(areaOfTriangle(x,y));
///problem 2 ends here


//problem 3
function ageInDays(age){
    return (365*age) +" days";
}

var ageInYear=21;
console.log(ageInDays(ageInYear));
///problem 3 ends here


//problem 4
function calculateSum(a,b){
    return "sum: "+ (a+b);
}

var num1=5;
var num2=8;
console.log(calculateSum(num1,num2));
///problem 4 ends here


//problem 5 
function arrayOfNames(...args){
    return "first name: "+ args[0];
}

var names=["menna","mariam","sara","ahmed","aly","mohamed","abdelrahman","malak","salma","khaled","habiba","omar"];
console.log(arrayOfNames(...names));
///problem 5 ends here


//problem 6 
function displayName(){
    var name = "Menna Walid Fadel"
    document.getElementById("fullName").innerHTML=name;
}

displayName();
///problem 6 ends here


//problem 7
function hoursInSeconds(hr){
    return "seconds: "+ (hr*60*60);
}

var hours=2;
console.log(hoursInSeconds(hours));
///problem 7 ends here


//problem 8
function sumOfIntegers(num1,num2,num3,num4){
    if(num1+num2+num3+num4 > 350)
    {
        document.getElementById("sumofintegers").innerHTML="True";
        return true;
    }
    else{
        document.getElementById("sumofintegers").innerHTML="False";
        return false;
    }
}

var no1=200;
var no2=150;
var no3=10;
var no4=50;
var no5=2;
sumOfIntegers(no1,no2,no3,no4);//true
sumOfIntegers(no4,no2,no3,no5);//false
///problem 8 ends here


//problem 9
function numberZero(num){
    if(num==0){return true;}
    else{return false;}
}

var w=0;
var z=1;
console.log("zero number:");
console.log(numberZero(w));
console.log(numberZero(z));
///problem 9 ends here


//problem 10
function calculateReminder(a,b){
    return "reminder: "+ (a%b);
}

var number1=10;
var number2=26;
console.log(calculateReminder(number1,number2));
///problem 10 ends here


//problem 11
function greaterNumber(x,y){
    if(x==y){
        return "they are equal";
    }
    else if(x>y){
        return "greater no: "+ x;
    }
    else{
        return "greater no: "+ y;
    }
}

var num1 = 15;
var num2 =30;
var num3=15;
console.log(greaterNumber(num1,num2));
console.log(greaterNumber(num1,num3));
///problem 11 ends here


//problem 12
function Isnumber(num){
    if(typeof(num)=="number"){
        return true;
    }
    else{
        return false;
    }
}

var num1=10;
var str1="menna";
console.log("typeof():");
console.log(Isnumber(num1));
console.log(Isnumber(str1));
///problem 12 ends here


//problem 13
function todayDate()
{
    var currentDate=new Date();
    var day=currentDate.getDate();
    var month=currentDate.getMonth()+1;
    var year = currentDate.getFullYear();

    return day+"/"+month+"/"+year;
}
console.log(todayDate());
///problem 13 ends here