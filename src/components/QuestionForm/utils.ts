const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

export const validateEmail = (email?: string) => {
  if (!email || email.length === 0) {
    return 'This field is required'
  }
  if (!emailRegExp.test(email)) {
    return 'Incorrect email format'
  }
  return undefined
}