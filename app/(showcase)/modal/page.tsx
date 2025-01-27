import Button from "@/components/ui/button"
import IconButton from "@/components/ui/icon-button"
import Input from "@/components/ui/input"
import Label from "@/components/ui/label"
import { Cloud, Plus, X } from "@phosphor-icons/react/dist/ssr"

export default function ModalPage() {
  return (
    <div className="border-gray-a4 rounded-12 shadow-5 relative flex w-full max-w-384 flex-col border border-solid p-16">
      <IconButton
        className="absolute top-12 right-12"
        size="small"
        variant="ghost"
      >
        <X />
      </IconButton>

      <h2 className="text-20 mr-32 mb-4">Connect AWS via CloudFormation</h2>
      <p className="text-14 mb-24">
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
      <div className="rounded-8 border-gray-a4 shadow-1 mb-32 flex flex-col border border-solid p-16">
        <h3 className="text-14 mb-4">
          Connect your account via CloudFormation
        </h3>
        <p className="text-14 mb-16">
          You’ll be prompted to create a role with read only in-line policies
          using CloudFormation. Boilerplate will automatically detect the role
          presence and begin syncing your account data.
        </p>
        <Button leadingVisual={<Cloud size={16} />} variant="accent">
          Launch stack
        </Button>
      </div>

      <div className="flex gap-x-8">
        <Button className="mr-auto" variant="ghost">
          Cancel
        </Button>
        <Button variant="secondary">Back</Button>
        <Button leadingVisual={<Plus size={16} />} variant="primary">
          Connect account
        </Button>
      </div>
    </div>
  )
}
