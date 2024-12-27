import Button from "@/components/button"
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr"

export default function ButtonsPage() {
  return (
    <div className="flex h-[100dvh] flex-col items-center gap-16 overflow-y-auto py-128">
      {/* Example */}
      <div className="flex items-center justify-center gap-8">
        <Button text="Add goal" />
      </div>

      {/* Variant */}
      <div className="flex items-center justify-center gap-8">
        <Button text="Primary" variant="primary" />
        <Button text="Secondary" variant="secondary" />
      </div>

      {/* Base */}
      <div className="flex items-center justify-center gap-8">
        <Button size="extraSmall" text="Extra small" />
        <Button size="small" text="Small" />
        <Button size="medium" text="Medium" />
        <Button size="large" text="Large" />
        <Button size="extraLarge" text="Extra large" />
      </div>

      {/* Leading visual */}
      <div className="flex items-center justify-center gap-8">
        <Button
          leadingVisual={<ArrowLeft />}
          size="extraSmall"
          text="Extra small"
        />
        <Button leadingVisual={<ArrowLeft />} size="small" text="Small" />
        <Button leadingVisual={<ArrowLeft />} size="medium" text="Medium" />
        <Button leadingVisual={<ArrowLeft />} size="large" text="Large" />
        <Button
          leadingVisual={<ArrowLeft />}
          size="extraLarge"
          text="Extra large"
        />
      </div>

      {/* Trailing visual */}
      <div className="flex items-center justify-center gap-8">
        <Button
          size="extraSmall"
          text="Extra small"
          trailingVisual={<ArrowRight />}
        />
        <Button size="small" text="Small" trailingVisual={<ArrowRight />} />
        <Button size="medium" text="Medium" trailingVisual={<ArrowRight />} />
        <Button size="large" text="Large" trailingVisual={<ArrowRight />} />
        <Button
          size="extraLarge"
          text="Extra large"
          trailingVisual={<ArrowRight />}
        />
      </div>

      {/* Leading and trailing visual */}
      <div className="flex items-center justify-center gap-8">
        <Button
          leadingVisual={<ArrowLeft />}
          size="extraSmall"
          text="Extra small"
          trailingVisual={<ArrowRight />}
        />
        <Button
          leadingVisual={<ArrowLeft />}
          size="small"
          text="Small"
          trailingVisual={<ArrowRight />}
        />
        <Button
          leadingVisual={<ArrowLeft />}
          size="medium"
          text="Medium"
          trailingVisual={<ArrowRight />}
        />
        <Button
          leadingVisual={<ArrowLeft />}
          size="large"
          text="Large"
          trailingVisual={<ArrowRight />}
        />
        <Button
          leadingVisual={<ArrowLeft />}
          size="extraLarge"
          text="Extra large"
          trailingVisual={<ArrowRight />}
        />
      </div>

      {/* Disabled */}
      <div className="flex items-center justify-center gap-8">
        <Button disabled size="extraSmall" text="Extra small" />
        <Button disabled size="small" text="Small" />
        <Button disabled size="medium" text="Medium" />
        <Button disabled size="large" text="Large" />
        <Button disabled size="extraLarge" text="Extra large" />
      </div>

      {/* Full width */}
      <div className="flex w-320 items-center justify-center gap-8">
        <Button fullWidth size="large" text="Full width" />
      </div>
    </div>
  )
}
