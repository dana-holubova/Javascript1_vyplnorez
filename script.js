const fillcut = (str, len) => {
    len = Number(len)
    let result

    if (len > 0) {
        if (str.length > len) { result = str.slice(0, len) }
        else if (str.length < len) { result = str.padStart(len, ".") }
        else { result = str }
    }

    else { result = "Zadali jste číslo v chybném formátu. Číslo má být kladné a větší než 0." }

    return result
}

/*document.body.innerHTML += fillcut('petr', 8) + '<br>'; // vypíše „....petr“
document.body.innerHTML += fillcut('petr', 3) + '<br>'; // vypíše „pet“
document.body.innerHTML += fillcut('petr', 4) + '<br>'; // vypíše „petr“*/

document.body.innerHTML += fillcut(prompt("Zadejte textový řetětec: "), prompt("Zadejte jeho novou délku v kladných číslech")) + '<br>';

