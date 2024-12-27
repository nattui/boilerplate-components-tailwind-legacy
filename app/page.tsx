import Button from "@/components/button"
import { Input } from "@/components/input"
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr"

export default function Home() {
  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center gap-16">
      {/* Example */}
      <div className="flex items-center justify-center gap-8">
        <Button text="Add goal" />
      </div>

      {/* Base */}
      <div className="flex items-center justify-center gap-8">
        <Button size="extraSmall" text="Extra small" />
        <Button size="small" text="Small" />
        <Button size="medium" text="Medium" />
        <Button size="large" text="Large" />
      </div>

      {/* Leading visual */}
      <div className="flex items-center justify-center gap-8">
        <Button
          leadingVisual={<ArrowLeft size={14} />}
          size="extraSmall"
          text="Extra small"
        />
        <Button
          leadingVisual={<ArrowLeft size={16} />}
          size="small"
          text="Small"
        />
        <Button
          leadingVisual={<ArrowLeft size={18} />}
          size="medium"
          text="Medium"
        />
        <Button
          leadingVisual={<ArrowLeft size={20} />}
          size="large"
          text="Large"
        />
      </div>

      {/* Trailing visual */}
      <div className="flex items-center justify-center gap-8">
        <Button
          size="extraSmall"
          text="Extra small"
          trailingVisual={<ArrowRight size={14} />}
        />
        <Button
          size="small"
          text="Small"
          trailingVisual={<ArrowRight size={16} />}
        />
        <Button
          size="medium"
          text="Medium"
          trailingVisual={<ArrowRight size={18} />}
        />
        <Button
          size="large"
          text="Large"
          trailingVisual={<ArrowRight size={20} />}
        />
      </div>

      {/* Leading and trailing visual */}
      <div className="flex items-center justify-center gap-8">
        <Button
          leadingVisual={<ArrowLeft size={14} />}
          size="extraSmall"
          text="Extra small"
          trailingVisual={<ArrowRight size={14} />}
        />
        <Button
          leadingVisual={<ArrowLeft size={16} />}
          size="small"
          text="Small"
          trailingVisual={<ArrowRight size={16} />}
        />
        <Button
          leadingVisual={<ArrowLeft size={18} />}
          size="medium"
          text="Medium"
          trailingVisual={<ArrowRight size={18} />}
        />
        <Button
          leadingVisual={<ArrowLeft size={20} />}
          size="large"
          text="Large"
          trailingVisual={<ArrowRight size={20} />}
        />
      </div>

      {/* Disabled */}
      <div className="flex items-center justify-center gap-8">
        <Button disabled size="extraSmall" text="Extra small" />
        <Button disabled size="small" text="Small" />
        <Button disabled size="medium" text="Medium" />
        <Button disabled size="large" text="Large" />
      </div>

      {/* Full width */}
      <div className="flex w-240 items-center justify-center gap-8">
        <Button fullWidth text="Full width" />
      </div>

      {/* Input */}
      <div className="flex w-240 items-center justify-center gap-8">
        <Input defaultValue="Hello world" fullWidth />
      </div>
    </div>
  )
}
