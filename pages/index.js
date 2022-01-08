import Head from 'next/head'
import Main from '../components/Main/Main'
import Form from '../components/Form/Form'
import Card from '../components/Card/Card'

export default function Home(props) {
    return (
        <>
            <Head>
                <title>Fetch Rewards</title>
                <meta name="description" content="Tech assessment for Fetch Rewards." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Main>
                <Card title="Create User">
                    <Form formData={props.formData} />
                </Card>
            </Main>
        </>
    )
}


// This is a built-in Next.js function that fetches the data to set the props on the server side.
// This specific function fetches the data on each page load. There are others that fetch and set the data at build time, but I didn't know if the endpoint was doing to change.
export async function getServerSideProps() {
  const res = await fetch(`https://frontend-take-home.fetchrewards.com/form`)
  const formData = await res.json()
  return {
    props: {
      formData,
    },
  }
}