import { Typography } from "./components/ui/Typography";
import { Button } from "./components/ui/Button";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
        <div className="text-center space-y-6 max-w-2xl">
          <Typography variant="caption" className="text-beldi-majorelle animate-fade-in">
            Est. 1994 &bull; Marrakech
          </Typography>

          <Typography variant="h1" className="text-beldi-charcoal animate-slide-up">
            Beldi <span className="text-beldi-majorelle italic">Store</span>
          </Typography>

          <Typography variant="body" className="max-w-md mx-auto text-gray-600 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Curated handcrafted treasures from the heart of Morocco.
            Rugs, ceramics, and leather goods made by master artisans.
          </Typography>

          <div className="flex gap-4 justify-center pt-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="primary" size="lg">
              Explore Collection
            </Button>
            <Button variant="outline" size="lg">
              Our Story
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default App
