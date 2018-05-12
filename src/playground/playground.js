var test;

for(test=0; test < 10; test++){
    if(test%2 == 0 ){
        console.log(test + " is even");
    } else {
        console.warn(test + " is an oddball");
    }
}

var test2 = 0;
while(test2%2 == 0) {
    console.log(test2);
    console.log("Yep - that's even.");
    test2++;
}

for(count = 1; count < 21; count++) {
    return count;
}

do {
    console.log(count);
} while (count < 10);