import React, { useState } from 'react'

const Form = () => {
  const [fName, setFname] = useState("")
  const [lName, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [note, setNote] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    alert(`submitting Name ${fName} ${lName} with email ${email} and an additional comment of "${note}"`)
    //values need to be routed to the appropriate results
  }

  return(
    <>
      <form method="POST" action="https://formspree.io/marvin.r02@gmail.com">
        <input 
        type="text" 
        name="fName" 
        placeholder="First name" 
        value={fName}
        onChange={e => setFname(e.target.value)}/>

        <input 
        type="text" 
        name="lName" 
        placeholder="Last Name" 
        value={lName}
        onChange={e => setLname(e.target.value)}/>

        <input 
        type="text" 
        name="email" 
        placeholder="E-mail" 
        value={email}
        onChange={e => setEmail(e.target.value)}/>

        <input 
        type="text" 
        name="note" 
        placeholder="additional comments" 
        value={note}
        onChange={e => setNote(e.target.value)}/>

        <button>Submit</button>
      </form>
    </>
  )
}

export default Form