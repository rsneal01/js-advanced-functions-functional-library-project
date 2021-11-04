const collectionChecker = function(collection){
    return Array.isArray(collection) ? collection.slice() : Object.values(collection);
}

const myEach = function(collection, callback){
    const newCollection = collectionChecker(collection);
    newCollection.forEach(e => callback(e));
    // for(let i=0; i < newCollection.length; i++){
    //     callback(newCollection[i]);
    // }

    return collection;
};

const myMap = function(collection, callback){
    const newCollection = collectionChecker(collection);
    return newCollection.map(e => callback(e));
}

const myReduce = function(collection, callback, acc){
    let newCollection = collectionChecker(collection);
    if (!acc){
        acc = newCollection[0];
        newCollection = newCollection.slice(1);
    }
    for(let i=0; i < newCollection.length; i++){
        acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
    // newCollection.reduce(function(acc, currentValue, array){
    //     return callback(acc, currentValue, newCollection)
    
}

const myFind = function(collection, predicate){
    let newCollection = collectionChecker(collection);
    for(let i=0; i < newCollection.length; i++){
        if (predicate(newCollection[i])){
            return newCollection[i];
        }
    }
}

const myFilter = function(collection, predicate){
    let newCollection = collectionChecker(collection);
    let newArray = []
    for(let i=0; i < newCollection.length; i++){
        if (predicate(newCollection[i])){
            newArray.push(newCollection[i])
        }
    }
    return newArray;
}

const mySize = function(collection){
    let newCollection = collectionChecker(collection);
    return newCollection.length;
}

const myFirst = function(array, n){
    // let newCollection = collectionChecker(array);
    // for(let i=0; i < newCollection.length; i++)
    if (!n){
        return array[0];
    }
    return array.slice(0, n);
}

const myLast = function(array, n){
    if (!n){
        return array.slice(-1)[0];
    }
    return array.slice(-n);
}

const myKeys = function(object){
    return Object.keys(object);
}

const myValues = function(object){
    return Object.values(object);
}