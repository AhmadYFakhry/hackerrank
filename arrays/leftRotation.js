function leftRotation(arr, d) {
    let s = '';
    for(let i = 0; i < d; i++) arr.push(arr.shift());
    for(let i = 0; i < arr.length; i++) s += `${arr[i]} `;
    console.log(s);
}