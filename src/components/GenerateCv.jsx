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
          <p>{email}</p>
          <p>{phone}</p>
        </div>
      </div>
      <h2>Education</h2>
      <div className="education">
        <p>School name: {school}</p>
        <p>Title of study: {title}</p>
        <p>Study date: {studyDate}</p>
      </div>
      <h2>Experience</h2>
      <div className="experience">
        <p>Company name: {company}</p>
        <p>Position title: {position}</p>
        <p>Responsibilities: {responsibilities}</p>
        <p>Worked from: {workedFrom}</p>
        <p>Worked until: {workedUntil}</p>
      </div>
    </div>
  );
}

export default GenerateCv;
