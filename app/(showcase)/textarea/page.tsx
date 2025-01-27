import Textarea from "@/components/ui/textarea"

export default function TextareaPage() {
  return (
    <div className="flex w-320 flex-col gap-y-16">
      <Textarea rows={1} />
      <Textarea />
      <Textarea rows={10} />
    </div>
  )
}
