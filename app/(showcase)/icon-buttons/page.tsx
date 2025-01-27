import IconButton from "@/components/ui/icon-button"
import { DownloadSimple } from "@phosphor-icons/react/dist/ssr"

export default function IconButtonsPage() {
  return (
    <>
      {/* Example */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        <IconButton>
          <DownloadSimple size={16} />
        </IconButton>
      </div>

      {/* Variant */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        <IconButton variant="primary">
          <DownloadSimple size={16} />
        </IconButton>
        <IconButton variant="secondary">
          <DownloadSimple size={16} />
        </IconButton>
        <IconButton variant="accent">
          <DownloadSimple size={16} />
        </IconButton>
        <IconButton variant="ghost">
          <DownloadSimple size={16} />
        </IconButton>
      </div>

      {/* Base */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        <IconButton size="small">
          <DownloadSimple size={16} />
        </IconButton>
        <IconButton size="medium">
          <DownloadSimple size={16} />
        </IconButton>
        <IconButton size="large">
          <DownloadSimple size={16} />
        </IconButton>
        <IconButton size="extraLarge">
          <DownloadSimple size={16} />
        </IconButton>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <IconButton size="small" variant="secondary">
          <DownloadSimple size={16} />
        </IconButton>
        <IconButton size="medium" variant="secondary">
          <DownloadSimple size={16} />
        </IconButton>
        <IconButton size="large" variant="secondary">
          <DownloadSimple size={16} />
        </IconButton>
        <IconButton size="extraLarge" variant="secondary">
          <DownloadSimple size={16} />
        </IconButton>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <IconButton size="small" variant="accent">
          <DownloadSimple size={16} />
        </IconButton>
        <IconButton size="medium" variant="accent">
          <DownloadSimple size={16} />
        </IconButton>
        <IconButton size="large" variant="accent">
          <DownloadSimple size={16} />
        </IconButton>
        <IconButton size="extraLarge" variant="accent">
          <DownloadSimple size={16} />
        </IconButton>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <IconButton size="small" variant="ghost">
          <DownloadSimple size={16} />
        </IconButton>
        <IconButton size="medium" variant="ghost">
          <DownloadSimple size={16} />
        </IconButton>
        <IconButton size="large" variant="ghost">
          <DownloadSimple size={16} />
        </IconButton>
        <IconButton size="extraLarge" variant="ghost">
          <DownloadSimple size={16} />
        </IconButton>
      </div>

      {/* Disabled */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        <IconButton disabled size="small">
          <DownloadSimple size={16} />
        </IconButton>
        <IconButton disabled size="medium">
          <DownloadSimple size={16} />
        </IconButton>
        <IconButton disabled size="large">
          <DownloadSimple size={16} />
        </IconButton>
        <IconButton disabled size="extraLarge">
          <DownloadSimple size={16} />
        </IconButton>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <IconButton disabled size="small" variant="secondary">
          <DownloadSimple size={16} />
        </IconButton>
        <IconButton disabled size="medium" variant="secondary">
          <DownloadSimple size={16} />
        </IconButton>
        <IconButton disabled size="large" variant="secondary">
          <DownloadSimple size={16} />
        </IconButton>
        <IconButton disabled size="extraLarge" variant="secondary">
          <DownloadSimple size={16} />
        </IconButton>
      </div>

      {/* Loading */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        <IconButton isLoading size="small">
          <DownloadSimple size={16} />
        </IconButton>
        <IconButton isLoading size="medium">
          <DownloadSimple size={16} />
        </IconButton>
        <IconButton isLoading size="large">
          <DownloadSimple size={16} />
        </IconButton>
        <IconButton isLoading size="extraLarge">
          <DownloadSimple size={16} />
        </IconButton>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <IconButton isLoading size="small" variant="secondary">
          <DownloadSimple size={16} />
        </IconButton>
        <IconButton isLoading size="medium" variant="secondary">
          <DownloadSimple size={16} />
        </IconButton>
        <IconButton isLoading size="large" variant="secondary">
          <DownloadSimple size={16} />
        </IconButton>
        <IconButton isLoading size="extraLarge" variant="secondary">
          <DownloadSimple size={16} />
        </IconButton>
      </div>
    </>
  )
}
