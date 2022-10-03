import os from "os"
import prompt from "prompt-sync"

// Friday's assignment on node.js
let pt = prompt()
console.log(`Welcome to "Guess what is on my mind" game.`);
let name = pt("So beautiful,what's your name: ")
console.log(`It's awesome to have you on my platform ${name} `);


let RAM = os.totalmem()/(1024 * 1024 * 1024);
console.log(RAM);
let model = parseInt(os.cpus()[0].model.split(" ")[2].charAt(1));
console.log(model);
let HDD = 256;
console.log(HDD);
let test = prompt();
let userModel = parseInt(pt("Please input the I-core of your system: "))
console.log("");
let userRAM = parseInt(pt("What's the RAM of your system: "));
console.log("");
let userHDD = 256;
console.log("");
if (userModel >= model && userRAM >= RAM && userHDD >= HDD) {
    while (true) {
        let num: number = Math.floor(Math.random() * 100);
        let trials = 3;
        for (let i = 0; i < 3; i++) {
            trials --;
            let guessYourNumber = parseInt(pt("Guess the number on my mind: "))
            console.log("");
            if (guessYourNumber === num) {
                console.log("You are a wizard!!, You read my mind correctly.");
                break;
            } else if (guessYourNumber !== num) {
                if (guessYourNumber < num) {
                    console.log(`You are wrong. The number on my mind is greater than the number you chose. You have ${trials} trials left. Try again.`);
                    continue;
                } else if (guessYourNumber > num) {
                    console.log(`You are wrong, the number you chose is greater than the number on my mind. You have ${trials} left.`);
                    continue;
                }  
            }
        }
        let entry = pt("Do you wish to continue(YES/NO): ").toUpperCase();
        if (entry === "YES") {
            continue;
        }else if (entry === "NO") {
            break;
        }
    }
    
}else{
    console.log("Sorry but your system specifications limits you from playing my game. UPGRADE or GET A NEW LAPTOP!!");
}





