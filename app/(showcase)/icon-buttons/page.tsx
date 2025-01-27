import IconButton from "@/components/ui/icon-button"
import { DownloadSimple } from "@phosphor-icons/react/dist/ssr"

export default function IconButtonsPage() {
  return (
    <>
      {/* Example */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        <IconButton>
          <DownloadSimple />
        </IconButton>
      </div>

      {/* Variant */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        <IconButton variant="primary">
          <DownloadSimple />
        </IconButton>
        <IconButton variant="secondary">
          <DownloadSimple />
        </IconButton>
        <IconButton variant="accent">
          <DownloadSimple />
        </IconButton>
        <IconButton variant="ghost">
          <DownloadSimple />
        </IconButton>
      </div>

      {/* Base */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        <IconButton size="extraSmall">
          <DownloadSimple />
        </IconButton>
        <IconButton size="small">
          <DownloadSimple />
        </IconButton>
        <IconButton size="medium">
          <DownloadSimple />
        </IconButton>
        <IconButton size="large">
          <DownloadSimple />
        </IconButton>
        <IconButton size="extraLarge">
          <DownloadSimple />
        </IconButton>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <IconButton size="extraSmall" variant="secondary">
          <DownloadSimple />
        </IconButton>
        <IconButton size="small" variant="secondary">
          <DownloadSimple />
        </IconButton>
        <IconButton size="medium" variant="secondary">
          <DownloadSimple />
        </IconButton>
        <IconButton size="large" variant="secondary">
          <DownloadSimple />
        </IconButton>
        <IconButton size="extraLarge" variant="secondary">
          <DownloadSimple />
        </IconButton>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <IconButton size="extraSmall" variant="accent">
          <DownloadSimple />
        </IconButton>
        <IconButton size="small" variant="accent">
          <DownloadSimple />
        </IconButton>
        <IconButton size="medium" variant="accent">
          <DownloadSimple />
        </IconButton>
        <IconButton size="large" variant="accent">
          <DownloadSimple />
        </IconButton>
        <IconButton size="extraLarge" variant="accent">
          <DownloadSimple />
        </IconButton>
      </div>

      {/* Disabled */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        <IconButton disabled size="extraSmall">
          <DownloadSimple />
        </IconButton>
        <IconButton disabled size="small">
          <DownloadSimple />
        </IconButton>
        <IconButton disabled size="medium">
          <DownloadSimple />
        </IconButton>
        <IconButton disabled size="large">
          <DownloadSimple />
        </IconButton>
        <IconButton disabled size="extraLarge">
          <DownloadSimple />
        </IconButton>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <IconButton disabled size="extraSmall" variant="secondary">
          <DownloadSimple />
        </IconButton>
        <IconButton disabled size="small" variant="secondary">
          <DownloadSimple />
        </IconButton>
        <IconButton disabled size="medium" variant="secondary">
          <DownloadSimple />
        </IconButton>
        <IconButton disabled size="large" variant="secondary">
          <DownloadSimple />
        </IconButton>
        <IconButton disabled size="extraLarge" variant="secondary">
          <DownloadSimple />
        </IconButton>
      </div>

      {/* Loading */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        <IconButton isLoading size="extraSmall">
          <DownloadSimple />
        </IconButton>
        <IconButton isLoading size="small">
          <DownloadSimple />
        </IconButton>
        <IconButton isLoading size="medium">
          <DownloadSimple />
        </IconButton>
        <IconButton isLoading size="large">
          <DownloadSimple />
        </IconButton>
        <IconButton isLoading size="extraLarge">
          <DownloadSimple />
        </IconButton>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <IconButton isLoading size="extraSmall" variant="secondary">
          <DownloadSimple />
        </IconButton>
        <IconButton isLoading size="small" variant="secondary">
          <DownloadSimple />
        </IconButton>
        <IconButton isLoading size="medium" variant="secondary">
          <DownloadSimple />
        </IconButton>
        <IconButton isLoading size="large" variant="secondary">
          <DownloadSimple />
        </IconButton>
        <IconButton isLoading size="extraLarge" variant="secondary">
          <DownloadSimple />
        </IconButton>
      </div>
    </>
  )
}
