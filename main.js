
function Words() {

    var spaces = 0
    var voyelle = 0
    var Nbword_ = document.getElementById('Nbword')
    var Nbcharacters_ = document.getElementById('Nbcharacters')
    var Nbvowels_ = document.getElementById('Nbvowels')
    const ph = document.getElementById("phrase").value

    for (let i = 0; i < ph.length; i++) {
        if (ph[i] == ' ') {
            spaces++
        }
        if (ph[i] == 'a' || ph[i] == 'e' || ph[i] == 'i' || ph[i] == 'o' || ph[i] == 'u' || ph[i] == 'y' || ph[i] == 'A' || ph[i] == 'E' || ph[i] == 'I' || ph[i] == 'O' || ph[i] == 'U' || ph[i] == 'Y') {
            voyelle++
        }
    }

    const WordsNb = spaces + 1;
    console.log(`The number of words in the sentence is: ${WordsNb}`)
    const CharacterNb = ph.length - spaces - 1
    console.log(`the number of characters is: ${CharacterNb}`)
    console.log(`The number of vowels in the sentence is: ${voyelle}`)

    Nbword_.innerHTML = `The number of words in the sentence is: ${WordsNb}`
    Nbcharacters_.innerHTML = `the number of characters is: ${CharacterNb}`
    Nbvowels_.innerHTML = `The number of vowels in the sentence is: ${voyelle}`


}
