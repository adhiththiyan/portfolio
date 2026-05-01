import { Navigation } from "@/components/layout";
import { HeroSection } from "@/components/sections";
import Image from "next/image";

export default function Home() {
  return (
     <div className="min-h-screen flex flex-col font-sans selection:bg-primary/30">
                    <Navigation />
                    <main className="flex-grow">
                        <HeroSection />
                        
                        <section className="py-20 border-t border-border bg-card/30">
                            <div className="max-w-7xl mx-auto px-4 text-center">
                                <h2 className="text-3xl font-bold mb-8 text-foreground">Build Faster</h2>
                                <div className="grid md:grid-cols-3 gap-8">
                                    {[1, 2, 3].map((item) => (
                                        <div key={item} className="p-6 bg-card border border-border rounded-lg">
                                            <div className="w-12 h-12 bg-muted rounded-md mb-4 mx-auto"></div>
                                            <h3 className="text-lg font-medium mb-2">Feature {item}</h3>
                                            <p className="text-muted-foreground text-sm">
                                                Description goes here to fill up space and show layout structure.
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </main>
                    <footer className="py-8 border-t border-border text-center text-muted-foreground text-sm">
                        <p>© 2023 NexusUI. All rights reserved.</p>
                    </footer>
                </div>
  );
}

