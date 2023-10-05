const is_shop_open = true;
let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 const toppings_choice = (() => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(
                console.log("The costomer choose chocolate as topping")
            );
        },3000);
    })
 })

 async function Kitchen() {
    console.log("A");
    console.log("B");
    console.log("C");

    await toppings_choice();

    console.log("D");
    console.log("E");
 }

 Kitchen();
 console.log("Do the dishes");
 console.log("Wash your clothes");
 console.log("Take order from customers");