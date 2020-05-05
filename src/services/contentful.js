// here I set and export the contentful client so I can use it to fetch my data

import * as contentful from 'contentful'

const client = contentful.createClient({
    space: 'nabdhtiosm6r',
    accessToken: '69LyKay7u0HCs0c_H6WyrsTJ7GDLSWguE0V_2m4yR9g',
})

export default client