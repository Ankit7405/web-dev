import './App.css'
import { useForm } from 'react-hook-form';
// Now we will be seeing the creation and handling of forms using react hook
// Because the normal form creation will take lot of boiler plate code



function App() {

  // This is initilising of form using useForm() hook
  const {register, handleSubmit, watch, formState: {errors, isSubmitting}} = useForm();

  // The function passed there will be passed with a parameter of data and that will contain all the data entered by user 
  async function onSubmit(data){
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Registring the form data", data);
  }

  return (
    <>
    {/* Creation of form */}
    {/* This atributie is used to handle the submit action of the form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label >First Name: </label>
        {/* With this annonation we will be connecting the fileds with our form */}
        {/* We can also add validation to the fields and also error messages */}
        <input className={errors.firstName ? 'input-error' : 'input-correct'} type="text" {...register('firstName', {
          required: true,
          minLength: {value: 3, message: 'Minimum length should be 3'},
          maxLength: {value: 10, message: 'Maximum length should be max 10'}
        })} />
        {/* Now in order to show that error message we need to handle like this */}
        {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
        <br />
        <label >Middle Name: </label>
        <input type="text" {...register('middleName')} />
        <br />
        <label >Last Name: </label>
        <input className={errors.lastName ? 'input-error' : ""} type="text" {...register('lastName',
          {
            pattern: {value: /^[A-Za-z]+$/i,
            message: 'Last name is not a valid expression'}
          })}/>
        {errors.lastName && <p className='error-msg'>{errors.lastName.message}</p>}
        <br />
        {/* We are using isSubmitting flag to see weather our form is in submitting state */}
        <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting" : "Submit"} />
      </form>
    </>
  )
}

export default App
