function sumOfMultipleValue() {
    let limitNumber = document.getElementById(limit).value;
    let result = document.getElementById(result);
    let sum = 0;
    for (let i = 1; i <= limitNumber; i++) {
        if (i % 3 == 0) {
            sum = sum + i;
            //console.log(i);
        }else if(i % 5 == 0){
            sum = sum + i;
            //console.log(i);
        }

    }
    result.innerHTML = sum;
   // console.log(sum);
}

