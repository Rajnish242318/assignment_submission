// var obj={
// 	name:"rajnish",
// 	age:23,
// 	addersh:{city:"lucknow",country:"india"},
// 	hobbies:["cricket","hockey"]

// }
// console.log(obj.name)
// console.log(obj.addersh.country)
// console.log(obj.age)
// console.log(obj.hobbies[1])


var pruduct=[{
	id:0,
	name:"Apple",
	price:30,
	categroy:"fruits",
	color:"red",
	quantity:45
},
{
	id:0,
	name:"cauliflower",
	price:34,
	categroy:"vegitable",
	color:"Green && White",
	quantity:45

},
{
	id:0,
	name:"Banana",
	price:333,
	categroy:"fruits",
	color:"Green && yellow",
	quantity:42

}

];
function display(array) {
	var rows=""; 
	for (var i = 0; i<array.length; i++) 

{
 // console.log("name" + pruduct[i].name + "price" + pruduct[i].price);
 // console.log(pruduct[i])
// tbody.innerHTML=rows

  // row=rows "<tr>""<td>" + pruduct[i].name +"</td>""<td>" pruduct[i].price + "</td>""</tr>"
  // console.log(row)
 var rows=rows+`
<tr>
<td> ${i+1}</td>
<td> ${array[i].name}</td>
<td> ${array[i].price}</td>
<td> ${array[i].categroy}</td>
<td> ${array[i].color}</td>
<td> ${array[i].quantity}</td>
`;




};
	var tbody=document.getElementById("tab-data");
	 tbody.innerHTML=rows;

};

display(pruduct);


function searchByname() {
	var search=document.getElementById("sarch");
	var searchValue=search.value;
	var newProduct=[];

	for (var i = 0; i<pruduct.length; i++) {
		if(pruduct[i].name.toUpperCase().includes(searchValue.toUpperCase()) === true) {
			newProduct.push(pruduct[i]);
		}
	}
	display(newProduct);
}

function searchBycategroy() {
	var quantity=document.getElementById("categroy");
	var searchcategroy=categroy.value;
	var newcategroy=[];

	for (var i = 0; i<pruduct.length; i++) {
		if(pruduct[i].categroy.toUpperCase().includes(searchcategroy.toUpperCase()) === true) {
			newcategroy.push(pruduct[i]);
		}
	}
	display(newcategroy);
}





