// let a = prompt("oragir");

// switch (a) {
//   case "A":
//     document.write("gerazanc");
//     break;
//   case "B":
//     document.write("lav");
//     break;
//   case "C":
//     document.write("bavarar");
//     break;
//   case "D":
//     document.write("haziv dzgir");
//     break;
//   case "F":
//     document.write("fail looser");
//     break;
//   default:
//     alert("chka senc ban");
// }

//   let a=prompt("oragir")
//   if (a<=3){
//     document.write("anbavarar");
//   }
//   else if (a>3 && a<=8){
//     document.write("lav");
//  }
//  else {
//     document.write("gerazanc");
//  }

// function barev(a,b,c,d){
//    if (a+b==c+d){
//       document.write("barev Alex");
//    }
//    else{
//       document.write("hajox alex");
//    }
// }
// barev(4,8,7,5);

// function tver(a, b) {
//   if (a > 0 && b > 0) {
//     alert("drakan");
//   } else if (a < 0 && b < 0) {
//     alert("bacasakan");
//   }

//   if (a == "" && b == "") {
//     alert("datark e 1");
//   }
//   if (a == 0 && b == 0) {
//     alert("zro");
//   } else if (a === "" && b >= 0) {
//     alert(" datark e 2");
//   } else if (a >= 0 && b == "") {
//     alert("erkrwrdy datark e");
//   }

// }
// let abra = prompt("tiv1");
// let bada = prompt("tiv2");

// tver(abra, bada);

//  let a = 1;
//  while (a=4 && a<=7) {
//    a++;
//    if (a==4){

//    document.write(a + "<br>");
//    }
//  else{

//    document.write(a+'<br>');
//  }a++;
// }

// let a = 1;
// do{
//    document.write(a + "<br>");
//    a++;
// }
// while (a < 5); 

// for (a=1, a<=10 ){
// a++;


//    console.log(a);
// }

// let string=" ";
// for( let a=0;a<8;a++){
// string+="a"
// console.log(string);
// }

// while(true){
//   let a=Number(prompt("greq tiv"));

// if(a<0)
//   break;

// // if (Number.isNaN(a))
//   // alert("tiv chi")


// if( check(a))
//   alert("tiv chi");
// else alert(getresult(a));

// }


// function check(a){
//  return Number.isNaN(a)

// }; 



//  function addnubers (a,b,operator){

//     switch(operator){
//         case '+':
//              return(a+b);
//         case '-':
//              return (a-b);
//         case '*':
//              return (a*b);
//         case '/':
//              return (a/b);              
//     }
// }
//     let myOptions=addnubers(50,10,'*');
//     console.log(myOptions);



// console.log(sum(5,10));
// console.log(sum("a",10));
// console.log(sum("a",'10'));
// console.log(sum('5','10'));

// function sum(a,b){
//      a=+a;
//      b=+b;
//      if (Number.isNaN(a)
//      || Number.isNaN(b))
//      alert("nan");
//      else return a+b;
// }

//  function max (a,b,c){
//      if (a>=b && a>=c) 
//      return a
//      else if (b>=c && b>=a)
//      return b
//      else 
//      return c
//  }

// let j=max (10,-2,6);
// console.log(max(10,-2,6));

// function prime(a){
//      let p=true;
//      for(i=2;i<a,i++;){
//           if (a% i==0) p=false;break;}
//           if(p)return "parz tiv";
//           else return "parz tiv che";

//      }
// let j=prime(10);
// console.log(j);

// function armstrong(a,b){
// for (let i=a;i<=b;i++){
//      i=i.toString();
//      let len=i.length;
//      let temp=i;let sum=0;
// while (temp>0){
//      let m=temp%10;
//      sum=sum+m**len;
//      temp=parseInt(temp/10);
// }

// if (sum==i) console.log(i);
//      }
// }
// armstrong(1,1000);




// function prime(a,b){
//      for (let i=a;i<=b;i++){
//           let p=true;
//           for(let j=2;j<i;j++){
//           if (i% j==0) p=false;
//           }
//           if(p) console.log(`${i} parz tiv e`);
//      }       
// }
//          primeNumbers=prime(2,50);

// function fac(n){
//      let result=1;
//      for(let i=2;i<=n;i++){

//        result*=i;
//      }
//      console.log(result);
// }

// Number=fac(5);
// function fac(n){
//     if(n>0){
//      return n*fac(n-1)
//     }
//    else return 1;       
// }  
//console.log(fac(5));





// function fib(n){
//      if (n<2)
//      return n;
//      else return fib(n-2)+fib(n-1);
// }
// for (let i=0; i<=10; i++)
// console.log(fib(i));




