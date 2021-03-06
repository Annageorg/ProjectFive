//creating rooms, characters, and items

//create rooms
const sideWard = new Room("hospital room");
sideWard.intro = `<p>You are finally awake!!! How much time has passed?
years? months? weeks?</p> You look around and you are in a `
sideWard.description = `<p>Your goal is to escape the hospital before the 
zombies catch up. By typing your commands you can move around rooms(directions 
include <b>south west east north </b>), search for items, store them, talk to 
characters, or engage in combat. To see the available commands type <b>help</b></p>
<p>GOOD LUCK!</p>`;

const ane = new Room("A&E");
ane.intro = `<p>After maybe a lot of tries you managed to open the door</p>
Terrified you look around and see blood all over the walls. You are in the `
ane.description = `<p>This seems like an A&E, but not quite, something is not
right. It is very dark and you can't see much around</p>
<p>How will you proceed in this room?</p>`;


const cafe = new Room("cafeteria");
cafe.intro = `<p>That was tricky, hopefully you didn't make too much
noise trying to open the door, you don't want to do that! Dangerous 
things might be lurking in the shadows!</p> You are now in the `
cafe.description = `<p>The lights are so much better in this place.</p>
<p>What's next?</p>`;
cafe.key = "Bolt cutters"

const neuro = new Room("neurology");
neuro.intro = `You are now in the `
neuro.description = `<p>There are strange chairs dotted around, you see some 
bodies laying around, but... Their brains are missing!!!</p>
<p>I would leave this room if I were you, but what are you gonna do?</p>`;

const xray = new Room("X-Ray");
xray.intro = `<p>That was tricky, but you did it!</p> You managed to enter the `
xray.description = `<p>There is a lot of equipment around, even some weird glow to 
some items...</p>
<p>It is advised to not touch anything. What are the next steps?</p>`;

const drOffice = new Room("Dr Strange office");
drOffice.intro = `You entered `
drOffice.description = `<p>You can look around, it is well lit, but.. </p>`;

const morgue = new Room("morgue");
morgue.intro = `You entered the dreadful `
morgue.description = `<p>There might be some important items around... or maybe not </p>`;

const psych = new Room("Psychiatric ward");
psych.intro = `You entered `
psych.description = `<p>There are definately some important items here!</p>`;

const exit = new Room("Exit");
exit.intro = `You entered `
exit.description = `<p>The EXIT!!!</p>`;

//create items
const boltCutters = new Item("Bolt cutters");
boltCutters.description = "as a tool to go through locked doors"

const armour = new Item("Armor");
armour.description =  "Full-body military grade armour";
armour.effect = 5;

const moonKey = new Item("Moon key");
moonKey.description = "with unlocking an important door"

const sunKey = new Item("Sun key");
sunKey.description = "with unlocking an important door"

const skeletonKey = new Item("Skeleton key");
skeletonKey.description = "to unlock the exit"

//create characters
const bob = new Character("Bob");
bob.intro =`You look around and see a character called `
bob.description = `<p>He looks like a weird character, he doesn't seem he might
attack you. He looks like he wants to say something`
bob.conversation = `<p>Nice to see another one alive in these damned walls. Things
got scary mate. I don't know what is happening, but one thing I know, is that if you stumble 
upon a strange Doctor, don't make any sudden moves! Farewell, hope you manage to escape!</p>`

const zombie = new Enemy("zombie");
zombie.intro = `<p>When you opened the door, something attacked you. It seems that the armour 
you picked in the previous rooms protected you from massive damage.</p> 
You won the fight and saw that you fought a `
zombie.description = `<p>It looks a semi-dead, semi-alive thing that resembles a human being. 
All its clothes are shredded and you can see some bloodied bite marks all over his body.</p>`
zombie.health = 11;

const dr = new Enemy("The Doctor");
dr.intro = `You see a strange character in front of you, his name is `
dr.description = `<p>He is not interested in what you are doing and doesn't want to talk either.</p>
<p>What do you want to do?</p>`
dr.health = 100000000;




