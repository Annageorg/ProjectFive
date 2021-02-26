//creating rooms, characters, and items

//create rooms
const sideWard = new Room("hospital room");
sideWard.intro = `<p>You are finally awake!!! How much time has passed?
years? months? weeks?</p> You look around and you are in a `
sideWard.description = `<p>It is completely empty, the lights in the room
are flickering, and you can't hear the usual hospital sounds. You can see
two doors to the east and south.</p><p>What do you want to do?</p>`;

const ane = new Room("A&E");
ane.intro = `<p>After a lot of tries you managed to open the door</p>
Terrified you look around and see blood all over the walls. You are in the `
ane.description = `<p>This seems like an A&E, but not quite, something is not
right. It is very dark and you can't see much around</p>
<p>How will you proceed in this room?</p>`;

const cafe = new Room("cafeteria");
cafe.intro = `<p>Did you manage to talk to the weird character Bob, did you understand
what he was on about? He did mention something, but only you can know if it was 
important.</p> You are now in the `
cafe.description = `<p>The lights are so much better in this place.</p>
<p>What's next?</p>`;

const neuro = new Room("neurology");
neuro.intro = `<p>Well done, you entered a new room</p> You are now in the `
neuro.description = `<p>There are strange chairs dotted around, you see some 
bodies laying around, but oooh no... Their brains are missing!!!</p>
<p>I would leave this room if I were you, but what are you gonna do?</p>`;

const xray = new Room("X-Ray");
xray.intro = `<p>That was tricky, but you did it!</p> You managed to enter the `
xray.description = `<p>There is a lot of equipment around, even some weird glow to 
some items...</p>
<p>It is advised to not touch anything. What are the next steps?</p>`;

const droffice = new Room("Dr Strange office");
const morgue = new Room("morgue");
const psych = new Room("Psychiatric ward");
const exit = new Room("Exit");



