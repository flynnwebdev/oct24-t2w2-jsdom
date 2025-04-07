// Let's say we got this array from an API request
const data = [
    'Frankenstein',
    'Dracula',
    'Freddie',
    'Jason',
    'Ghost Face'
]

function addCostumeToList(costume) {
    const ul = document.querySelector('#costumeContainer ul')
    const newLi = document.createElement('li')
    // Set the child text of the new li to the value of costume
    newLi.innerText = costume

    // Create a button for removing the item
    const removeButton = document.createElement('button')
    // Set the button caption
    removeButton.innerText = `Remove ${costume}`
    // Attach a click listener
    removeButton.addEventListener('click', () => {
        ul.removeChild(newLi)
        // TODO: Remove item from array as well
    })
    // Append the button to the li
    newLi.appendChild(removeButton)

    // Append li to ul in the DOM as a child element
    ul.appendChild(newLi)
}

// Iterate over data
for (let costume of data) {
    // ul.innerHTML += `
    //     <li>
    //         ${costume}
    //         <button>Remove ${costume}</button>
    //     </li>
    // `
    // Create an <li>
    addCostumeToList(costume)
}

// Listen for form submission
document.querySelector('#newCostumeForm').addEventListener('submit', (event) => {
    event.preventDefault()
    // Get costume from form input
    const newCostumeInput = document.querySelector('#newCostumeForm input')
    const costume = newCostumeInput.value
    // Add the new costume to the list
    addCostumeToList(costume)
    // Clear the input field
    newCostumeInput.value = ''
})
