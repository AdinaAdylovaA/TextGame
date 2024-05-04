counter = 0; 
let homeimg = document.getElementById("homeimg")
function first(){ 
    let h1 = document.getElementById("title") 
    let firstInput = document.getElementById("firstInput") 
    if(counter == 0){ 
        counter++; 
 
        let text = firstInput.value 
 
        if(text == "1"){ 
            h1.innerHTML = "Вы закрыли дверь и пошли спать, но проснулись ночью из-за громкого звука   1 - Взять пулемет и позвонить в полицию   2 - Продолжать спать"
        }
        else if(text == "2") 
            h1.innerHTML = "Вы пошли на первый этаж и, ничего не заметив, пошли спать. Ночью вы проснулись из-за громкого звука 1 - Взять пулемет и позвонить в полицию 2 - Продолжать спать"
        } 
    if(counter == 1){ 
        if(text == "1"){ 
            h1.innerHTML = "Вы взяли пулемет и тихо пошли на первый этаж. Повернув головы вы заметили кого-то в проходе"
            homeimg.src = "https://townsquare.media/site/71/files/2018/10/RS1897_139959339.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89"
        }
        else if(text == "2") 
            h1.innerHTML = "Вы проснулись утром и пошли есть сладости НОРМАЛЬНАЯ КОНЦОВКА" 
        } 
} 