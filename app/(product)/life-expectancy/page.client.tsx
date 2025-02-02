"use client"

import { profileBirthday } from "@/actions/profile-birthday"
import { profileCountry } from "@/actions/profile-country"
import { profileDelete } from "@/actions/profile-delete"
import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import Label from "@/components/ui/label"
import Select from "@/components/ui/select"
import { LifeExpectancy } from "@/libs/db/schema"
import { FloppyDisk, Trash } from "@phosphor-icons/react"
import { useActionState } from "react"
import { useState } from "react"

interface DashboardProps {
  dashboard?: LifeExpectancy
  profile: LifeExpectancyProfile
}

interface LifeExpectancyProfile {
  birthday: null | string
  country: null | string
}

const initialState = { message: "" }

export default function LifeExpectancyClientPage({
  dashboard,
  profile,
}: {
  dashboard?: LifeExpectancy
  profile?: LifeExpectancyProfile | undefined
}) {
  const [birthday, setBirthday] = useState("")
  const [country, setCountry] = useState("")

  const [, birthdayFormAction, birthdayPending] = useActionState(
    profileBirthday,
    initialState,
  )

  const [, countryFormAction, countryPending] = useActionState(
    profileCountry,
    initialState,
  )

  return (
    <div className="flex flex-col">
      <h1 className="text-24/150 font-500 mb-16">Life expectancy</h1>

      {!profile?.birthday && (
        <form action={birthdayFormAction} className="mb-32 flex w-320 flex-col">
          <Label className="mb-4" htmlFor="birthday">
            When is your birthday?
          </Label>
          <Input
            autoComplete="birthday"
            className="mb-8"
            id="birthday"
            name="birthday"
            onChange={(e) => setBirthday(e.target.value)}
            required
            type="date"
          />
          <Button
            className="ml-auto"
            disabled={!birthday}
            isLoading={birthdayPending}
            size="small"
            start={<FloppyDisk size={16} />}
            type="submit"
          >
            Save
          </Button>
        </form>
      )}

      {!profile?.country && (
        <form action={countryFormAction} className="flex w-320 flex-col">
          <Label className="mb-4" htmlFor="country">
            Which country are you in?
          </Label>
          <Select
            className="mb-8"
            id="country"
            name="country"
            onChange={(e) => setCountry(e.target.value)}
            required
          >
            <option value="">Select your country</option>
            <option value="United States">United States</option>
          </Select>
          <Button
            className="ml-auto"
            disabled={!country}
            isLoading={countryPending}
            size="small"
            start={<FloppyDisk size={16} />}
            type="submit"
          >
            Save
          </Button>
        </form>
      )}

      {profile?.birthday && profile?.country && (
        <Dashboard dashboard={dashboard} profile={profile} />
      )}
    </div>
  )
}

function Dashboard({ dashboard, profile }: DashboardProps) {
  const [, formAction, pending] = useActionState(profileDelete, initialState)

  function calculateAge(birthday: string): number {
    const birthDate = new Date(birthday)
    const today = new Date()

    // Calculate the time difference in milliseconds
    const timeDiff = today.getTime() - birthDate.getTime()

    // Convert milliseconds to years (accounting for leap years)
    const age = timeDiff / (1000 * 60 * 60 * 24 * 365.25)

    return Math.round(age * 100) / 100
  }

  const age = calculateAge(profile.birthday!)

  const totalLifeExpectancyYears =
    Math.round(Number.parseFloat(dashboard?.age ?? "0") * 100) / 100

  const remainingLifeExpectancyYears =
    Math.round((Number.parseFloat(dashboard?.age ?? "0") - age) * 100) / 100

  const remainingPercentage = Number(
    ((remainingLifeExpectancyYears / totalLifeExpectancyYears) * 100).toFixed(
      2,
    ),
  )

  return (
    <div className="flex max-w-384 flex-col gap-16">
      <p>
        You are <span className="font-500 text-gray-12">{age.toFixed(2)}</span>{" "}
        years old and live in the{" "}
        <span className="font-500 text-gray-12">{profile.country}</span>, where
        the average life expectancy is{" "}
        <span className="font-500 text-gray-12">
          {totalLifeExpectancyYears}
        </span>{" "}
        years (The World Bank).
      </p>

      <p>
        Based on this, you have approximately{" "}
        <span className="font-500 text-gray-12">
          {remainingLifeExpectancyYears}
        </span>{" "}
        years remaining to live.
      </p>

      <p>
        So far, you have experienced{" "}
        <span className="font-500 text-gray-12">
          {(100 - remainingPercentage).toFixed(2)}%
        </span>{" "}
        of my life, with{" "}
        <span className="font-500 text-gray-12">
          {remainingPercentage.toFixed(2)}%
        </span>{" "}
        still ahead of me.
      </p>

      <form action={formAction}>
        <Button
          className="ml-auto"
          isLoading={pending}
          start={<Trash size={16} />}
          type="submit"
        >
          Reset
        </Button>
      </form>
    </div>
  )
}
