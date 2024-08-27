'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Product = {
  id: number;
  name: string;
  service: string;
  price: number;
  startTime: string;
  workSpeed: string;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [productToDelete, setProductToDelete] = useState<Product | null>(null)

  useEffect(() => {
    // 実際の実装では、ここでAPIからデータを取得します
    const fetchProducts = async () => {
      // 仮のデータ
      setProducts([
        { id: 1, name: "Instagram本物 日本人 いいね❤️", service: "Instagram", price: 3, startTime: "1分以内", workSpeed: "1時間あたり500〜1,000個" },
        { id: 2, name: "Instagram 日本人フォロワー", service: "Instagram", price: 5, startTime: "5分以内", workSpeed: "1時間あたり300〜500個" },
      ])
    }
    fetchProducts()
  }, [])

  const handleAddProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newProduct: Product = {
      id: products.length + 1,
      name: formData.get('name') as string,
      service: formData.get('service') as string,
      price: Number(formData.get('price')),
      startTime: formData.get('startTime') as string,
      workSpeed: formData.get('workSpeed') as string,
    }
    setProducts([...products, newProduct])
    event.currentTarget.reset()
  }

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product)
  }

  const handleUpdateProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const updatedProduct: Product = {
      ...editingProduct!,
      name: formData.get('name') as string,
      service: formData.get('service') as string,
      price: Number(formData.get('price')),
      startTime: formData.get('startTime') as string,
      workSpeed: formData.get('workSpeed') as string,
    }
    setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p))
    setEditingProduct(null)
  }

  const handleDeleteProduct = (product: Product) => {
    setProductToDelete(product)
    setIsDeleteDialogOpen(true)
  }

  const confirmDelete = () => {
    if (productToDelete) {
      setProducts(products.filter(p => p.id !== productToDelete.id))
      setIsDeleteDialogOpen(false)
      setProductToDelete(null)
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">商品管理</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">商品一覧</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>名前</TableHead>
              <TableHead>サービス</TableHead>
              <TableHead>価格</TableHead>
              <TableHead>開始時間</TableHead>
              <TableHead>作業速度</TableHead>
              <TableHead>操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.service}</TableCell>
                <TableCell>{product.price}円</TableCell>
                <TableCell>{product.startTime}</TableCell>
                <TableCell>{product.workSpeed}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEditProduct(product)} className="mr-2">編集</Button>
                  <Button onClick={() => handleDeleteProduct(product)} variant="destructive">削除</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">新規商品追加</h2>
        <form onSubmit={handleAddProduct} className="space-y-4">
          <div>
            <Label htmlFor="name">商品名</Label>
            <Input id="name" name="name" required />
          </div>
          <div>
            <Label htmlFor="service">サービス</Label>
            <Select name="service" required>
              <SelectTrigger>
                <SelectValue placeholder="サービスを選択" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Instagram">Instagram</SelectItem>
                <SelectItem value="Facebook">Facebook</SelectItem>
                <SelectItem value="Twitter">Twitter</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="price">価格</Label>
            <Input id="price" name="price" type="number" required />
          </div>
          <div>
            <Label htmlFor="startTime">開始時間</Label>
            <Input id="startTime" name="startTime" required />
          </div>
          <div>
            <Label htmlFor="workSpeed">作業速度</Label>
            <Input id="workSpeed" name="workSpeed" required />
          </div>
          <Button type="submit">追加</Button>
        </form>
      </div>

      {editingProduct && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">商品編集</h2>
          <form onSubmit={handleUpdateProduct} className="space-y-4">
            <div>
              <Label htmlFor="edit-name">商品名</Label>
              <Input id="edit-name" name="name" defaultValue={editingProduct.name} required />
            </div>
            <div>
              <Label htmlFor="edit-service">サービス</Label>
              <Select name="service" defaultValue={editingProduct.service} required>
                <SelectTrigger>
                  <SelectValue placeholder="サービスを選択" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Instagram">Instagram</SelectItem>
                  <SelectItem value="Facebook">Facebook</SelectItem>
                  <SelectItem value="Twitter">Twitter</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="edit-price">価格</Label>
              <Input id="edit-price" name="price" type="number" defaultValue={editingProduct.price} required />
            </div>
            <div>
              <Label htmlFor="edit-startTime">開始時間</Label>
              <Input id="edit-startTime" name="startTime" defaultValue={editingProduct.startTime} required />
            </div>
            <div>
              <Label htmlFor="edit-workSpeed">作業速度</Label>
              <Input id="edit-workSpeed" name="workSpeed" defaultValue={editingProduct.workSpeed} required />
            </div>
            <Button type="submit">更新</Button>
            <Button type="button" variant="outline" onClick={() => setEditingProduct(null)} className="ml-2">キャンセル</Button>
          </form>
        </div>
      )}

      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>商品の削除確認</DialogTitle>
          </DialogHeader>
          <p>本当に「{productToDelete?.name}」を削除しますか？</p>
          <div className="flex justify-end gap-2 mt-4">
            <Button onClick={() => setIsDeleteDialogOpen(false)} variant="outline">キャンセル</Button>
            <Button onClick={confirmDelete} variant="destructive">削除</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}