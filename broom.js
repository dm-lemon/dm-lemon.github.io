messages = ["Do you want to be above or below?","I'm creaming just looking at you","Get your ass on that bed","let me fill you up","Last night was great","I love doggy style","Can I stick it in","I'm gonna fill you up","Last night was amazing, lets do it again"];
start = false;
while (start = false){
    ModAPI.addEventListener("key", update(key))

}
while (start == true){
    randint = Math.floor(Math.random() * 10);
    msg = messages[randint];
    Minecraft.getMinecraft().player.sendChatMessage(msg);
    update();
    
}

function update(presskey){
    if (presskey == "KEY_BACKSLASH" && start == false){
        start = true;
    }
    elif (presskey == "KEY_BACKSLASH" && start == true){
        start = false;
    }
}