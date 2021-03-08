import { GetStaticProps, GetStaticPaths } from 'next'

//Next static estático

type Profile = {
    name: string;
    company: string;
}

type ProfileProps = {
    profile: Profile
}

export default function profile({profile}: ProfileProps) {
    return(
        <div>
            <h1>Perfil</h1>
            <p>Nome: {profile.name}</p>
            <p>Company: {profile.company}</p>
        </div>

    )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return{
    paths: [
      { params : { username: 'rbsann'}},
      { params : { username: 'amandahp'}},
      { params : { username: 'diego3g'}}
    ],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => { 
    const { username } = params;

    const response = await fetch(`https://api.github.com/users/${username}`) 
    const data = await response.json();
    
    return {
      props:{
          profile: data
      }, 
      revalidate: 10,
  } 
}