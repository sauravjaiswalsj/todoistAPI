const csv = require('xlsx');
const fs = require('fs');
const open = require('open');
const { type } = require('os');
const { waitForDebugger } = require('inspector');
//open('www.google.com', {app:'firefox'});

const workbook = csv.readFile('../data.xlsx');

const firstSheet = workbook.SheetNames;
//var add ='A1'
//var worksheet = workbook.Sheets[firstSheet];
//console.log(worksheet);
//var cell = worksheet[add];
//console.log((cell?cell.v:undefined));
//console.log(firstSheet);
//
let data =[]; 
var desired_cell , i =1;
firstSheet.forEach((item)=>{	
 var worksheet = workbook.Sheets[item];
  for (cell in worksheet) { 
		  if(cell[0] === '!') continue;
		  desired_cell = worksheet['B'+i];
		  try{
		  if(desired_cell.v !== undefined && desired_cell.v === "Saurav"){
				data.push(JSON.stringify(worksheet['A'+i].v));
		  }
		  i=i+1;
		}catch(e){
			
		}
		//   if(worksheet[cell].v =="Saurav"){
		  // JSON.stringify(worksheet[cell].v);
	  }
  	 // console.log(item + "!" + cell + "=" + JSON.stringify(worksheet[cell].v));
  });
const getBrowser = async(query)=>{
	await open(`https://regus.samanage.com/search?q=${query}`, {app:'firefox'}, {wait:true});
}
data.forEach(element=>{
	getBrowser(element);	
	//global.window.setTimeout(function(){this.close();},1000)
});