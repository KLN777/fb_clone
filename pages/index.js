import Head from 'next/head'
import Header from '../components/Header'
import {getSession} from"next-auth/client"
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
export default function Home({session}) {
  if(!session) return <Login/>
  return (
    <div className="overflow-hidden bg-gray-100 h-screen">
      <Head>
        <title>Facebook</title>
      </Head>
      
      {/*Header*/}
      <Header/>

      <main className="flex">
        {/*Sidebar*/}
        <Sidebar/>
        {/*Feed*/}
        <Feed/>
        {/*Widgets*/}
        <Widgets/>
      </main>
    </div>
  )
}

export async function getServerSideProps(context){

  const session = await getSession(context);

  return {
    props:{
      session
    }
  }
}
