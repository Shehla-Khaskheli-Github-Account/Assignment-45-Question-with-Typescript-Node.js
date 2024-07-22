
function storCarInfo(manufacturer:string , model_name:string, ...extraOption: { [key : string]:any}[ ] ):object  // spread operator: It receives many arguments
{
   let CarInfo = {
      manufacturer,
      model_name,
      ...Object.assign({} , ...extraOption),           // target and source
      
   }
   return CarInfo;
};
 
let ans = storCarInfo('Honda', 'Civics', {color:'black'}, {features:['navigation', 'Power window']})

console.log(ans);
