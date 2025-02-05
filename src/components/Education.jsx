import "../styles/Forms.css";

function Education() {
  return (
    <>
      <form className="formCard">
        <label htmlFor="school">
          School name
          <input type="text" name="school" />
        </label>
        <label htmlFor="title">
          Title of study
          <input type="text" name="title" />
        </label>
        <label htmlFor="studyDate">
          Date of study
          <input type="date" name="studyDate" />
        </label>
      </form>
    </>
  );
}

export default Education;
