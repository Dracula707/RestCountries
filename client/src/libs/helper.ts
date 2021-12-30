export const dynamicSort = (property: string) => {
  var sortOrder = 1 as number;

  if (property[0] === "-") {
     sortOrder = -1;
     property = property.substr(1);
  }

  return function(a:any , b:any) {
     if (sortOrder == -1) {
        return b[property].localeCompare(a[property]);
     } else {
        return a[property].localeCompare(b[property]);
     }
  }
}


export const dynamicSortNumber = (property: string) => {
   var sortOrder = 1;
 
   if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
   }
 
   return function(a:any , b:any) {
      if (sortOrder == -1) {
         return parseFloat(b.id) - parseFloat(a.id)
      } else {
         return parseFloat(a.id) - parseFloat(b.id)
      }
   }
 }