const sentence = "hello there from lighthouse labs";
 const timerFunction = ()=>{
 let time = 0;
  for (const char of sentence) {
  time+=500;
    setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  
  },time)
}
}
 timerFunction();
