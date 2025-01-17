messages = ["Do you want to be above or below?","I'm creaming just looking at you","Get your ass on that bed","I love doggy style","Can I stick it in","I'm gonna fill you up","Last night was amazing, lets do it again","I am beating it to you","I pick smash","That ass is so thicc, I would think you're my mom","I am nutting all over your pics","My favorite position is missionary but I'm willing to try your ideas","I'm wonking my willy from just one glance at you"];
start = false;

ModAPI.addEventListener("key", () => {
    interval = setInterval(update(key), 250);
})
function spam(){
    randint = Math.floor(Math.random() * 10);
    msg = messages[randint];
    Minecraft.getMinecraft().player.sendChatMessage(msg);
    update();
    
}

function update(presskey){
    if (presskey == 43 && start == false){
        start = true;
        spam();
    }
    elif (presskey == 43 && start == true){
        start = false;
        clearInterval(interval);

    }
}
