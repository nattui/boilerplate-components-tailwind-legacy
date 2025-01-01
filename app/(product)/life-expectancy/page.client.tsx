"use client"

import {
  type Birthday,
  getBirthday,
} from "@/app/(product)/life-expectancy/get-birthday"
import Button from "@/components/primitives/button"
import Input from "@/components/primitives/input"
import Label from "@/components/primitives/label"
import Select from "@/components/primitives/select"
import { Calculator } from "@phosphor-icons/react"
import { type FormEvent, useEffect, useState } from "react"

export default function LifeExpectancyClientPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState<Birthday | undefined>()

  useEffect(() => {
    async function fetchUser() {
      const user = await getBirthday()
      setUser(user)
    }
    fetchUser()
  }, [])

  console.log(":::: user:", user)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setIsLoading(true)

    const formData = new FormData(event.target as HTMLFormElement)
    const birthday = formData.get("birthday") as string
    const country = formData.get("country") as string

    console.log(":::: birthday:", birthday)
    console.log(":::: country:", country)
  }

  return (
    <div className="flex flex-col">
      <h1 className="mb-16 text-24 font-600">Life expectancy</h1>
      {/* {errorMessage && <p className="mb-16 text-red-9">{errorMessage}</p>} */}
      <form className="flex w-320 flex-col" onSubmit={handleSubmit}>
        <Label className="mb-4" htmlFor="birthday">
          When is your birthday?
        </Label>
        <Input
          autoComplete="birthday"
          className="mb-16"
          id="birthday"
          name="birthday"
          required
          type="date"
        />
        <Label className="mb-4" htmlFor="country">
          Which country are you in?
        </Label>
        <Select className="mb-16" id="country" name="country" required>
          <option value="">Select your country</option>
          <option value="Australia">Australia</option>
          <option value="Canada">Canada</option>
          <option value="New Zealand">New Zealand</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="United States">United States</option>
        </Select>
        <Button
          fullWidth
          isLoading={isLoading}
          leadingVisual={<Calculator size={16} />}
          size="extraLarge"
          type="submit"
        >
          Calculate
        </Button>
      </form>
    </div>
  )
}
