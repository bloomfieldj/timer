timers = process.argv.slice(2).map(Number)


for (const timer of timers) {   
  if(timer > 0){
    setTimeout(() => {
      process.stdout.write('\x07')
    }, timer * 1000);
  }
}