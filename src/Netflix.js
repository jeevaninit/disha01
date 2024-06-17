import React, { useState } from 'react'
import MovieList from './MovieList';
import Navmenu from './Navmenu';



const Netflix = () => {

    const [movies,setMovies]=useState([
        {
            title:'Shaitaan',
            poster:'https://occ-0-6641-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeyJ4VQYMXo3h6fyN_nvfLj0tcKzmnWAQap2qXxLmAQkt_WEpX0OVC6agsBvsFdkFjg4CA3GDmnj8l9-_2lIp8lL4uC3TuzmMF9dP0oGTdHKCvTqaZjC-IRTDzy13hZWj7pzpK58yxHaKSeLiLEDqwCLQdG-VPazX14v7_PK1lDuPmuUdOn2BrQPJtktzlBSEdeu_eELIUHvUrkv4QpqskRV151zoyvOXfvjTi3IaPrLLRAvoIrFeOEbQ3CxXVzw7K_9i13YoWYFeQUfl9z0g_KTF16xAVx9EnSOe_G4HOtR5ib-VDRhque7PEZUa-bM7diLT3elGsMR0Q4nLedbC9s.jpg?r=dc9'
        },
        {
            title:'Article 370',
            poster:'https://occ-0-6641-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABT8W_TBH0eJ5EDz2B211il73PjUZTqsuUQYrtVN6dWf9wCWuQ9nIJdUhSze_p0HO2hXcL7B61rTTBxVcRowD7MfG1lgEw7J0hxvPVJ0P19oDGRl0_2vNc8EnIGzzUHFbJoXypwSdGmNM8-I9RoQtGGoaqklKk4CRKW0.jpg?r=bef'
        },
        {
            title:'Jaane Jaan',
            poster:'https://occ-0-6641-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABek-KlPSc95_NIl85pE1DQw-j1QRIZ2RKrdasw3DatWrg_MkEClXAa2udn8L9F-aTFP_pX_jpMuTFh-9x3q1Onme3-hUBHBsOFBz_9xJnuwlnVBXJfIVVe3WKvrxh3zeSxz-.jpg?r=e5c'
        },
        {
            title:'Darlings',
            poster:'https://occ-0-6641-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXeqpivo8BxOUQ7KGPR4aoGA3WnLJ__G0GgvkBIIFEABbrqlSC3SFmHiObLhvmezjEHb19JZ3-fzfNb0VCEfMO3sJHb7LnaRNautthdcTVJm2wSbgnIWpd5g2mYzZn06-LMQ.jpg?r=064'
        },
        {
            title:'Shaitaan',
            poster:'https://occ-0-6641-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeyJ4VQYMXo3h6fyN_nvfLj0tcKzmnWAQap2qXxLmAQkt_WEpX0OVC6agsBvsFdkFjg4CA3GDmnj8l9-_2lIp8lL4uC3TuzmMF9dP0oGTdHKCvTqaZjC-IRTDzy13hZWj7pzpK58yxHaKSeLiLEDqwCLQdG-VPazX14v7_PK1lDuPmuUdOn2BrQPJtktzlBSEdeu_eELIUHvUrkv4QpqskRV151zoyvOXfvjTi3IaPrLLRAvoIrFeOEbQ3CxXVzw7K_9i13YoWYFeQUfl9z0g_KTF16xAVx9EnSOe_G4HOtR5ib-VDRhque7PEZUa-bM7diLT3elGsMR0Q4nLedbC9s.jpg?r=dc9'
        },
        {
            title:'Article 370',
            poster:'https://occ-0-6641-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABT8W_TBH0eJ5EDz2B211il73PjUZTqsuUQYrtVN6dWf9wCWuQ9nIJdUhSze_p0HO2hXcL7B61rTTBxVcRowD7MfG1lgEw7J0hxvPVJ0P19oDGRl0_2vNc8EnIGzzUHFbJoXypwSdGmNM8-I9RoQtGGoaqklKk4CRKW0.jpg?r=bef'
        },
        {
            title:'Jaane Jaan',
            poster:'https://occ-0-6641-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABek-KlPSc95_NIl85pE1DQw-j1QRIZ2RKrdasw3DatWrg_MkEClXAa2udn8L9F-aTFP_pX_jpMuTFh-9x3q1Onme3-hUBHBsOFBz_9xJnuwlnVBXJfIVVe3WKvrxh3zeSxz-.jpg?r=e5c'
        },
        {
            title:'Darlings',
            poster:'https://occ-0-6641-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXeqpivo8BxOUQ7KGPR4aoGA3WnLJ__G0GgvkBIIFEABbrqlSC3SFmHiObLhvmezjEHb19JZ3-fzfNb0VCEfMO3sJHb7LnaRNautthdcTVJm2wSbgnIWpd5g2mYzZn06-LMQ.jpg?r=064'
        }
    ]);

  return (
    <div>
       <Navmenu />
        <MovieList mvs={movies} />
    </div>
  )
}

export default Netflix