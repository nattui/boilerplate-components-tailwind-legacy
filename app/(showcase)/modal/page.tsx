"use client"

import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import Label from "@/components/ui/label"

export default function ModalPage() {
  return (
    <div className="border-gray-a4 rounded-8 flex w-full max-w-448 flex-col border border-solid p-16">
      <h2 className="text-20 mb-4">Connect AWS via CloudFormation</h2>
      <p className="text-14 mb-16">
        Connect your AWS account with an IAM Role to let the app securely access
        your resources without sharing your access key. You control the access
        level and can revoke it anytime.
      </p>

      <Label className="mb-4" htmlFor="name">
        Account name
      </Label>
      <Input
        className="mb-16"
        defaultValue="dev-aws-account"
        id="name"
        name="name"
        type="text"
      />

      <Label className="mb-4" htmlFor="role">
        IAM Role setup
      </Label>
      <Input className="mb-32" id="role" name="role" type="text" />

      <div className="flex gap-x-8">
        <Button className="mr-auto" variant="ghost">
          Cancel
        </Button>
        <Button variant="secondary">Back</Button>
        <Button variant="accent">Connect account</Button>
      </div>
    </div>
  )
}
