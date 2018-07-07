'use strict'
const sentences = [
    { subject: 'Javascript', verb: 'is', object: 'awful' }, 
    { subject: 'Elephants', verb: 'are', object: 'hadoop' },
];

function say({subject, verb, object}) {
    console.log(`${subject} ${verb} ${object}.`);
}

for(let s of sentences) {
    say(s);
}