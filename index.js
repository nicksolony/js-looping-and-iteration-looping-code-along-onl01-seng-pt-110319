function writeCards(names,event) {
  let thankyouCards=[]
  for (let i=0; i<names.length; i++) {
    thankyouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }

return thankyouCards;
}


function countDown(number) {
  while (number>-1){
    console.log(number)
    number--
  }
}
