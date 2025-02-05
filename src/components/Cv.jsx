import "../styles/Cv.css";

function GenerateCv({
  name,
  email,
  phone,
  school,
  title,
  studyDate,
  company,
  position,
  responsibilities,
  workedFrom,
  workedUntil,
}) {
  return (
    <div className="cv-body">
      <div className="cv-header">
        <h2>{name}</h2>
        <div className="contact-info">
          <span>{email}</span>
          <span>{phone}</span>
        </div>
      </div>
      <h2>Education</h2>
      <div className="education">
        <p>School name: {school}</p>
        <p>Title of study: {title}</p>
        <p>Study date: {studyDate}</p>
      </div>
    </div>
  );
}

export default GenerateCv;
