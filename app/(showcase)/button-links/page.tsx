import { LucideArrowLeft, LucideArrowRight } from "lucide-react"
import ButtonLink from "@/components/ui/button-link"
import { ROUTE } from "@/utils/constants"

export default function ButtonLinksPage() {
  return (
    <>
      {/* Example */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        <ButtonLink href={ROUTE.HOME}>Add goal</ButtonLink>
      </div>

      {/* Variant */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        <ButtonLink href={ROUTE.HOME}>Primary</ButtonLink>
        <ButtonLink href={ROUTE.HOME}>Secondary</ButtonLink>
        <ButtonLink href={ROUTE.HOME}>Accent</ButtonLink>
        <ButtonLink href={ROUTE.HOME}>Ghost</ButtonLink>
      </div>

      {/* Base */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        <ButtonLink href={ROUTE.HOME} size="small">
          Small
        </ButtonLink>
        <ButtonLink href={ROUTE.HOME} size="medium">
          Medium
        </ButtonLink>
        <ButtonLink href={ROUTE.HOME} size="large">
          Large
        </ButtonLink>
        <ButtonLink href={ROUTE.HOME} size="extraLarge">
          Extra large
        </ButtonLink>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <ButtonLink href={ROUTE.HOME} size="small" variant="secondary">
          Small
        </ButtonLink>
        <ButtonLink href={ROUTE.HOME} size="medium" variant="secondary">
          Medium
        </ButtonLink>
        <ButtonLink href={ROUTE.HOME} size="large" variant="secondary">
          Large
        </ButtonLink>
        <ButtonLink href={ROUTE.HOME} size="extraLarge" variant="secondary">
          Extra large
        </ButtonLink>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <ButtonLink href={ROUTE.HOME} size="small" variant="accent">
          Small
        </ButtonLink>
        <ButtonLink href={ROUTE.HOME} size="medium" variant="accent">
          Medium
        </ButtonLink>
        <ButtonLink href={ROUTE.HOME} size="large" variant="accent">
          Large
        </ButtonLink>
        <ButtonLink href={ROUTE.HOME} size="extraLarge" variant="accent">
          Extra large
        </ButtonLink>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <ButtonLink href={ROUTE.HOME} size="small" variant="ghost">
          Small
        </ButtonLink>
        <ButtonLink href={ROUTE.HOME} size="medium" variant="ghost">
          Medium
        </ButtonLink>
        <ButtonLink href={ROUTE.HOME} size="large" variant="ghost">
          Large
        </ButtonLink>
        <ButtonLink href={ROUTE.HOME} size="extraLarge" variant="ghost">
          Extra large
        </ButtonLink>
      </div>

      {/* Leading visual */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        <ButtonLink
          href={ROUTE.HOME}
          size="small"
          start={<LucideArrowLeft size={16} />}
        >
          Small
        </ButtonLink>
        <ButtonLink
          href={ROUTE.HOME}
          size="medium"
          start={<LucideArrowLeft size={16} />}
        >
          Medium
        </ButtonLink>
        <ButtonLink
          href={ROUTE.HOME}
          size="large"
          start={<LucideArrowLeft size={16} />}
        >
          Large
        </ButtonLink>
        <ButtonLink
          href={ROUTE.HOME}
          size="extraLarge"
          start={<LucideArrowLeft size={16} />}
        >
          Extra large
        </ButtonLink>
      </div>

      {/* Trailing visual */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        <ButtonLink
          end={<LucideArrowRight size={16} />}
          href={ROUTE.HOME}
          size="small"
        >
          Small
        </ButtonLink>
        <ButtonLink
          end={<LucideArrowRight size={16} />}
          href={ROUTE.HOME}
          size="medium"
        >
          Medium
        </ButtonLink>
        <ButtonLink
          end={<LucideArrowRight size={16} />}
          href={ROUTE.HOME}
          size="large"
        >
          Large
        </ButtonLink>
        <ButtonLink
          end={<LucideArrowRight size={16} />}
          href={ROUTE.HOME}
          size="extraLarge"
        >
          Extra large
        </ButtonLink>
      </div>

      {/* Leading and trailing visual */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        <ButtonLink
          end={<LucideArrowRight size={16} />}
          href={ROUTE.HOME}
          size="small"
          start={<LucideArrowLeft size={16} />}
        >
          Small
        </ButtonLink>
        <ButtonLink
          end={<LucideArrowRight size={16} />}
          href={ROUTE.HOME}
          size="medium"
          start={<LucideArrowLeft size={16} />}
        >
          Medium
        </ButtonLink>
        <ButtonLink
          end={<LucideArrowRight size={16} />}
          href={ROUTE.HOME}
          size="large"
          start={<LucideArrowLeft size={16} />}
        >
          Large
        </ButtonLink>
        <ButtonLink
          end={<LucideArrowRight size={16} />}
          href={ROUTE.HOME}
          size="extraLarge"
          start={<LucideArrowLeft size={16} />}
        >
          Extra large
        </ButtonLink>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <ButtonLink
          end={<LucideArrowRight size={16} />}
          href={ROUTE.HOME}
          size="small"
          start={<LucideArrowLeft size={16} />}
          variant="secondary"
        >
          Small
        </ButtonLink>
        <ButtonLink
          end={<LucideArrowRight size={16} />}
          href={ROUTE.HOME}
          size="medium"
          start={<LucideArrowLeft size={16} />}
          variant="secondary"
        >
          Medium
        </ButtonLink>
        <ButtonLink
          end={<LucideArrowRight size={16} />}
          href={ROUTE.HOME}
          size="large"
          start={<LucideArrowLeft size={16} />}
          variant="secondary"
        >
          Large
        </ButtonLink>
        <ButtonLink
          end={<LucideArrowRight size={16} />}
          href={ROUTE.HOME}
          size="extraLarge"
          start={<LucideArrowLeft size={16} />}
          variant="secondary"
        >
          Extra large
        </ButtonLink>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <ButtonLink
          end={<LucideArrowRight size={16} />}
          href={ROUTE.HOME}
          size="small"
          start={<LucideArrowLeft size={16} />}
          variant="accent"
        >
          Small
        </ButtonLink>
        <ButtonLink
          end={<LucideArrowRight size={16} />}
          href={ROUTE.HOME}
          size="medium"
          start={<LucideArrowLeft size={16} />}
          variant="accent"
        >
          Medium
        </ButtonLink>
        <ButtonLink
          end={<LucideArrowRight size={16} />}
          href={ROUTE.HOME}
          size="large"
          start={<LucideArrowLeft size={16} />}
          variant="accent"
        >
          Large
        </ButtonLink>
        <ButtonLink
          end={<LucideArrowRight size={16} />}
          href={ROUTE.HOME}
          size="extraLarge"
          start={<LucideArrowLeft size={16} />}
          variant="accent"
        >
          Extra large
        </ButtonLink>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <ButtonLink
          end={<LucideArrowRight size={16} />}
          href={ROUTE.HOME}
          size="small"
          start={<LucideArrowLeft size={16} />}
          variant="ghost"
        >
          Small
        </ButtonLink>
        <ButtonLink
          end={<LucideArrowRight size={16} />}
          href={ROUTE.HOME}
          size="medium"
          start={<LucideArrowLeft size={16} />}
          variant="ghost"
        >
          Medium
        </ButtonLink>
        <ButtonLink
          end={<LucideArrowRight size={16} />}
          href={ROUTE.HOME}
          size="large"
          start={<LucideArrowLeft size={16} />}
          variant="ghost"
        >
          Large
        </ButtonLink>
        <ButtonLink
          end={<LucideArrowRight size={16} />}
          href={ROUTE.HOME}
          size="extraLarge"
          start={<LucideArrowLeft size={16} />}
          variant="ghost"
        >
          Extra large
        </ButtonLink>
      </div>

      {/* Full width */}
      <div className="flex w-full max-w-320 items-center justify-center gap-8">
        <ButtonLink fullWidth href={ROUTE.HOME} size="large">
          Full width
        </ButtonLink>
      </div>

      <div className="flex w-full max-w-320 items-center justify-center gap-8">
        <ButtonLink
          fullWidth
          href={ROUTE.HOME}
          size="large"
          variant="secondary"
        >
          Full width
        </ButtonLink>
      </div>

      <div className="flex w-full max-w-320 items-center justify-center gap-8">
        <ButtonLink fullWidth href={ROUTE.HOME} size="large" variant="accent">
          Full width
        </ButtonLink>
      </div>

      <div className="flex w-full max-w-320 items-center justify-center gap-8">
        <ButtonLink fullWidth href={ROUTE.HOME} size="large" variant="ghost">
          Full width
        </ButtonLink>
      </div>
    </>
  )
}
