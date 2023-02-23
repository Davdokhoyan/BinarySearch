const arr = [1,2,3,4,5,6,7,8,9]


//iteration BinarySearch
function BinarySearch(arr,item,left = 0, right =  arr.lenght -1){
    while(right>=left){
        let mid = Math.floor((left + right)/2);
        if(item === arr[mid]){
            return mid;
        }else if(item > arr[mid]){
            left =  mid + 1;
        }else if(item < arr[mid]){
            right = mid - 1;
        }
    }
    return -1;
}


//Recursive BinarySearch

function BinarySearch(arr,item,left = 0, right = arr.lenght -1){
    while(right >=left){
        let mid = Math.floor((left +right) / 2);
        if(item === arr[mid]){
            return mid;
        }else if(item === arr[mid]){
            return BinarySearch(arr,item,mid + 1,right)
        }else if(item === arr[mid]){
            return BinarySearch(arr,item,mid - 1,left)
        }
    }
    return -1;
}

console.log(BinarySearch(arr,2));