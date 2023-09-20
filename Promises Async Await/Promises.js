const is_shop_open = true;
let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };


const order = ((time, work) => {
    return new Promise((resolve, reject) => {
        if(is_shop_open) {
            setTimeout(() => resolve(work()),time);
        }
        else {
            reject(console.log("The shop was closed"));
        }
    })
})
order(2000,()=>console.log(`${stocks.Fruits[0]} has been selected`))

.then(() => {
    return order(2000, () => console.log(`Production has started`));
})
.then(() => {
    return order(2000, () => console.log(`${stocks.Fruits[0]} has been cut`));
})
.then(() => {
    return order(2000, () => console.log(`Chocolate added`));
})
.catch(() =>{
    console.log("Shop closed");
})
.finally(() => console.log("Day over come tomorrow"));