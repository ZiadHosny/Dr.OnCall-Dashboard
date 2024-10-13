export const areAllFieldsTouched = (touched, initialValues) => {
  return Object.keys(initialValues).every((field) => touched[field])
}

export const isAnyFieldTouchedOrChanged = (touched, values, initialValues) => {
  return Object.keys(initialValues).some((field) => {
    return touched[field] || values[field] !== initialValues[field]
  })
}

export const areAllFieldsTouchedOrChanged = (touched, values, initialValues) => {
  // Check if every field has been either touched or changed
  return Object.keys(initialValues).every((field) => {
    return touched[field] || values[field] !== initialValues[field]
  })
}
