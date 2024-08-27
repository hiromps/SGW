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
            <img src="/path-to-your-logo.png" alt="SNSTOMO Logo" className="h-10 w-10 mr-2" />
            <span className="text-2xl font-bold text-blue-600">SNSTOMO</span>
          </div>
          <div className="flex items-center">
            <HandshakeIcon className="h-6 w-6 mr-2 text-blue-600" aria-hidden="true" />
            <span className="text-lg font-semibold">SNSTOMOのアフィリエイト募集中</span>
          </div>
        </div>
      </header>

      <div className="flex-1 container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 space-y-4">
          <Card>
            <CardContent className="p-4">
              <img src="/path-to-user-avatar.png" alt="User Avatar" className="h-12 w-12 rounded-full mx-auto mb-4" />
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
            <TabsList className="flex flex-wrap">
              <TabsTrigger value="instagram">Instagram</TabsTrigger>
              <TabsTrigger value="facebook">Facebook</TabsTrigger>
              <TabsTrigger value="twitter">Twitter</TabsTrigger>
              <TabsTrigger value="youtube">YouTube</TabsTrigger>
              <TabsTrigger value="tiktok">TikTok</TabsTrigger>
              <TabsTrigger value="other">その他</TabsTrigger>
            </TabsList>
            <TabsContent value="instagram" className="space-y-4">
              {/* Instagram content */}
            </TabsContent>
            <TabsContent value="facebook" className="space-y-4">
              {/* Facebook content */}
            </TabsContent>
            <TabsContent value="twitter" className="space-y-4">
              {/* Twitter content */}
            </TabsContent>
            <TabsContent value="youtube" className="space-y-4">
              {/* YouTube content */}
            </TabsContent>
            <TabsContent value="tiktok" className="space-y-4">
              {/* TikTok content */}
            </TabsContent>
            <TabsContent value="other" className="space-y-4">
              {/* Other content */}
            </TabsContent>
          </Tabs>
        </main>

        <aside className="w-full md:w-64 space-y-4">
          {/* Aside content remains the same */}
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
          <MessageCircleIcon className="h-5 w-5 mr-2" aria-hidden="true" />
          1:1お問い合わせ
        </Button>
      </div>
    </div>
  )
}