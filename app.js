

const getCharacters = async() => {
    const characters = await fetch('https://rickandmortyapi.com/api/character')
                        .then(r => r.json())
    const { results } = characters
    results.forEach(character => {
        const tr = document.createElement('tr')
        // Name
        let td = document.createElement('td')
        td.innerHTML = character.name
        tr.appendChild(td)
        // Status
        td = document.createElement('td')
        td.innerHTML = character.status
        tr.appendChild(td)
        // Species
        td = document.createElement('td')
        td.innerHTML = character.species
        tr.appendChild(td)
        // Type
        td = document.createElement('td')
        td.innerHTML = character.type
        tr.appendChild(td)
        // Gender
        td = document.createElement('td')
        td.innerHTML = character.gender
        tr.appendChild(td)
        // Origin
        td = document.createElement('td')
        td.innerHTML = character.origin.name
        tr.appendChild(td)
        // Location
        td = document.createElement('td')
        td.innerHTML = character.location.name
        tr.appendChild(td)

        document.querySelector('tbody').append(tr)
    })
}

getCharacters()
