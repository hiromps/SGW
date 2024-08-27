'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

type User = {
  id: number;
  name: string;
  email: string;
  registeredDate: string;
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [userToDelete, setUserToDelete] = useState<User | null>(null)

  useEffect(() => {
    // 実際の実装では、ここでAPIからデータを取得します
    const fetchUsers = async () => {
      // 仮のデータ
      setUsers([
        { id: 1, name: "山田太郎", email: "yamada@example.com", registeredDate: "2023-01-01" },
        { id: 2, name: "佐藤花子", email: "sato@example.com", registeredDate: "2023-02-15" },
      ])
    }
    fetchUsers()
  }, [])

  const handleAddUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newUser: User = {
      id: users.length + 1,
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      registeredDate: new Date().toISOString().split('T')[0],
    }
    setUsers([...users, newUser])
    event.currentTarget.reset()
  }

  const handleEditUser = (user: User) => {
    setEditingUser(user)
  }

  const handleUpdateUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const updatedUser: User = {
      ...editingUser!,
      name: formData.get('name') as string,
      email: formData.get('email') as string,
    }
    setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u))
    setEditingUser(null)
  }

  const handleDeleteUser = (user: User) => {
    setUserToDelete(user)
    setIsDeleteDialogOpen(true)
  }

  const confirmDelete = () => {
    if (userToDelete) {
      setUsers(users.filter(u => u.id !== userToDelete.id))
      setIsDeleteDialogOpen(false)
      setUserToDelete(null)
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">ユーザー管理</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">ユーザー一覧</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>名前</TableHead>
              <TableHead>メールアドレス</TableHead>
              <TableHead>登録日</TableHead>
              <TableHead>操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.registeredDate}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEditUser(user)} className="mr-2">編集</Button>
                  <Button onClick={() => handleDeleteUser(user)} variant="destructive">削除</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">新規ユーザー追加</h2>
        <form onSubmit={handleAddUser} className="space-y-4">
          <div>
            <Label htmlFor="name">名前</Label>
            <Input id="name" name="name" required />
          </div>
          <div>
            <Label htmlFor="email">メールアドレス</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <Button type="submit">追加</Button>
        </form>
      </div>

      {editingUser && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">ユーザー編集</h2>
          <form onSubmit={handleUpdateUser} className="space-y-4">
            <div>
              <Label htmlFor="edit-name">名前</Label>
              <Input id="edit-name" name="name" defaultValue={editingUser.name} required />
            </div>
            <div>
              <Label htmlFor="edit-email">メールアドレス</Label>
              <Input id="edit-email" name="email" type="email" defaultValue={editingUser.email} required />
            </div>
            <Button type="submit">更新</Button>
            <Button type="button" variant="outline" onClick={() => setEditingUser(null)} className="ml-2">キャンセル</Button>
          </form>
        </div>
      )}

      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>ユーザーの削除確認</DialogTitle>
          </DialogHeader>
          <p>本当に「{userToDelete?.name}」を削除しますか？</p>
          <div className="flex justify-end gap-2 mt-4">
            <Button onClick={() => setIsDeleteDialogOpen(false)} variant="outline">キャンセル</Button>
            <Button onClick={confirmDelete} variant="destructive">削除</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}