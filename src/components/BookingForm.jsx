

const BookingForm=()=>{
       

  return (<>
  <div className="bookingform">
    <h2>INQUIRY FORM</h2>
    <form action="">
      <label htmlFor="Name">Name</label>
      <input type="text" placeholder="enter name..." />
      <br />
      <label htmlFor="Email">Email</label>
      <input type="email" placeholder="Enter mail..." />
      <br />
      <label htmlFor="Mobile">Phone-No</label>
      <input type="phone" placeholder="+91enter number..."/>
      <br />
      <label htmlFor="date">DOB</label>
      <input type="date" />
      <br />
      <button type="submit">Submit</button>
    </form>
  </div>
  </>)
}
export default BookingForm;