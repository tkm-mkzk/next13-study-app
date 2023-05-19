import Link from 'next/link'
import Counter from './Counter'
import UserList from './users/UserList'

export default function Home() {
  return (
    <div className="m-4">
      <Link href="/about" className="underline">
        About
      </Link>
      <h1 className="text-2xl">Home</h1>
      <Counter>
        <h2 className="mt-4 text-lg font-bold">ユーザ一覧</h2>
        {/* @ts-expect-error Async Server Component */}
        <UserList />
      </Counter>
    </div>
  )
}
