export const formatCurrency = (amount:number|null)=>{
const value = amount || 0;
return new Intl.NumberFormat('en-US',{
    style:'currency',
    currency:'USD',
}).format(value)
}

// intl is a inbuilt javascript api and is a part of ecma script internalization