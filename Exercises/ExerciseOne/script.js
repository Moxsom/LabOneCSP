
function selectCreature(name) {
    
    let selectCreature = document.getElementById("guestTypeDropdown").value;

    let costumeInfo;

    switch (selectCreature) {
        case "Wizard":
            costumeInfo = "Wizards should wear pointy hats and carry wands!";
            break;
        case "Dragon":
            costumeInfo = "Dragons should wear fiery costumes and breathe imaginary fire!";            
            break;
        case "Fairy":
            costumeInfo = "Fairies should wear sparkly dresses and spread glitter magic!";            
            break;
        case "Unicorn":
            costumeInfo = "Unicorns should wear horned headbands and have rainbow-colored manes!";            
            break;
        default:
            costumeInfo = "Hmm, I'm not sure what costume to give to this guest.";
           
    }
    document.getElementById("costumeInfo").textContent = costumeInfo;
}
    
