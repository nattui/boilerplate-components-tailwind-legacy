import Button from "@/components/ui/button"
import IconButton from "@/components/ui/icon-button"
import Input from "@/components/ui/input"
import Label from "@/components/ui/label"
import { LucideCloud, LucidePlus, LucideX } from "lucide-react"

export default function ModalPage() {
  return (
    <div className="border-gray-5 rounded-12 shadow-5 relative flex w-full max-w-[40rem] flex-col border border-solid p-16">
      <IconButton className="absolute top-12 right-12" variant="ghost">
        <LucideX />
      </IconButton>

      <h2 className="text-20 mr-40 mb-4">Connect AWS via CloudFormation</h2>
      <p className="text-14 mb-24">
        Connect your AWS account with an IAM Role to let the app securely access
        your resources without sharing your access key. You control the access
        level and can revoke it anytime.
      </p>

      <Input
        className={{ root: "mb-16" }}
        defaultValue="dev-aws-account"
        id="name"
        text={{ label: "Account name" }}
        type="text"
      />

      <Label className="mb-4" htmlFor="role">
        IAM Role setup
      </Label>
      <div className="rounded-8 border-gray-5 shadow-1 mb-32 flex flex-col border border-solid p-16">
        <h3 className="text-14 mb-4">
          Connect your account via CloudFormation
        </h3>
        <p className="text-14 mb-16">
          You’ll be prompted to create a role with read only in-line policies
          using CloudFormation. Boilerplate will automatically detect the role
          presence and begin syncing your account data.
        </p>
        <Button start={<LucideCloud size={16} />} variant="accent">
          Launch stack
        </Button>
      </div>

      <div className="flex gap-x-8">
        <Button className="mr-auto" variant="ghost">
          Cancel
        </Button>
        <Button variant="secondary">Back</Button>
        <Button start={<LucidePlus size={16} />} variant="primary">
          Connect account
        </Button>
      </div>
    </div>
  )
}
