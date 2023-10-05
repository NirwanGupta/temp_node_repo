const is_shop_open = false;
let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 function time(ms) 
 {
    return new Promise( (resolve, reject) => {
        if(is_shop_open)
        {
            setTimeout(resolve, ms);
        }
        else
            reject(console.log("The shop is closed today"));
    });
 }

 async function Kitchen() 
 {
    try {
        await time(2000);
        console.log(`The ingredient selected is ${stocks.Fruits[0]}`);
        console.log(`Production has started`);
        await time(2000);
        console.log(`Cut the fruit`);
        await time(1000);
        console.log(`Add water and ice`);
        await time(1000);
        console.log(`Start the machine`);
        await time(2000);
        console.log(`${stocks.holder[0]} was selected`);
        await time(3000);
        console.log(`${stocks.toppings[0]} was selected for topping`);
        await time(2000);
        console.log(`The customer has been served`);
    }
    catch (error) {
        console.log("The customer left", error);
    }
    finally {
        console.log("The shop has closed");
    }
 }

 Kitchen();