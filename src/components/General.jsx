import "../styles/Forms.css";

function General() {
  return (
    <>
      <form className="formCard">
        <label htmlFor="fullName">
          Full name
          <input type="text" name="fullName" />
        </label>
        <label htmlFor="email">
          Email
          <input type="email" name="email" />
        </label>
        <label htmlFor="phone">
          Phone Number
          <input type="tel" name="phone" />
        </label>
      </form>
    </>
  );
}

export default General;
