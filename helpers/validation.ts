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