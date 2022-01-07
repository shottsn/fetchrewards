import Head from 'next/head'
import Main from '../components/Main'
import Form from '../components/Form'
import Card from '../components/Card'

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
                    <Form formData={props.formData}/>
                </Card>
            </Main>
        </>
    )
}

export async function getServerSideProps() {
  const res = await fetch(`https://frontend-take-home.fetchrewards.com/form`)
  const formData = await res.json()
  return {
    props: {
      formData,
    },
  }
}