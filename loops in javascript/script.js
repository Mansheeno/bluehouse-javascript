//producing even numbers from 1 to 10 using for loop
var even = 2;
for (var even=2; even <= 10; even++) {
    if (even % 2 === 0){
        console.log(even)
    }
}

//count down from 10 to 1 using while loop
var count = 10;
while (count >= 1){
    console.log(count);
    count--
}
//do while loop that print 5 even though statement is wrong
var x = 5;
do {
    console.log(x);
} while (x < 1);