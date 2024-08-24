const textInput = document.getElementById("text-input")
const decryptButton = document.getElementById("decrypt-button")
const encryptButton = document.getElementById("encrypt-button")
const outputTextContainer = document.getElementById("output-text-container")

function validate() {
    if(textInput.value == ""){
        return ""
    }else{
        return textInput.value
    }
}

function displayError() {
    outputTextContainer.innerHTML = ""

    const emptyImage = document.createElement("img")
    emptyImage.src = "/assets/empty-output-image.svg"

    const titleEmpty = document.createElement("h2")
    titleEmpty.className = "empty-title"
    titleEmpty.innerText = "Nenhuma mensagem encontrada"

    const emptyParagraph = document.createElement("p")
    emptyParagraph.className = "empty-paragraph"
    emptyParagraph.innerText = "Digite um texto que você deseja criptografar ou descriptografar."

    const emptyDiv = document.createElement("div")
    emptyDiv.className = "empty-info"

    emptyDiv.appendChild(titleEmpty)
    emptyDiv.appendChild(emptyParagraph)


    outputTextContainer.appendChild(emptyImage)
    outputTextContainer.appendChild(emptyDiv)
}

function displayText(text) {
    outputTextContainer.innerHTML = ""

    const userOutput = document.createElement("p")
    userOutput.className = "text-area user-output"
    userOutput.id = "user-output"
    userOutput.innerText = text

    const buttonForCopy = document.createElement("button")
    buttonForCopy.className = "button copy-message"
    buttonForCopy.innerText = "Copiar"
    buttonForCopy.addEventListener("click", (event) => {
        event.preventDefault()
        navigator.clipboard.writeText(text)
    })

    outputTextContainer.appendChild(userOutput)
    outputTextContainer.appendChild(buttonForCopy)
}

function encryptText(text) {
    return text
        .replace(/a/g, "ai")
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat")
}

function decryptText(text) {
    return text
        .replace(/ufat/g, "u")
        .replace(/ober/g, "o")
        .replace(/imes/g, "i")
        .replace(/enter/g, "e")
        .replace(/ai/g, "a")
}

decryptButton.addEventListener("click", (event) => {
    event.preventDefault()

    event.preventDefault()

    const validationResponse = validate()

    if(validationResponse == ""){
        displayError()
    }else{
        const decryptedText = decryptText(validationResponse)
        displayText(decryptedText)
    }
})

encryptButton.addEventListener("click", (event) => {
    event.preventDefault()

    const validationResponse = validate()

    if(validationResponse == ""){
        displayError()
    }else{
        const encryptedText = encryptText(validationResponse)
        displayText(encryptedText)
    }
})