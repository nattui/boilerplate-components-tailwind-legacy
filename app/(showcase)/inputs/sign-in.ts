"use server"

export async function signIn(formData: FormData): Promise<void> {
  const email = formData.get("email")
  const password = formData.get("password")

  console.log(email, password)
}
