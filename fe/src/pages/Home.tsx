import { Typography } from "../components/ui/Typography";
import { Button } from "../components/ui/Button";

export function HomePage() {
    return (
        <div className="space-y-20 pb-20">
            {/* Hero Section */}
            <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-beldi-tadelaktLight/30">
                <div className="absolute inset-0 bg-cover bg-center opacity-90" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2678&auto=format&fit=crop')" }} />
                <div className="absolute inset-0 bg-black/20" />

                <div className="relative container-custom text-center space-y-6 animate-fade-in text-white">
                    <Typography variant="caption" className="text-white/90 tracking-[0.3em]">
                        Since 1994
                    </Typography>
                    <Typography variant="h1" className="text-white text-6xl md:text-8xl lg:text-9xl tracking-tight">
                        The Soul of <br /><span className="italic">Morocco</span>
                    </Typography>
                    <Typography variant="body" className="max-w-xl mx-auto text-lg md:text-xl text-white/90">
                        Handcrafted heritage for the modern home. Rugs, ceramics, and artifacts sourced directly from the Atlas Mountains.
                    </Typography>
                    <div className="pt-8">
                        <Button variant="primary" size="lg" className="bg-white text-beldi-majorelle hover:bg-beldi-sand border-none">
                            Shop The Collection
                        </Button>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <Typography variant="h2" className="text-beldi-majorelle">
                        Modern Beldi
                    </Typography>
                    <Typography variant="body" className="text-gray-600">
                        We bridge the gap between ancient craftsmanship and contemporary design. Every piece in our collection tells a story of patience, skill, and heritage.
                        From the clay pits of Tamegroute to the weaving looms of the High Atlas, we bring you the authentic spirit of Morocco.
                    </Typography>
                    <Button variant="link" className="px-0 text-beldi-terracotta">
                        Read Our Story &rarr;
                    </Button>
                </div>
                <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1517260739337-6799d2cc9fe4?q=80&w=2669&auto=format&fit=crop"
                        alt="Artisan at work"
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </section>
        </div>
    );
}
