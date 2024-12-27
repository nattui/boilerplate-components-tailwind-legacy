import Button from "@/components/button"
import { AnchorSimple } from "@phosphor-icons/react/dist/ssr"

export default function Home() {
  return (
    <div className="flex h-[100dvh] items-center justify-center">
      <div className="flex items-center justify-center gap-4">
        <Button size="small">
          <div className="flex items-center gap-4">
            <AnchorSimple size={14} />
            <span>Small</span>
          </div>
        </Button>
        <Button size="medium">
          <div className="flex items-center gap-6">
            <AnchorSimple size={16} />
            <span>Medium</span>
          </div>
        </Button>
        <Button size="large">
          <div className="flex items-center gap-8">
            <AnchorSimple size={18} />
            <span>Large</span>
          </div>
        </Button>
      </div>
    </div>
  )
}
