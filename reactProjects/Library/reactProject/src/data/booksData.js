
export const getBooks = () => {
    const books = JSON.parse(localStorage.getItem('books'))
    return books ? books : []
}

export const setBooksToLocalStorage = (books) => localStorage.setItem('books', JSON.stringify(books))

export const setCurrentLevelLocalStorage = (level) => {
    localStorage.setItem('currentLevel', JSON.stringify(level))
}

export const getCurrentLevel = ()=>{
   return JSON.parse(localStorage.getItem('currentLevel'))
}

export const resetCurrentLevel = () => {
    localStorage.removeItem('currentLevel')
}

const accessLevels = [
    {   
        name: 'Prime',
        level: 'prime',
        password: 'prime'
    },
    {   
        name: 'Admin',
        level: 'admin',
        password: 'admin'
    }
]

export const loginUser = (data) => {
    const user = accessLevels.find(u => u.level === data.level)
    return user ? (user.password === data.password ? user : null) : null
}

