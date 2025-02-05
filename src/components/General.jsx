import "../styles/Forms.css";

function General({ handler }) {
  return (
    <>
      <form className="formCard">
        <label htmlFor="fullName">
          Full name
          <input type="text" name="name" onChange={handler} />
        </label>
        <label htmlFor="email">
          Email
          <input type="email" name="email" onChange={handler} />
        </label>
        <label htmlFor="phone">
          Phone Number
          <input type="tel" name="phone" onChange={handler} />
        </label>
      </form>
    </>
  );
}

export default General;
