import Button from "@/components/button"
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr"

export default function Home() {
  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center gap-16">
      <div className="flex items-center justify-center gap-4">
        <Button size="small">
          <ArrowLeft size={14} />
          <span>Small</span>
        </Button>
        <Button size="medium">
          <ArrowLeft size={16} />
          <span>Medium</span>
        </Button>
        <Button size="large">
          <ArrowLeft size={18} />
          <span>Large</span>
        </Button>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Button size="small">
          <span>Small</span>
          <ArrowRight size={14} />
        </Button>
        <Button size="medium">
          <span>Medium</span>
          <ArrowRight size={16} />
        </Button>
        <Button size="large">
          <span>Large</span>
          <ArrowRight size={18} />
        </Button>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Button size="small">
          <ArrowLeft size={14} />
          <span>Small</span>
          <ArrowRight size={14} />
        </Button>
        <Button size="medium">
          <ArrowLeft size={14} />
          <span>Medium</span>
          <ArrowRight size={16} />
        </Button>
        <Button size="large">
          <ArrowLeft size={14} />
          <span>Large</span>
          <ArrowRight size={18} />
        </Button>
      </div>
    </div>
  )
}
