import "../styles/Forms.css";

function Education({ handler }) {
  return (
    <>
      <form className="formCard">
        <label htmlFor="school">
          School name
          <input type="text" name="school" onChange={handler} />
        </label>
        <label htmlFor="title">
          Title of study
          <input type="text" name="title" onChange={handler} />
        </label>
        <label htmlFor="studyDate">
          Date of study
          <input type="date" name="studyDate" onChange={handler} />
        </label>
      </form>
    </>
  );
}

export default Education;
