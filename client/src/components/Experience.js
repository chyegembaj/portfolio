import React, { useState } from "react";
import { experienceData } from "../experienceData";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Button } from "react-bootstrap";

const Experience = () => {
  const [jobs, setJobs] = useState(experienceData);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);

  const { title, company, dates, duties, environment } = jobs[value];
  return (
    <section>
      <div className="title">
        <h2>Experience</h2>
      </div>
      <div className="container">
        <div className="btn-container">
          {jobs.map((item, index) => (
            <Button
              variant="info"
              style={{ marginRight: "10px" }}
              key={item.id}
              onClick={() => setValue(index)}
            >
              {item.company}
            </Button>
          ))}
        </div>
        <article className="job-info">
          <h5>{title}</h5>
          <p>{company}</p>
          <p>{dates}</p>
          {duties.map((duty) => (
            <div>
              <p>
                <FaAngleDoubleRight />
                {duty}
              </p>
            </div>
          ))}
          <p>{environment}</p>
        </article>
      </div>
    </section>
  );
};

export default Experience;
