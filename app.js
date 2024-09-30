
// chapter no.14-16
// ************************Question no. 1.2***********************************

var studentnames= [] //js literal notation
var studentnames= new Array //object notation

// ************************Question no. 3,4,5,6***********************************

var names = ["Ali","Bilal","Ahmed"]
var num =[2,5,6]
var booleanarr= [true,false]
var mixedArr= ["Ali","Bilal","Ahmed",2,5,6,true,false ]

// ************************Question no. 7***********************************

var qualification=["SC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil", "PhD"]
 
document.write(`<h1> Question no. 7 </h1> <br /> 
    <h2> Qualifications </h2> 
    (1)${qualification[0]} <br /> (2)${qualification[1]} <br /> (3)${qualification[2]} <br /> 
    (4)${qualification[3]} <br /> (5)${qualification[4]} <br />(6)${qualification[5]} <br />
    (7)${qualification[6]} <br /> (8)${qualification[7]}`)

// ************************Question no. 8***********************************

// studentnames=["Ali","Ahmed","Bilal"]

// var marksStudent1= +prompt('Enter Marks Of '+ studentnames[0])
// var marksStudent2= +prompt('Enter Marks Of '+ studentnames[1])
// var marksStudent3= +prompt('Enter Marks Of '+ studentnames[2])

// var studentsmarks=[marksStudent1, marksStudent2 , marksStudent3]

// var totalmarks = 500

// var percentage = [marksStudent1/totalmarks*100, marksStudent2/totalmarks*100 , marksStudent3/totalmarks*100] 

// document.write (`<h1> Question No. 8 </h1> 
//     <br /> <b> The score of ${studentnames[0]} is ${studentsmarks[0]} and Percentage is ${percentage[0]}</b>
//     <br /> <b> The score of ${studentnames[1]} is ${studentsmarks[1]} and Percentage is ${percentage[1]}</b>
//     <br /> <b> The score of ${studentnames[2]} is ${studentsmarks[2]} and Percentage is ${percentage[2]}</b>
//     <br />`)

// ************************Question no. 9***********************************
//a
// var colors = ["blue", "green", "yellow", "purple", "teal"]
// document.write(` <h1> Question no. 9</h1> <h1>${colors}</h1>`)
// var inputColor= prompt("Input the color you want to add in the begining")

// //a
// colors.unshift(inputColor)
// document.write(`<b>After the Addition at begining<b/> <h2>${colors}</h2> <br/>`)

// //b
// var inputColor2= prompt("Input the color you want to add in the end")

// colors.push(inputColor2)
// document.write(`<b>After the Addition at the end<b/> <h2>${colors}</h2> <br/>`)

// //c
// colors.unshift("Voilet","Red")
// document.write(`<b>After the Addition of two colors at begining<b/> <h2>${colors}</h2> <br/>`)

// //d
// colors.shift()

// document.write(`<b>After the removal at begining<b/> <h2>${colors}</h2> <br/>`)

// //e
// colors.pop()

// document.write(`<b>After the removal at the end<b/> <h2>${colors}</h2> <br/>`)

//f
// var inputIndex= +prompt("At What Index you want to enter a Color")
// var inputColor3= prompt("What color do you want to add")

// colors.splice(inputIndex,0,inputColor3)

// document.write(`<b>After the addition by userb/> <h2>${colors}</h2> <br/>`)

//g

// var inputindex1=+prompt("enter the index from which you want to delete a color")
// var inputCount= prompt("enter how many elements you want to delete")

// colors.splice(inputindex1,inputCount)

// document.write(`<b>After the removal by user<b/> <h2>${colors}</h2> <br/>`)

// ************************Question no. 10***********************************

var scoresOfstudents=[320,230,480,120]
document.write(`<h1>Question no. 10</h1>
    <h2>Scores of student before sorting  ${scoresOfstudents}</h2> <br/>`)
scoresOfstudents.sort()
document.write(`<h2>Scores of student after sorting  ${scoresOfstudents}</h2> <br/>`)

// ************************Question no. 11***********************************

var cities=["karachi", "lahore","islamabad","quetta","peshawar"]

var selectedcities= cities.slice(2,4)

document.write(`<h1>Question no. 11</h1>
    <h2>Selected cities ${selectedcities}</h2> <br/>`)

// ************************Question no. 12***********************************

var arr = ["This",  "is" ,  "my" ,  "cat"]

document.write(`<h1>Question no. 12</h1>
    <h2>before joining ${arr}</h2>`)

var aarTostring= arr.join(" ")

document.write(`
    <h2>after joining it to make it a string ${aarTostring}</h2> <br/>`)


 // ************************Question no. 13***********************************

 var someValues=["Keyboard", "Mouse", "Printer" , "Monitor"]

 document.write(`<h1>Question no. 13</h1>
    <h2>FIRST IN FIRST OUT rule</h2>
    <h3>Before the rule ${someValues}</h3>`)

var fifo= someValues.shift()

document.write(`<h2> Then ${someValues}`)
document.write(`<h2> OUT: <br /> ${fifo}</h2>`)

var fifo= someValues.shift()

document.write(`<h2> Then ${someValues}`)
document.write(`<h2> OUT: <br /> ${fifo}</h2>`)

var fifo= someValues.shift()

document.write(`<h2> Then ${someValues}`)
document.write(`<h2> OUT: <br /> ${fifo}</h2> <br /> <br />`)

// ************************Question no. 14***********************************

var someValues=["Fan", "Room", "Window" , "Door"]

 document.write(`<h1>Question no. 14</h1>
    <h2>LAST IN FIRST OUT rule</h2>
    <h3>Before the rule ${someValues}</h3>`)

var lifo= someValues.pop()

document.write(`<h2> Then ${someValues}`)
document.write(`<h2> OUT: <br /> ${lifo}</h2>`)

var lifo = someValues.pop()

document.write(`<h2> Then ${someValues}`)
document.write(`<h2> OUT: <br /> ${lifo}</h2>`)

var lifo = someValues.pop()

document.write(`<h2> Then ${someValues}`)
document.write(`<h2> OUT: <br /> ${lifo}</h2>`)

// ************************Question no. 15***********************************

var mobileCompanies =["Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier"]

document.write(` <h1>Question no. 15</h1>
                  <h2>Select Mobile Company</h2>
                   <select style= "width:50%; border:2px solid ;color:blue; padding:5px 2px;border-radius:8px">
                    <option selected disabled></option>
                    <option>${mobileCompanies[0]}</option>
                    <option>${mobileCompanies[1]}</option>
                    <option>${mobileCompanies[2]}</option>
                    <option>${mobileCompanies[3]}</option>
                    <option>${mobileCompanies[4]}</option>
                    <option>${mobileCompanies[5]}</option>
                    </select>`)

document.write(`<h3><a href="chapter17.html">Go to Chapter No.17 Assignment</a></h3>`)                    
