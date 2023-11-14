function Form(){
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.Email.value);
        console.log(e.target.feedback.value);
    }
    return (
      <>
        <h1>Basic Form</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <label>
            Name: 
            <input type="text" id="name" placeholder="Enter your name" />
          </label>
          
          <label>
            Email:
            <input type="email" id="Email" placeholder="Enter your email" />
          </label>

          <hr />
          <label>
            Message:
            <textarea
              id="feedback"
              placeholder="Enter your feedback"
              rows={5}
              cols={15}
            />
          </label>

          <hr />
          <button type="submit">Submit</button>
        </form>
      </>
    )
}

export default Form;