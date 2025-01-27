"use client"

import Button from "@/components/ui/button"
import Input from "@/components/ui/input"

export default function CopyPage() {
  return (
    <div>
      <h1 className="text-16 mb-12">Team members</h1>
      <p className="text-14 mb-12">
        Share this link with your team to give them access to your organization.
      </p>
      <div className="flex w-full max-w-384 gap-x-12">
        <Input
          className="mb-16"
          defaultValue="https://example.com/teams/invite/eHGJEj12FHDKSi"
          id="text"
          name="text"
          required
          type="text"
        />
        <Button size="large" type="submit" variant="secondary">
          Copy Link
        </Button>
      </div>
    </div>
  )
}
