import "../styles/Forms.css";

function Experience() {
  return (
    <>
      <form className="formCard">
        <label htmlFor="companyName">
          Company name
          <input type="text" name="companyName" />
        </label>
        <label htmlFor="position">
          Position title
          <input type="text" name="position" />
        </label>
        <label htmlFor="responsibilities">
          Responsibilities
          <textarea name="responsibilities"></textarea>
        </label>
        <label htmlFor="workedFrom">
          Worked from
          <input type="date" name="workedFrom" />
        </label>
        <label htmlFor="workedUntil">
          Worked until
          <input type="date" name="workedUntil" />
        </label>
      </form>
    </>
  );
}

export default Experience;
