import Button from "@/components/button"
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr"

export default function Home() {
  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center gap-16">
      {/* Base */}
      <div className="flex items-center justify-center gap-8">
        <Button size="small" text="Small" />
        <Button size="medium" text="Medium" />
        <Button size="large" text="Large" />
      </div>

      {/* Leading visual */}
      <div className="flex items-center justify-center gap-8">
        <Button
          leadingVisual={<ArrowLeft size={14} />}
          size="small"
          text="Small"
        />
        <Button
          leadingVisual={<ArrowLeft size={16} />}
          size="medium"
          text="Medium"
        />
        <Button
          leadingVisual={<ArrowLeft size={18} />}
          size="large"
          text="Large"
        />
      </div>

      {/* Trailing visual */}
      <div className="flex items-center justify-center gap-8">
        <Button
          size="small"
          text="Small"
          trailingVisual={<ArrowRight size={14} />}
        />
        <Button
          size="medium"
          text="Medium"
          trailingVisual={<ArrowRight size={16} />}
        />
        <Button
          size="large"
          text="Large"
          trailingVisual={<ArrowRight size={18} />}
        />
      </div>

      {/* Leading and trailing visual */}
      <div className="flex items-center justify-center gap-8">
        <Button
          leadingVisual={<ArrowLeft size={14} />}
          size="small"
          text="Small"
          trailingVisual={<ArrowRight size={14} />}
        />
        <Button
          leadingVisual={<ArrowLeft size={14} />}
          size="medium"
          text="Medium"
          trailingVisual={<ArrowRight size={16} />}
        />
        <Button
          leadingVisual={<ArrowLeft size={14} />}
          size="large"
          text="Large"
          trailingVisual={<ArrowRight size={18} />}
        />
      </div>

      {/* Disabled */}
      <div className="flex items-center justify-center gap-8">
        <Button disabled size="small" text="Small" />
        <Button disabled size="medium" text="Medium" />
        <Button disabled size="large" text="Large" />
      </div>
    </div>
  )
}