//let arr=new Array(20,"anun",'30',NaN);
//arr=[20,"anun","30",NaN];

//    console.log(Array.isArray(arr));
// console.log(typeof arr[1]);

// function fib(n){
//   let prev=0,next=1;
//   for(let i=0;i<=n;i++){
//     next=prev+next;
//     prev=next-prev;
//   }
//   return prev;

// }
// for (let i=0;i<=8;i++){
//   console.log(`fib(${i})=`,fib(i));
// }

// let arr=[];
// arr.length=50;
// for(let i=0;i<arr.length;i++)
// arr [i]=i;
// function sum(arr){
// let s=0;
// for (let i=0;i<arr.length;i++)
// s+=s+arr[i];
// console.log(s);}
// sum(arr);


//let a=[2,5,6];
// function myForeach(arr,fun){
//   for(let i=0;i<arr.length;i++)
//   fun(arr[i],i);
// }


// myForeach(a,function(val,i){

// console.log(val,i);
// })

// let arr =[10,-50,37,2]
// min(arr);
// function min(arr){
//   let minval=[0];
//   for(let i=1;i<arr.lenght;i++)
//   if(minval>arr[i])
//   minval=arr[i]
//   console.log(minval);
// }


// let arr=[];
// arr.length=50;
// for(let i=0;i<arr.length;i++){
// arr[i]=Math.round(Math.random()*(30-20))+20
// }
// console.log(arr);




// let a=[];
// a.length=50;
// function randomArr(arr,min,max){

//   for(let i=0;i<arr.length;i++){
//     arr[i]= Math.round(Math.random())*(max-min)+min;
//   }
//   return arr
// }
// a=randomArr(a,20,30);
// document.write(a);




// let a=[2,5,7]
// a.forEach(function(val,i){
//   a[i]=val*2
// });
// let b=a.map(function(val,i){
//   return val*2
// });
// console.log(a,b);






// let a=[-2,3,6-7]
// function myFilter(arr){
//   let newArr=[];
//   let i=0;
//   arr.forEach(function(val){
//     if (val<0){
//     newArr[i]=val;
//     i++; 
//     } 
//   })
//   return newArr;
// }
//   let b=myFilter(a);
//   console.log(a,b);





// let a=[5,10,20]
// function unshift(arr,val){
//   for(let i=arr.length-1;i>=0;i--)
//     arr[i+1]=arr[i];
//     arr[0]=val;
//     return arr;

// }
// a=unshift(a,100);
// console.log(a);






// let a=[];
// a.length=50;
// function randomArr(arr,min,max){

//   for(let i=0;i<arr.length;i++){
//     arr[i]= Math.round(Math.random())*(max-min)+min;
//   }
//   return arr
// }
// a=randomArr(a,20,30);
// console.log(a);







// function checkSymmetry(arr) {
//   let isSymmetryc = true;
//   let length = arr.length - 1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] != arr[length - i]) {
//       isSymmetryc=false;
//     }
//   }
//   return isSymmetryc
// }
// let arr = [1, 2, 2, 1];
// console.log(checkSymmetry(arr));







// let numbers=[1,2,3,4,5];
// numbers.forEach(function(tver,index) {
//   console.log(tver,index);
// });





// let array1 = [1,2,3];
// let array2 = [1,2,3];
// let array3= ["zevs"];
// let array4 = array1.concat(array2,array3);
// console.log(array4);





// let arr=[1,[1,2,3],2,3,["zevs"]];
// let b=arr;
// let c=arr;
// b.forEach(function(val,index){
//     });
//     c.forEach(function(val,index){
//         console.log(val,index);
//     });


// let a = 0;
// let arr = [1, [1, 2, 3], 2, 3, ["zevs"]];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         a += arr[i][j];
//     }
// }
// document.write(a);




// str = "mi ban kam naxadasutyun";
// arr=str.split("");
// document.write(arr);



// arr = "mi", "ban", "kam", "naxadasutyun";
// b=arr.includes("xzdcfvgb");
// document.write(b);

// arr=["bar","mar","shar",1,5];
// arr.sort();
// document.write(arr);


// arr=["bar","mar","shar",1,5];
// arr.reverse();
// document.write(arr);


// arr=[1,2,3,4,5,6,7];
// arr.fill(10,2,4);
// document.write(arr);



// str1="naxadas"
// str2="naxadauguigs hgfhk kgfkjhfk"
// str3=str2.toUpperCase();
// console.log(str3);

// ete gri 100 asi vor darna


// function centuryFromYear(year) {
//     let dar = (Math.ceil(year / 100));
//     alert(dar + "dar");
// }

// let tari = prompt("gri tarin");
// centuryFromYear(tari);




// "use strict"

// function simetry(string) {

