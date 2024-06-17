import React from 'react'

const ConditionTesting3 = () => {

    const books=[
        {
            id:1,
            title:'HTML Black Book',
            author:'Jeevan Konduru',
            yearPublished:1992
        },
        {
            id:2,
            title:'CassCading Styles',
            author:'Bhanu',
            yearPublished:1960
        },
        {
            id:3,
            title:'Java',
            author:'Sai',
            yearPublished:1947
        },
        {
            id:4,
            title:'Python',
            author:'Sandeep',
            yearPublished:1999
        },
    ]


    const filterBooks=books.filter((book)=>book.yearPublished<1960)

  return (
    <div>
        <h1>Array of Object with Condition Statement and using Filters,Map</h1>

        <table border={1}>

            <thead>
            <tr>
                <th>ID</th>
                <th>Book Title</th>
                <th>Author</th>
                <th>Year to Published</th>
            </tr>
            </thead>

            <tbody>
                {filterBooks.map(
                    (book,indexkey)=>(
                        <tr key={indexkey}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.yearPublished}</td>
                        </tr>
                    )
                )}
            </tbody>

        </table>
    </div>
  )
}

export default ConditionTesting3