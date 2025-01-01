"use client"

import Button from "@/components/primitives/button"
import Input from "@/components/primitives/input"
import Label from "@/components/primitives/label"
import Select from "@/components/primitives/select"
import { LifeExpectancy } from "@/libs/db/schema"
import { API } from "@/utils/constants"
import { FloppyDisk } from "@phosphor-icons/react"
import { FormEvent, useEffect, useState } from "react"

interface LifeExpectancyProfile {
  birthday: string
  country: string
}

export default function LifeExpectancyClientPage() {
  const [profile, setProfile] = useState<LifeExpectancyProfile | undefined>()
  const [birthdayLoading, setBirthdayLoading] = useState(false)
  const [countryLoading, setCountryLoading] = useState(false)

  useEffect(() => {
    async function fetchProfile() {
      const response = await fetch(API.PROFILE.LIFE_EXPECTANCY)
      const data = await response.json()
      setProfile(data.profile)
    }
    fetchProfile()
  }, [])

  async function onBirthdaySubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const birthday = formData.get("birthday") as string

    setBirthdayLoading(true)

    const response = await fetch(API.PROFILE.BIRTHDAY, {
      body: JSON.stringify({ birthday }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    })
    await response.json()

    setProfile((prev) => ({
      birthday,
      country: prev?.country ?? "",
    }))
  }

  async function onCountrySubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const country = formData.get("country") as string

    setCountryLoading(true)

    const response = await fetch(API.PROFILE.COUNTRY, {
      body: JSON.stringify({ country }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    })
    await response.json()

    setProfile((prev) => ({
      birthday: prev?.birthday ?? "",
      country,
    }))
  }

  return (
    <div className="flex flex-col">
      <h1 className="mb-16 text-24 font-600">Life expectancy</h1>

      {!profile?.birthday && (
        <form className="mb-32 flex w-320 flex-col" onSubmit={onBirthdaySubmit}>
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
            isLoading={birthdayLoading}
            leadingVisual={<FloppyDisk size={16} />}
            size="small"
            type="submit"
          >
            Save
          </Button>
        </form>
      )}

      {!profile?.country && (
        <form className="flex w-320 flex-col" onSubmit={onCountrySubmit}>
          <Label className="mb-4" htmlFor="country">
            Which country are you in?
          </Label>
          <Select className="mb-8" id="country" name="country" required>
            <option value="">Select your country</option>
            <option value="Australia">Australia</option>
            <option value="Canada">Canada</option>
            <option value="New Zealand">New Zealand</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
          </Select>
          <Button
            className="ml-auto"
            isLoading={countryLoading}
            leadingVisual={<FloppyDisk size={16} />}
            size="small"
            type="submit"
          >
            Save
          </Button>
        </form>
      )}

      {profile?.birthday && profile?.country && <Dashboard profile={profile} />}
    </div>
  )
}

function Dashboard({ profile }: { profile: LifeExpectancyProfile }) {
  const [lifeExpectancy, setLifeExpectancy] = useState<
    LifeExpectancy | undefined
  >()

  useEffect(() => {
    async function fetchLifeExpectancy() {
      const response = await fetch(API.DASHBOARD.LIFE_EXPECTANCY, {
        body: JSON.stringify({ country: profile.country }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      })
      const data = await response.json()
      setLifeExpectancy(data.lifeExpectancy)
    }
    fetchLifeExpectancy()
  }, [])

  function calculateAge(birthday: string): number {
    const birthDate = new Date(birthday)
    const today = new Date()

    // Calculate the time difference in milliseconds
    const timeDiff = today.getTime() - birthDate.getTime()

    // Convert milliseconds to years (accounting for leap years)
    const age = timeDiff / (1000 * 60 * 60 * 24 * 365.25)

    return Math.round(age * 100) / 100
  }

  const age = calculateAge(profile.birthday)

  const totalLifeExpectancyYears =
    Math.round(Number.parseFloat(lifeExpectancy?.age ?? "0") * 100) / 100

  const remainingLifeExpectancyYears =
    Math.round((Number.parseFloat(lifeExpectancy?.age ?? "0") - age) * 100) /
    100

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
    </div>
  )
}
