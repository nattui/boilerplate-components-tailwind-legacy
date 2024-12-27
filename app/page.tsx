import Button from "@/components/button"
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr"

export default function Home() {
  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center gap-16">
      <div className="flex items-center justify-center gap-4">
        <Button size="small" startIcon={<ArrowLeft size={14} />}>
          Small
        </Button>
        <Button size="medium" startIcon={<ArrowLeft size={16} />}>
          Medium
        </Button>
        <Button size="large" startIcon={<ArrowLeft size={18} />}>
          Large
        </Button>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Button endIcon={<ArrowRight size={14} />} size="small">
          Small
        </Button>
        <Button endIcon={<ArrowRight size={16} />} size="medium">
          Medium
        </Button>
        <Button endIcon={<ArrowRight size={18} />} size="large">
          Large
        </Button>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Button
          endIcon={<ArrowRight size={14} />}
          size="small"
          startIcon={<ArrowLeft size={14} />}
        >
          Small
        </Button>
        <Button
          endIcon={<ArrowRight size={16} />}
          size="medium"
          startIcon={<ArrowLeft size={14} />}
        >
          Medium
        </Button>
        <Button
          endIcon={<ArrowRight size={18} />}
          size="large"
          startIcon={<ArrowLeft size={14} />}
        >
          Large
        </Button>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Button disabled size="small">
          Small
        </Button>
        <Button disabled size="medium">
          Medium
        </Button>
        <Button disabled size="large">
          Large
        </Button>
      </div>
    </div>
  )
}
