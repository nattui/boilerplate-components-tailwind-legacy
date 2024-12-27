import Button from "@/components/button"

export default function Home() {
  return (
    <div className="flex h-[100dvh] items-center justify-center">
      <div className="flex items-center justify-center gap-4">
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>
    </div>
  )
}
