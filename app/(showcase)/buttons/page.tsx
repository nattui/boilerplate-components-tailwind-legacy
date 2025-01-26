import Button from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr"

export default function ButtonsPage() {
  return (
    <>
      {/* Example */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        <Button>Add goal</Button>
      </div>

      {/* Variant */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="accent">Accent</Button>
      </div>

      {/* Base */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        <Button size="extraSmall">Extra small</Button>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
        <Button size="extraLarge">Extra large</Button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <Button size="extraSmall" variant="secondary">
          Extra small
        </Button>
        <Button size="small" variant="secondary">
          Small
        </Button>
        <Button size="medium" variant="secondary">
          Medium
        </Button>
        <Button size="large" variant="secondary">
          Large
        </Button>
        <Button size="extraLarge" variant="secondary">
          Extra large
        </Button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <Button size="extraSmall" variant="accent">
          Extra small
        </Button>
        <Button size="small" variant="accent">
          Small
        </Button>
        <Button size="medium" variant="accent">
          Medium
        </Button>
        <Button size="large" variant="accent">
          Large
        </Button>
        <Button size="extraLarge" variant="accent">
          Extra large
        </Button>
      </div>

      {/* Leading visual */}
      <div className="flex flex-wrap items-center justify-center gap-8">
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
      <div className="flex flex-wrap items-center justify-center gap-8">
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
      <div className="flex flex-wrap items-center justify-center gap-8">
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

      <div className="flex flex-wrap items-center justify-center gap-8">
        <Button
          leadingVisual={<ArrowLeft />}
          size="extraSmall"
          trailingVisual={<ArrowRight />}
          variant="secondary"
        >
          Extra small
        </Button>
        <Button
          leadingVisual={<ArrowLeft />}
          size="small"
          trailingVisual={<ArrowRight />}
          variant="secondary"
        >
          Small
        </Button>
        <Button
          leadingVisual={<ArrowLeft />}
          size="medium"
          trailingVisual={<ArrowRight />}
          variant="secondary"
        >
          Medium
        </Button>
        <Button
          leadingVisual={<ArrowLeft />}
          size="large"
          trailingVisual={<ArrowRight />}
          variant="secondary"
        >
          Large
        </Button>
        <Button
          leadingVisual={<ArrowLeft />}
          size="extraLarge"
          trailingVisual={<ArrowRight />}
          variant="secondary"
        >
          Extra large
        </Button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <Button
          leadingVisual={<ArrowLeft />}
          size="extraSmall"
          trailingVisual={<ArrowRight />}
          variant="accent"
        >
          Extra small
        </Button>
        <Button
          leadingVisual={<ArrowLeft />}
          size="small"
          trailingVisual={<ArrowRight />}
          variant="accent"
        >
          Small
        </Button>
        <Button
          leadingVisual={<ArrowLeft />}
          size="medium"
          trailingVisual={<ArrowRight />}
          variant="accent"
        >
          Medium
        </Button>
        <Button
          leadingVisual={<ArrowLeft />}
          size="large"
          trailingVisual={<ArrowRight />}
          variant="accent"
        >
          Large
        </Button>
        <Button
          leadingVisual={<ArrowLeft />}
          size="extraLarge"
          trailingVisual={<ArrowRight />}
          variant="accent"
        >
          Extra large
        </Button>
      </div>

      {/* Disabled */}
      <div className="flex flex-wrap items-center justify-center gap-8">
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

      <div className="flex flex-wrap items-center justify-center gap-8">
        <Button disabled size="extraSmall" variant="secondary">
          Extra small
        </Button>
        <Button disabled size="small" variant="secondary">
          Small
        </Button>
        <Button disabled size="medium" variant="secondary">
          Medium
        </Button>
        <Button disabled size="large" variant="secondary">
          Large
        </Button>
        <Button disabled size="extraLarge" variant="secondary">
          Extra large
        </Button>
      </div>

      {/* Loading */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        <Button isLoading size="extraSmall">
          Extra small
        </Button>
        <Button isLoading size="small">
          Small
        </Button>
        <Button isLoading size="medium">
          Medium
        </Button>
        <Button isLoading size="large">
          Large
        </Button>
        <Button isLoading size="extraLarge">
          Extra large
        </Button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <Button isLoading size="extraSmall" variant="secondary">
          Extra small
        </Button>
        <Button isLoading size="small" variant="secondary">
          Small
        </Button>
        <Button isLoading size="medium" variant="secondary">
          Medium
        </Button>
        <Button isLoading size="large" variant="secondary">
          Large
        </Button>
        <Button isLoading size="extraLarge" variant="secondary">
          Extra large
        </Button>
      </div>

      {/* Full width */}
      <div className="flex w-full max-w-320 items-center justify-center gap-8">
        <Button fullWidth size="large">
          Full width
        </Button>
      </div>

      <div className="flex w-full max-w-320 items-center justify-center gap-8">
        <Button fullWidth size="large" variant="secondary">
          Full width
        </Button>
      </div>

      <div className="flex w-full max-w-320 items-center justify-center gap-8">
        <Button fullWidth size="large" variant="accent">
          Full width
        </Button>
      </div>
    </>
  )
}
