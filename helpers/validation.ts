import * as Yup from 'yup'

export const LoginSchemaValidation = Yup.object({
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required.'),
    password: Yup.string()
      .min(8, 'At least 8 chracters!')
      .max(20, 'Too Long!')
      .required('Password is required.')
  })

  export const SignUpSchemaValidation = Yup.object({
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required.'),
    password: Yup.string()
      .min(8, 'At least 8 chracters!')
      .max(20, 'Too Long!')
      .required('Password is required.'),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref('password'), undefined],
      'Passwords does not match'
    ).required('Please confirm your password'),
  })

export const RentalSchemaValidation = Yup.object({
    title: Yup.string().required('Title is required.'),
    thumbnail: Yup.string().required('Thumbnail is required.'),
    typeId: Yup.string().required('Type is required.'),
    price: Yup.number().required('Price is required.').positive('Price must be positive'),
    area: Yup.number().required('Area is required.').positive('Area must be positive'),
    bedroom: Yup.number().required('Bedroom is required.').positive('Bed must be positive'),
    location: Yup.string().required('Location is required.'),
    description: Yup.string().required('Description is required.'),
})