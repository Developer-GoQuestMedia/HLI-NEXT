import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Pencil, Languages, Mic } from 'lucide-react'

export default function ArtistSelect({ onSelect }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-purple-400 to-pink-500 p-4">
      <Card className="w-full max-w-2xl bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/75">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Select Artist Type</CardTitle>
          <CardDescription>Choose your role to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              variant="outline"
              className="h-32 w-full flex flex-col items-center justify-center gap-4 hover:bg-purple-50"
              onClick={() => onSelect('transcriptor')}
            >
              <Pencil className="h-8 w-8" />
              <span className="font-medium">Transcriptor</span>
            </Button>
            <Button
              variant="outline"
              className="h-32 w-full flex flex-col items-center justify-center gap-4 hover:bg-purple-50"
              onClick={() => onSelect('translator')}
            >
              <Languages className="h-8 w-8" />
              <span className="font-medium">Translator</span>
            </Button>
            <Button
              variant="outline"
              className="h-32 w-full flex flex-col items-center justify-center gap-4 hover:bg-purple-50"
              onClick={() => onSelect('voice-over')}
            >
              <Mic className="h-8 w-8" />
              <span className="font-medium">Voice Over</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

