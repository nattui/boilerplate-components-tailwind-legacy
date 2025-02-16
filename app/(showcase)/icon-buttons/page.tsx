import IconButton from "@/components/ui/icon-button"
import { LucideDownload } from "lucide-react"

export default function IconButtonsPage() {
  return (
    <>
      {/* Example */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        <IconButton>
          <LucideDownload size={16} />
        </IconButton>
      </div>

      {/* Variant */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        <IconButton variant="primary">
          <LucideDownload size={16} />
        </IconButton>
        <IconButton variant="secondary">
          <LucideDownload size={16} />
        </IconButton>
        <IconButton variant="accent">
          <LucideDownload size={16} />
        </IconButton>
        <IconButton variant="ghost">
          <LucideDownload size={16} />
        </IconButton>
      </div>

      {/* Base */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        <IconButton size="small">
          <LucideDownload size={16} />
        </IconButton>
        <IconButton size="medium">
          <LucideDownload size={16} />
        </IconButton>
        <IconButton size="large">
          <LucideDownload size={16} />
        </IconButton>
        <IconButton size="extraLarge">
          <LucideDownload size={16} />
        </IconButton>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <IconButton size="small" variant="secondary">
          <LucideDownload size={16} />
        </IconButton>
        <IconButton size="medium" variant="secondary">
          <LucideDownload size={16} />
        </IconButton>
        <IconButton size="large" variant="secondary">
          <LucideDownload size={16} />
        </IconButton>
        <IconButton size="extraLarge" variant="secondary">
          <LucideDownload size={16} />
        </IconButton>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <IconButton size="small" variant="accent">
          <LucideDownload size={16} />
        </IconButton>
        <IconButton size="medium" variant="accent">
          <LucideDownload size={16} />
        </IconButton>
        <IconButton size="large" variant="accent">
          <LucideDownload size={16} />
        </IconButton>
        <IconButton size="extraLarge" variant="accent">
          <LucideDownload size={16} />
        </IconButton>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <IconButton size="small" variant="ghost">
          <LucideDownload size={16} />
        </IconButton>
        <IconButton size="medium" variant="ghost">
          <LucideDownload size={16} />
        </IconButton>
        <IconButton size="large" variant="ghost">
          <LucideDownload size={16} />
        </IconButton>
        <IconButton size="extraLarge" variant="ghost">
          <LucideDownload size={16} />
        </IconButton>
      </div>

      {/* Disabled */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        <IconButton disabled size="small">
          <LucideDownload size={16} />
        </IconButton>
        <IconButton disabled size="medium">
          <LucideDownload size={16} />
        </IconButton>
        <IconButton disabled size="large">
          <LucideDownload size={16} />
        </IconButton>
        <IconButton disabled size="extraLarge">
          <LucideDownload size={16} />
        </IconButton>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <IconButton disabled size="small" variant="secondary">
          <LucideDownload size={16} />
        </IconButton>
        <IconButton disabled size="medium" variant="secondary">
          <LucideDownload size={16} />
        </IconButton>
        <IconButton disabled size="large" variant="secondary">
          <LucideDownload size={16} />
        </IconButton>
        <IconButton disabled size="extraLarge" variant="secondary">
          <LucideDownload size={16} />
        </IconButton>
      </div>

      {/* Loading */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        <IconButton isLoading size="small">
          <LucideDownload size={16} />
        </IconButton>
        <IconButton isLoading size="medium">
          <LucideDownload size={16} />
        </IconButton>
        <IconButton isLoading size="large">
          <LucideDownload size={16} />
        </IconButton>
        <IconButton isLoading size="extraLarge">
          <LucideDownload size={16} />
        </IconButton>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <IconButton isLoading size="small" variant="secondary">
          <LucideDownload size={16} />
        </IconButton>
        <IconButton isLoading size="medium" variant="secondary">
          <LucideDownload size={16} />
        </IconButton>
        <IconButton isLoading size="large" variant="secondary">
          <LucideDownload size={16} />
        </IconButton>
        <IconButton isLoading size="extraLarge" variant="secondary">
          <LucideDownload size={16} />
        </IconButton>
      </div>
    </>
  )
}
