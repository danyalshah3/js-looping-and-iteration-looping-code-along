// Code your solutions in this file
// const name = ["Ada", "Brendan", "Ali"]
// const event =  ["birthday"]

function writeCards(name, event) {
    let messages = []
    // byebug
    for (let i = 0; i < name.length; i++) {
        messages.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
      }
      return messages;
}