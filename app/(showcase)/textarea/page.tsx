import Label from "@/components/ui/label"
import Textarea from "@/components/ui/textarea"

export default function TextareaPage() {
  return (
    <div className="flex w-320 flex-col">
      <Label className="mb-4" htmlFor="row-1">
        Row 1
      </Label>
      <Textarea className="mb-16" id="row-1" name="row-1" rows={1} />
      <Label className="mb-4" htmlFor="row-2">
        Row 2
      </Label>
      <Textarea className="mb-16" id="row-2" name="row-2" rows={2} />
      <Label className="mb-4" htmlFor="row-default">
        Row default
      </Label>
      <Textarea className="mb-16" id="row-default" name="row-default" />
      <Label className="mb-4" htmlFor="row-10">
        Row 10 resize none
      </Label>
      <Textarea
        className="mb-16 resize-none"
        id="row-10"
        name="row-10"
        rows={10}
      />
      <Label className="mb-4" htmlFor="disabled">
        Disabled
      </Label>
      <Textarea className="mb-16" disabled id="disabled" name="disabled" />
    </div>
  )
}
