const arr1 = [
    ["name", "id", "age", "weight", "Cool"],
    ["Susan", "3", "20", "120", true],
    ["John", "1", "21", "150", true],
    ["Bob", "2", "23", "90", false],
    ["Ben", "4", "20", "100", true],
  ];
  
  const arr2 = [
    ["name", "id", "height"],
    ["Bob", "2", "50"],
    ["John", "1", "45"],
    ["Ben", "4", "43"],
    ["Susan", "3", "48"]
  ];
  
  const arr3 = [
    ["name", "id", "parent"],
    ["Bob", "2", "yes"],
    ["John", "1", "yes"]
  ];


  // I'd like to have a single object per person with every prop we find in each array

  function createObjects(arr) {

    const [titles, ...rest] = arr;
   
    return rest.reduce((acc, currentValue, index) => {
        const person = {};

        for(let [index, title] of titles.entries()) {
            person[title] = currentValue[index];
        }
        return [...acc, person]
    }, []);

  }

  const everything = [
      ...createObjects(arr1),
      ...createObjects(arr2),
      ...createObjects(arr3),
  ]

  console.log(everything);

  function mergeAll(arr) {
   
    return arr.reduce((acc, currentValue) => {
 
        let personIndex;

        if (acc.length > 0) {
            personIndex = acc.findIndex(elem => {
                return elem.id === currentValue.id
             }) 
        }

        if (personIndex >= 0) { 
            console.log(`Person find ${acc[personIndex].name}`);
            acc[personIndex] = {...acc[personIndex], ...currentValue};
            return [...acc]
        } 
            
        return [...acc, currentValue]
    
     
    }, []);

  }

  const allMerged = mergeAll(everything);
  console.table(allMerged);
