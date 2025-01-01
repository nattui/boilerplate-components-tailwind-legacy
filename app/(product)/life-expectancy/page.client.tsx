"use client"

import { profileBirthday } from "@/actions/profile-birthday"
import { profileCountry } from "@/actions/profile-country"
import Button from "@/components/primitives/button"
import Input from "@/components/primitives/input"
import Label from "@/components/primitives/label"
import Select from "@/components/primitives/select"
import { LifeExpectancy } from "@/libs/db/schema"
import { FloppyDisk, Trash } from "@phosphor-icons/react"
import { useActionState } from "react"

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
      <h1 className="mb-16 text-24 font-600">Life expectancy</h1>

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
            required
            type="date"
          />
          <Button
            className="ml-auto"
            isLoading={birthdayPending}
            leadingVisual={<FloppyDisk size={16} />}
            size="small"
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
          <Select className="mb-8" id="country" name="country" required>
            <option value="">Select your country</option>
            <option value="United States">United States</option>
          </Select>
          <Button
            className="ml-auto"
            isLoading={countryPending}
            leadingVisual={<FloppyDisk size={16} />}
            size="small"
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
  function onReset() {}

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
    <div className="flex w-384 flex-col gap-16">
      <p>
        You are <span className="font-500 text-mauve-12">{age.toFixed(2)}</span>{" "}
        years old and live in the{" "}
        <span className="font-500 text-mauve-12">{profile.country}</span>, where
        the average life expectancy is{" "}
        <span className="font-500 text-mauve-12">
          {totalLifeExpectancyYears}
        </span>{" "}
        years.
      </p>

      <p>
        Based on this, you have approximately{" "}
        <span className="font-500 text-mauve-12">
          {remainingLifeExpectancyYears}
        </span>{" "}
        years remaining to live.
      </p>

      <p>
        So far, you have experienced{" "}
        <span className="font-500 text-mauve-12">
          {(100 - remainingPercentage).toFixed(2)}%
        </span>{" "}
        of my life, with{" "}
        <span className="font-500 text-mauve-12">
          {remainingPercentage.toFixed(2)}%
        </span>{" "}
        still ahead of me.
      </p>

      <Button
        className="ml-auto"
        leadingVisual={<Trash size={16} />}
        onClick={onReset}
      >
        Reset
      </Button>
    </div>
  )
}
