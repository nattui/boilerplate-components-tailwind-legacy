import Button from "@/components/ui/button"
import { LucideArrowLeft, LucideArrowRight } from "lucide-react"

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
        <Button variant="ghost">Ghost</Button>
      </div>

      {/* Base */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
        <Button size="extraLarge">Extra large</Button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
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

      <div className="flex flex-wrap items-center justify-center gap-8">
        <Button size="small" variant="ghost">
          Small
        </Button>
        <Button size="medium" variant="ghost">
          Medium
        </Button>
        <Button size="large" variant="ghost">
          Large
        </Button>
        <Button size="extraLarge" variant="ghost">
          Extra large
        </Button>
      </div>

      {/* Active */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        <Button aria-pressed size="small">
          Small
        </Button>
        <Button aria-pressed size="medium">
          Medium
        </Button>
        <Button aria-pressed size="large">
          Large
        </Button>
        <Button aria-pressed size="extraLarge">
          Extra large
        </Button>
      </div>

      {/* Leading visual */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        <Button size="small" start={<LucideArrowLeft size={16} />}>
          Small
        </Button>
        <Button size="medium" start={<LucideArrowLeft size={16} />}>
          Medium
        </Button>
        <Button size="large" start={<LucideArrowLeft size={16} />}>
          Large
        </Button>
        <Button size="extraLarge" start={<LucideArrowLeft size={16} />}>
          Extra large
        </Button>
      </div>

      {/* Trailing visual */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        <Button end={<LucideArrowRight size={16} />} size="small">
          Small
        </Button>
        <Button end={<LucideArrowRight size={16} />} size="medium">
          Medium
        </Button>
        <Button end={<LucideArrowRight size={16} />} size="large">
          Large
        </Button>
        <Button end={<LucideArrowRight size={16} />} size="extraLarge">
          Extra large
        </Button>
      </div>

      {/* Leading and trailing visual */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        <Button
          end={<LucideArrowRight size={16} />}
          size="small"
          start={<LucideArrowLeft size={16} />}
        >
          Small
        </Button>
        <Button
          end={<LucideArrowRight size={16} />}
          size="medium"
          start={<LucideArrowLeft size={16} />}
        >
          Medium
        </Button>
        <Button
          end={<LucideArrowRight size={16} />}
          size="large"
          start={<LucideArrowLeft size={16} />}
        >
          Large
        </Button>
        <Button
          end={<LucideArrowRight size={16} />}
          size="extraLarge"
          start={<LucideArrowLeft size={16} />}
        >
          Extra large
        </Button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <Button
          end={<LucideArrowRight size={16} />}
          size="small"
          start={<LucideArrowLeft size={16} />}
          variant="secondary"
        >
          Small
        </Button>
        <Button
          end={<LucideArrowRight size={16} />}
          size="medium"
          start={<LucideArrowLeft size={16} />}
          variant="secondary"
        >
          Medium
        </Button>
        <Button
          end={<LucideArrowRight size={16} />}
          size="large"
          start={<LucideArrowLeft size={16} />}
          variant="secondary"
        >
          Large
        </Button>
        <Button
          end={<LucideArrowRight size={16} />}
          size="extraLarge"
          start={<LucideArrowLeft size={16} />}
          variant="secondary"
        >
          Extra large
        </Button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <Button
          end={<LucideArrowRight size={16} />}
          size="small"
          start={<LucideArrowLeft size={16} />}
          variant="accent"
        >
          Small
        </Button>
        <Button
          end={<LucideArrowRight size={16} />}
          size="medium"
          start={<LucideArrowLeft size={16} />}
          variant="accent"
        >
          Medium
        </Button>
        <Button
          end={<LucideArrowRight size={16} />}
          size="large"
          start={<LucideArrowLeft size={16} />}
          variant="accent"
        >
          Large
        </Button>
        <Button
          end={<LucideArrowRight size={16} />}
          size="extraLarge"
          start={<LucideArrowLeft size={16} />}
          variant="accent"
        >
          Extra large
        </Button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <Button
          end={<LucideArrowRight size={16} />}
          size="small"
          start={<LucideArrowLeft size={16} />}
          variant="ghost"
        >
          Small
        </Button>
        <Button
          end={<LucideArrowRight size={16} />}
          size="medium"
          start={<LucideArrowLeft size={16} />}
          variant="ghost"
        >
          Medium
        </Button>
        <Button
          end={<LucideArrowRight size={16} />}
          size="large"
          start={<LucideArrowLeft size={16} />}
          variant="ghost"
        >
          Large
        </Button>
        <Button
          end={<LucideArrowRight size={16} />}
          size="extraLarge"
          start={<LucideArrowLeft size={16} />}
          variant="ghost"
        >
          Extra large
        </Button>
      </div>

      {/* Disabled */}
      <div className="flex flex-wrap items-center justify-center gap-8">
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

      <div className="flex flex-wrap items-center justify-center gap-8">
        <Button isLoading size="small" variant="accent">
          Small
        </Button>
        <Button isLoading size="medium" variant="accent">
          Medium
        </Button>
        <Button isLoading size="large" variant="accent">
          Large
        </Button>
        <Button isLoading size="extraLarge" variant="accent">
          Extra large
        </Button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <Button isLoading size="small" variant="ghost">
          Small
        </Button>
        <Button isLoading size="medium" variant="ghost">
          Medium
        </Button>
        <Button isLoading size="large" variant="ghost">
          Large
        </Button>
        <Button isLoading size="extraLarge" variant="ghost">
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

      <div className="flex w-full max-w-320 items-center justify-center gap-8">
        <Button fullWidth size="large" variant="ghost">
          Full width
        </Button>
      </div>
    </>
  )
}
