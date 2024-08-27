'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Order = {
  id: number;
  userId: number;
  productId: number;
  quantity: number;
  totalPrice: number;
  status: string;
  orderDate: string;
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false)

  useEffect(() => {
    // 実際の実装では、ここでAPIからデータを取得します
    const fetchOrders = async () => {
      // 仮のデータ
      setOrders([
        { id: 1, userId: 1, productId: 1, quantity: 100, totalPrice: 300, status: "完了", orderDate: "2023-06-01" },
        { id: 2, userId: 2, productId: 2, quantity: 200, totalPrice: 1000, status: "処理中", orderDate: "2023-06-02" },
      ])
    }
    fetchOrders()
  }, [])

  const handleViewDetails = (order: Order) => {
    setSelectedOrder(order)
    setIsDetailsDialogOpen(true)
  }

  const handleUpdateStatus = (orderId: number, newStatus: string) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ))
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">注文管理</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">注文一覧</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>注文ID</TableHead>
              <TableHead>ユーザーID</TableHead>
              <TableHead>商品ID</TableHead>
              <TableHead>数量</TableHead>
              <TableHead>合計金額</TableHead>
              <TableHead>ステータス</TableHead>
              <TableHead>注文日</TableHead>
              <TableHead>操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.userId}</TableCell>
                <TableCell>{order.productId}</TableCell>
                <TableCell>{order.quantity}</TableCell>
                <TableCell>¥{order.totalPrice.toLocaleString()}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>{order.orderDate}</TableCell>
                <TableCell>
                  <Button onClick={() => handleViewDetails(order)} className="mr-2">詳細</Button>
                  <Select onValueChange={(value) => handleUpdateStatus(order.id, value)} defaultValue={order.status}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="ステータス変更" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="処理中">処理中</SelectItem>
                      <SelectItem value="発送済み">発送済み</SelectItem>
                      <SelectItem value="完了">完了</SelectItem>
                      <SelectItem value="キャンセル">キャンセル</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isDetailsDialogOpen} onOpenChange={setIsDetailsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>注文詳細</DialogTitle>
          </DialogHeader>
          {selectedOrder && (
            <div>
              <p>注文ID: {selectedOrder.id}</p>
              <p>ユーザーID: {selectedOrder.userId}</p>
              <p>商品ID: {selectedOrder.productId}</p>
              <p>数量: {selectedOrder.quantity}</p>
              <p>合計金額: ¥{selectedOrder.totalPrice.toLocaleString()}</p>
              <p>ステータス: {selectedOrder.status}</p>
              <p>注文日: {selectedOrder.orderDate}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}