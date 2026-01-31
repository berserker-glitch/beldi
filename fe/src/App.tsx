import { Typography } from "./components/ui/Typography";
import { Button } from "./components/ui/Button";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-beldi-sand p-4">
      <div className="text-center space-y-6 max-w-2xl">
        <Typography variant="caption" className="text-beldi-majorelle">
          Est. 1994 &bull; Marrakech
        </Typography>

        <Typography variant="h1" className="text-beldi-charcoal">
          Beldi <span className="text-beldi-majorelle italic">Store</span>
        </Typography>

        <Typography variant="body" className="max-w-md mx-auto text-gray-600">
          Curated handcrafted treasures from the heart of Morocco.
          Rugs, ceramics, and leather goods made by master artisans.
        </Typography>

        <div className="flex gap-4 justify-center pt-4">
          <Button variant="primary" size="lg">
            Explore Collection
          </Button>
          <Button variant="outline" size="lg">
            Our Story
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
