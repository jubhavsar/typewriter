const sentence = "hello there from lighthouse labs";
 const timerFunction = ()=>{
 let time = 0;
  for (const char of sentence) {
    // increasing time by 50 ms each time
    time+=500;
    setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  
  },time)
}
}
 timerFunction();
