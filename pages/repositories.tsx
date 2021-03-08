import {useState, useEffect} from 'react'

//Não é em next É EM REACT
//chamada da API no browser

type Repo = {
    name: string;
    description: string;
}

export default function repositories() {
    const [repos, setRepos] = useState<Repo[]>([])

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then((data) => setRepos(data))
    }, [])

    return(
        <div>
            <h1>Repositories</h1>
            <ul>
                {repos.map(repo => (
                    <li key={repo.name}>{repo.name}</li>
                ))}
            </ul>
        </div>

    )
}