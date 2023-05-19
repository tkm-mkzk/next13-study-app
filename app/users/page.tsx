import UserList from './UserList'

const Page = async () => {
  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">ユーザー一覧</h1>
      {/* @ts-expect-error Async Server Component */}
      <UserList />
    </div>
  )
}

export default Page
