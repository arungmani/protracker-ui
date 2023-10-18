import React, { useState, ChangeEvent } from "react";
import TutorialDataService from "../services/TutorialService";
import ITutorialData from '../types/Tutorial';

const AddTutorial: React.FC = () => {
  const initialTutorialState = {
    id: null,
    title: "",
    body: "",
    published: false
  };
  const [tutorial, setTutorial] = useState<ITutorialData>(initialTutorialState);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    var data = {
      title: tutorial.title,
      body: tutorial.body
    };

    TutorialDataService.create(data)
      .then((response: any) => {
        setTutorial({
          id: response.data.id,
          title: response.data.title,
          body: response.data.body,
          completed: response.data.completed
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const newTutorial = () => {
    setTutorial(initialTutorialState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTutorial}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={tutorial.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Body</label>
            <input
              type="text"
              className="form-control"
              id="body"
              required
              value={tutorial.body}
              onChange={handleInputChange}
              name="body"
            />
          </div>

          <button onClick={saveTutorial} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTutorial;
