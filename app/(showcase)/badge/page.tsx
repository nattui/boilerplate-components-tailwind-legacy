import Badge from "@/components/ui/badge"
import IconButton from "@/components/ui/icon-button"
import { LucideMail } from "lucide-react"

export default function BadgePage() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-x-16">
        <Badge value="8">
          <IconButton variant="primary">
            <LucideMail size={16} />
          </IconButton>
        </Badge>

        <Badge value="16">
          <IconButton variant="secondary">
            <LucideMail size={16} />
          </IconButton>
        </Badge>

        <Badge value="24+">
          <IconButton variant="ghost">
            <LucideMail size={16} />
          </IconButton>
        </Badge>
      </div>
    </>
  )
}
