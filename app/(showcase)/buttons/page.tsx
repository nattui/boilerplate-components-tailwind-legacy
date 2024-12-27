import Button from "@/components/button"
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr"

export default function ButtonsPage() {
  return (
    <div className="flex h-[100dvh] flex-col items-center gap-16 overflow-y-auto py-128">
      {/* Example */}
      <div className="flex items-center justify-center gap-8">
        <Button>Add goal</Button>
      </div>

      {/* Variant */}
      <div className="flex items-center justify-center gap-8">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </div>

      {/* Base */}
      <div className="flex items-center justify-center gap-8">
        <Button size="extraSmall">Extra small</Button>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
        <Button size="extraLarge">Extra large</Button>
      </div>

      {/* Leading visual */}
      <div className="flex items-center justify-center gap-8">
        <Button leadingVisual={<ArrowLeft />} size="extraSmall">
          Extra small
        </Button>
        <Button leadingVisual={<ArrowLeft />} size="small">
          Small
        </Button>
        <Button leadingVisual={<ArrowLeft />} size="medium">
          Medium
        </Button>
        <Button leadingVisual={<ArrowLeft />} size="large">
          Large
        </Button>
        <Button leadingVisual={<ArrowLeft />} size="extraLarge">
          Extra large
        </Button>
      </div>

      {/* Trailing visual */}
      <div className="flex items-center justify-center gap-8">
        <Button size="extraSmall" trailingVisual={<ArrowRight />}>
          Extra small
        </Button>
        <Button size="small" trailingVisual={<ArrowRight />}>
          Small
        </Button>
        <Button size="medium" trailingVisual={<ArrowRight />}>
          Medium
        </Button>
        <Button size="large" trailingVisual={<ArrowRight />}>
          Large
        </Button>
        <Button size="extraLarge" trailingVisual={<ArrowRight />}>
          Extra large
        </Button>
      </div>

      {/* Leading and trailing visual */}
      <div className="flex items-center justify-center gap-8">
        <Button
          leadingVisual={<ArrowLeft />}
          size="extraSmall"
          trailingVisual={<ArrowRight />}
        >
          Extra small
        </Button>
        <Button
          leadingVisual={<ArrowLeft />}
          size="small"
          trailingVisual={<ArrowRight />}
        >
          Small
        </Button>
        <Button
          leadingVisual={<ArrowLeft />}
          size="medium"
          trailingVisual={<ArrowRight />}
        >
          Medium
        </Button>
        <Button
          leadingVisual={<ArrowLeft />}
          size="large"
          trailingVisual={<ArrowRight />}
        >
          Large
        </Button>
        <Button
          leadingVisual={<ArrowLeft />}
          size="extraLarge"
          trailingVisual={<ArrowRight />}
        >
          Extra large
        </Button>
      </div>

      {/* Disabled */}
      <div className="flex items-center justify-center gap-8">
        <Button disabled size="extraSmall">
          Extra small
        </Button>
        <Button disabled size="small">
          Small
        </Button>
        <Button disabled size="medium">
          Medium
        </Button>
        <Button disabled size="large">
          Large
        </Button>
        <Button disabled size="extraLarge">
          Extra large
        </Button>
      </div>

      {/* Full width */}
      <div className="flex w-320 items-center justify-center gap-8">
        <Button fullWidth size="large">
          Full width
        </Button>
      </div>
    </div>
  )
}
