import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HandshakeIcon, BellIcon, HelpCircleIcon, StarIcon, MessageCircleIcon } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/placeholder.svg?height=40&width=40" alt="SNSTOMO Logo" className="h-10 w-10 mr-2" />
            <span className="text-2xl font-bold text-blue-600">SNSTOMO</span>
          </div>
          <div className="flex items-center">
            <HandshakeIcon className="h-6 w-6 mr-2 text-blue-600" />
            <span className="text-lg font-semibold">SNSTOMOのアフィリエイト募集中</span>
          </div>
        </div>
      </header>

      <div className="flex-1 container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 space-y-4">
          <Card>
            <CardContent className="p-4">
              <img src="/placeholder.svg?height=50&width=50" alt="User Avatar" className="h-12 w-12 rounded-full mx-auto mb-4" />
              <p className="text-center text-sm text-gray-600 mb-4">ログイン後すぐにサービスをご利用いただけます。</p>
              <Button className="w-full mb-2">ログイン</Button>
              <Button variant="outline" className="w-full">会員登録</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-sm text-gray-600">
              <p>会社名：株式会社Qlix</p>
              <p>所在地：〒236-0031 神奈川県横浜市金沢区六浦1丁目20番25-203号</p>
              <p>営業時間：平日09:30 - 18:30（土日祝は除く）</p>
            </CardContent>
          </Card>
        </aside>

        <main className="flex-1 space-y-8">
          <Tabs defaultValue="instagram">
            <TabsList>
              <TabsTrigger value="instagram">Instagram</TabsTrigger>
              <TabsTrigger value="facebook">Facebook</TabsTrigger>
              <TabsTrigger value="twitter">Twitter</TabsTrigger>
              <TabsTrigger value="youtube">YouTube</TabsTrigger>
              <TabsTrigger value="tiktok">TikTok</TabsTrigger>
              <TabsTrigger value="other">その他</TabsTrigger>
            </TabsList>
            <TabsContent value="instagram" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>01→ サービスの種類を選択してください。</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="サービスを選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="likes">Instagram 日本人いいね</SelectItem>
                      <SelectItem value="followers">Instagram 日本人フォロワー</SelectItem>
                      <SelectItem value="comments">Instagram 日本人コメント</SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>02→ 商品を選択してください。</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="商品を選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="likes-100">Instagram本物 日本人 いいね❤️ - 3円 [1個あたり]</SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>03→ 商品説明</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-red-600 mb-2">⏰開始時間: 1分以内</p>
                  <p className="text-sm text-blue-600 mb-4">✍作業速度: 1時間あたり500〜1,000個</p>
                  <Input type="text" placeholder="URLを入力してください" />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>

        <aside className="w-full md:w-64 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BellIcon className="h-5 w-5 mr-2" />
                お知らせ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-blue-600 hover:underline">SNS TOMOの最新口コミをご覧ください。(Ver.2024年7月)</a>
                  <p className="text-gray-600">2024年7月</p>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">SNSTOMOがSNS-CAFEからレビューされました。(Ver.2023年11月)</a>
                  <p className="text-gray-600">2023年11月</p>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <HelpCircleIcon className="h-5 w-5 mr-2" />
                よくある質問
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <StarIcon className="h-5 w-5 mr-2" />
                評価
              </CardTitle>
            </CardHeader>
          </Card>
        </aside>
      </div>

      <footer className="bg-gray-100 border-t">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-gray-600">
          © 2024 SNSTOMO. All rights reserved.
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 flex flex-col gap-2">
        <Button className="rounded-full">
          SNSTOMO利用方法
        </Button>
        <Button className="rounded-full">
          SNSTOMO会員登録
        </Button>
        <Button className="rounded-full bg-green-500 hover:bg-green-600">
          <MessageCircleIcon className="h-5 w-5 mr-2" />
          1:1お問い合わせ
        </Button>
      </div>
    </div>
  )
}