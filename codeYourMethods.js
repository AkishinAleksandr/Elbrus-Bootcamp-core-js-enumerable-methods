
// Работать это должно вот так:
// myForEach([1,2,3], (el) => console.log(el));
// const newArr = myMap([1,2,3], (el) => el * 2);


function myForEach(arr, callback) {
    for(let i = 0, length = arr.length; i <= length; i++){
        callback(arr[i]);
    }
}

function myMap(arr, callback) {
     let callback = [];
     for(let i = 0, length = arr.length; i <= length; i++){
        callback.push(arr[i] * 2)
     }
}

function myFilter(arr, callback) {
    let arrNew = [];
    for(let i = 0, length = arr.length; i <= length; i++){
        if(callback(arr[i] > 2)){
            arrNew.push(arrNew[i])
        }
    }
    return arrNew;
}

function myReduce(arr, callback) {
    let newV = 0;
    for(let i = 0, length = arr.length; i <= length; i++){
        newV+= arr[i];
    }
    return newV;
}

function myFind(arr) {
    for(let i = 0, length = arr.length; i <= length; i++){
        if(arr[i] < 5){
        return arr[i];
        }
    }
}

function myEvery(arr) {
    for(let i = 0, length = arr.length; i <= length; i++){
        if(arr[i] < 5){
        return false
        } 
    }
    return true;
}

function mySome() {
    for(let i = 0, length = arr.length; i <= length; i++){
        if(arr[i] < 5){
        return true
        }
    } 
    return false;
}

