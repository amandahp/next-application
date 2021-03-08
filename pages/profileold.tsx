import { GetStaticProps } from 'next'

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

//export const getStaticPaths: GetStaticPaths = async () => {
    //  return{
    //  paths: []
    //    fallback: 'blocking'
    //}
//}

export const getStaticProps: GetStaticProps = async () => { 
    const response = await fetch('https://api.github.com/users/amandahp') 
    const data = await response.json();

    return {
       props:{
           profile: data
       }, 
       revalidate: 10,
   } 
}