//     // let babken = string.split("");
//     // let hovik = babken.reverse();
//     // let babken = hovik.join('');
//     let toArr=string.split("");
//     let arrReverse=toArr.reverse();
//     let arrJoin=arrReverse.join('')
//     if(arrJoin!==string){

//         document.write('palindrom-che');
//     }
//     else document.write('palindrom e')



// }

// let word = prompt("palindrom bar");
// simetry(word);


//[2,1,5,4,6]- aranc sort dasavorvvi poqric mec


// function simetry(arr){
//   let arr = array.join('');
//   let arr = (Math.ceil(year / 100));
//   }

//   console.log(arr);

// simetry([2,1,5,4,6]);





// let usanox = {
//   matHamar: 7,
//   fname: "Artur",
//   lname: "poxosyan",

// }
// document.write(usanox.lname + "<br>" + usanox.fname + "<br>" + usanox.matHamar);

// let usanox2 = {
//   matHamar: 8,
//   fname: "Aram",
//   lname: "petrosyan",

// }

// let cucak = [usanox, usanox2];
// cucak.forEach(function (val) {
//   document.write(val.matHamar +"<br>"+ val.fname);
// });





// class Usanox {
//   constructor(fName, lName) {
//     this.name_first = fName;
//     this.name_last = lName;
//   }
// }
// let object1 = new Usanox("Vazgen", "Muradyan");
// document.write(object1.name_first + object1.name_last);



// class Usanox {
//   constructor(fName, lName, age) {
//     this.anun = fName;
//     this.azganun = lName;
//     this.tariq=age;
//   }
// }
// let object1 = new Usanox("Vazgen", "Muradyan",45);
// let object2 = new Usanox("Malyar", "Rubo",55);
// let object3 = new Usanox("Svaxch", "Karen",85);
// let object4 = new Usanox("Zatik", "Stepanyan",15);

// let cucak = [object1,object2,object3,object4];
// let str="";
// str+="<ol>";
// cucak.forEach(function(val){
//   str+="<li>";
//   str+=val.anun+" "+val.azganun+" "+val.tariq;
//   str+="</li>";
// });
// str+="</ol>";

// document.write(str);




// clasov sarqvi mi qani hat cucak tpi 30-ic barcr taricov
// gri anun, amusnacaca, te voch, ev erexeqi qanak,   tpi miayn amusnacaci anunn
// ete amusnacac e nran arandzacni 



//   class Usanox {
//   constructor(fName, lName, age) {
//     this.anun = fName;
//     this.azganun = lName;
//     this.tariq=age;
//   }
// }
// let object1 = new Usanox("Vazgen", "Muradyan",45);
// let object2 = new Usanox("Malyar", "Rubo",55);
// let object3 = new Usanox("Svaxch", "Karen",18);
// let object4 = new Usanox("Zatik", "Stepanyan",25);

// let cucak = [object1,object2,object3,object4];
// let str="";

// cucak.forEach(function(val){
//   if (val.tariq>30) {
//     str+=val.anun+" "+val.azganun+" "+val.tariq+"<br>";
//   }

// });
// document.write(str);



class Ashakert {
  constructor(aname, fname, meried, children) {
    this.anun = aname;
    this.azganun = fname;
    this.amusnacac = meried;
    this.erexeq = children;

  }
}
let object1 = new Ashakert("Poxos", "Poxosyan", true, 2);
let object2 = new Ashakert("Grigor", "Grigoryan", false, 0);
let object3 = new Ashakert("Petros", "Petrosyan", true, 3);
let object4 = new Ashakert("Gevorg", "Gevorgyan", false, 1);

let matyan = [object1, object2, object3, object4];
let str = "";
matyan.forEach(function (val) {

  if (val.amusnacac == true && val.erexeq > 0) {
    str += val.anun + " " + val.azganun + " " + val.amusnacac +" " + val.erexeq + "<br>";
  }
});
document.write(str);












// class Exanak{
// constructor(dzmer,garun,amar,ashun){
//     this.pet = dzmer;
//     this.erkat = garun;
//     this.jesht= amar;
//     this.qar=ashun;
    
    

// }
// }
// let object1 = new Exanak("dektember","hunvar","petrvar",3);
// let object2 = new Exanak("mart","april","mayis",6);
// let object3 = new Exanak("hunis","hulis","ogostos",9);
// let object4 = new Exanak("september","hoktember","noyember",12);


// let sezonner = [object1,object2,object3,object4];
// let str = "";


// sezonner.forEach(function(val){
// str += val.pet+" "+val.erkat+" "+val.jesht+" "+"<br>";
// if (object1<=3&&object2<=6&&object3<=9&&object4<=12){
    
// }

    

// });

// document.write(str);


