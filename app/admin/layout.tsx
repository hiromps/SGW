'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BarChart, Users, Package, FileText, Settings, LogOut } from 'lucide-react'
import Link from 'next/link'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // 実際の実装では、ここでセッションの確認などを行います
    const checkAuth = async () => {
      // 仮の認証チェック
      const auth = localStorage.getItem('adminAuth')
      setIsLoggedIn(auth === 'true')
    }
    checkAuth()
  }, [])

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // 実際の実装では、ここで認証APIを呼び出します
    localStorage.setItem('adminAuth', 'true')
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    setIsLoggedIn(false)
    router.push('/admin')
  }

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md">
          <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h1 className="text-2xl font-bold mb-6 text-center">SNSTOMO 管理画面ログイン</h1>
            <div className="mb-4">
              <Label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                ユーザー名
              </Label>
              <Input type="text" id="username" name="username" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-6">
              <Label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                パスワード
              </Label>
              <Input type="password" id="password" name="password" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="flex items-center justify-between">
              <Button type="submit" className="w-full">
                ログイン
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <nav className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800">SNSTOMO 管理画面</h1>
        </div>
        <ul className="mt-6">
          <li>
            <Link href="/admin" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
              <BarChart className="mr-3" />
              ダッシュボード
            </Link>
          </li>
          <li>
            <Link href="/admin/users" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
              <Users className="mr-3" />
              ユーザー管理
            </Link>
          </li>
          <li>
            <Link href="/admin/products" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
              <Package className="mr-3" />
              商品管理
            </Link>
          </li>
          <li>
            <Link href="/admin/orders" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
              <FileText className="mr-3" />
              注文管理
            </Link>
          </li>
          <li>
            <Link href="/admin/settings" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
              <Settings className="mr-3" />
              設定
            </Link>
          </li>
        </ul>
        <div className="absolute bottom-0 w-64 p-4">
          <Button onClick={handleLogout} variant="outline" className="w-full flex items-center justify-center">
            <LogOut className="mr-2" />
            ログアウト
          </Button>
        </div>
      </nav>
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}