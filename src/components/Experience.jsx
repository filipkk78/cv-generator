import "../styles/Forms.css";

function Experience({ handler }) {
  return (
    <>
      <form className="formCard">
        <label htmlFor="companyName">
          Company name
          <input type="text" name="company" onChange={handler} />
        </label>
        <label htmlFor="position">
          Position title
          <input type="text" name="position" onChange={handler} />
        </label>
        <label htmlFor="responsibilities">
          Responsibilities
          <textarea name="responsibilities" onChange={handler}></textarea>
        </label>
        <label htmlFor="workedFrom">
          Worked from
          <input type="date" name="workedFrom" onChange={handler} />
        </label>
        <label htmlFor="workedUntil">
          Worked until
          <input type="date" name="workedUntil" onChange={handler} />
        </label>
      </form>
    </>
  );
}

export default Experience;
