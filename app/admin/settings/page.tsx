'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    siteName: 'SNSTOMO',
    siteDescription: 'SNSマーケティングサービス',
    contactEmail: 'contact@snst.com',
    enableNotifications: true,
    maintenanceMode: false,
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setSettings(prev => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (name: string) => {
    setSettings(prev => ({ ...prev, [name]: !prev[name as keyof typeof prev] }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // 実際の実装では、ここで設定を保存するAPIを呼び出します
    console.log('Settings saved:', settings)
    alert('設定が保存されました')
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">設定</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="siteName">サイト名</Label>
          <Input
            id="siteName"
            name="siteName"
            value={settings.siteName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="siteDescription">サイトの説明</Label>
          <Textarea
            id="siteDescription"
            name="siteDescription"
            value={settings.siteDescription}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="contactEmail">連絡先メールアドレス</Label>
          <Input
            id="contactEmail"
            name="contactEmail"
            type="email"
            value={settings.contactEmail}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="enableNotifications"
            checked={settings.enableNotifications}
            onCheckedChange={() => handleSwitchChange('enableNotifications')}
          />
          <Label htmlFor="enableNotifications">通知を有効にする</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="maintenanceMode"
            checked={settings.maintenanceMode}
            onCheckedChange={() => handleSwitchChange('maintenanceMode')}
          />
          <Label htmlFor="maintenanceMode">メンテナンスモード</Label>
        </div>

        <Button type="submit">設定を保存</Button>
      </form>
    </div>
  )
}