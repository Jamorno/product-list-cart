import { Red_Hat_Text } from "next/font/google"
import Content from "@/components/content"
import CartViewSection from "@/components/cartViewSection"

const redHat = Red_Hat_Text({
  subsets: ["latin-ext"],
  weight: ["400", "600", "700"]
})

export default function Home() {
  return (
    <main className={`${redHat.className}`}>
      <div className="p-6 lg:p-12 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold">
          Desserts
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-[4fr_1.5fr] lg:gap-8">
          <Content />
          <CartViewSection />
        </div>
      </div>
    </main>
  )
}
