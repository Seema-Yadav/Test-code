/*Find the maximum consecutive 1's in an array of 0's and 1's.
Example:
a) 00110001001110 - Output :3 [Max num of consecutive 1's is 3]
b) 1000010001 - Output :1 [Max num of consecutive 1's is 1]*/

   


function maxConsectiveOnesCount (binary) {
    return binary
                .split('0')
                .reduce((a, b) => a.length > b.length ? a : b)
                .length;
  }
  const count= maxConsectiveOnesCount("10001001110001111111");
  console.log(count);


          