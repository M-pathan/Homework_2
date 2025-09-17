//Dating
let ticket_cost = 14; 
let Num_of_Tickets = 3; // Larry and Two friends.
let Total_cost = ticket_cost * Num_of_Tickets ;

//document.getElementById()::Look up an element by its id so you can work with it in JS.
//innerHTML ::Sets or gets HTML content
document.getElementById("ticketNum").innerHTML="Tickets : 3";
document.getElementById("ticketCost").innerHTML= "Cost: $14";
document.getElementById("ttCost").innerHTML= "Total :" + Total_cost ;


//Shopping
let Balance = 235.87;
let shirt =35;
let pant=75;
let shoes=60;
let Total_Shopping = shirt + pant + shoes;
let Remaining_Bal = Balance - Total_Shopping;
//PRINTING OP IN CONSOLE.
console.log("Total Cost :$ "+ Total_Shopping);
console.log("Remaining Balance:$ " + Remaining_Bal );

let jacket =70;
let afford_jacket = Remaining_Bal >= jacket ;

document.getElementById("addJacket").innerHTML = "ENOUGH FUNDS TO ADD THE 'JACKET' " + afford_jacket;

//PIZZA
let Total_pizza= 4;
let Slice_per_pizza = 8;
let each_student_slice = 2.5;
let Total_slices = Total_pizza *  Slice_per_pizza;
console.log("Total slice of Pizza: " + Total_slices);
//How many student can eat?
let Num_of_std_eat_pizza = Total_slices/each_student_slice;
console.log("Total number of Student : "+ (Math.floor( Num_of_std_eat_pizza)));
//How many pieces for proffessor?
let Total_slice_eat_std = (Math.floor( Num_of_std_eat_pizza)) * each_student_slice;
console.log("Total Slice Eaten by student: " + Total_slice_eat_std);

let leftoverPizza = Total_slices - Total_slice_eat_std ;
document.getElementById("profPizza").innerHTML = "PIECES OF PIZZA FOR PROFESSOR RECTOR:: "+ leftoverPizza;

//MONTY'S MEGA BAR
let adult =12.00;
let child = 6;
let drinks = 1.50;

let adult_Buffet = adult * 2;
let child_Buffet = child * 1;
let Drinks = drinks * 3;

console.log(adult_Buffet);
console.log(child_Buffet);
console.log(Drinks);

let Total_meal_price = (adult_Buffet + child_Buffet + Drinks);
document.getElementById("Monty").innerHTML= "Total Price of the Meal::$ " + Total_meal_price;

//Average Earned Tips
let Week_1 = 202.45;
let Week_2 = 134.97;
let Week_3 =256.63 ;
let Week_4 = 178.22;

let Total_Tip = (Week_1 + Week_2 + Week_3 + Week_4);
console.log("Total Tip : ",Total_Tip);
let Avg_Tip = (Total_Tip/4);
document.getElementById("tips").innerHTML = "Average Monthly Tip is :: "+ Avg_Tip;

