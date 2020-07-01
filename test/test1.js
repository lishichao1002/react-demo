/**
 * 根据长度截断数组
 * eg: ([1,2,3,4,5], 2) ==> [[1,2],[3,4],[5]]
 * eg: ([1,2,3,4,5], 3) ==> [[1,2,3],[4,5]]
 * eg: ([1,2,3,4,5], 6) ==> [[1,2,3,4,5]]
 */
function splitArrayByLength(arr, length) {
    const res = [];
    let start = 0;
    while (true) {
        let end = start + length;
        if (start >= arr.length) {
            arr.push(
                arr.slice(start, arr.length)
            );
            break;
        } else {
            res.push(
                arr.slice(start, end)
            );
            start = end;
        }
    }
    return res;
}

console.log(
    splitArrayByLength([1, 2, 3, 4, 5, 6, 7, 8], 8)
);
