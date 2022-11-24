myParagraph = document.querySelector ('p')

/*pytanie - zastanawiam się, dlaczego w konsoli wyświetla mi się tutaj paragraf już z dodanym tekstem, chociaż zmienna myParagraph przyjmuje wartość tekstową dopiero niżej */
console.log(myParagraph)

myParagraph.textContent = 'Lorem ipsum'

/* sprawdzenie */
console.log(myParagraph)