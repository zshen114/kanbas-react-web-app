import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../../Database";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faEllipsisVertical, faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div className="assignment-editor">
      <div className="assignment-editor-header-buttons">
        <FontAwesomeIcon icon={faCircleCheck} className="align-self-center icon-margin-small" style={{ color: "green" }} />
        <div className="assignment-editor-published-text align-self-center icon-margin">Published</div>
        <button className="btn btn-light">
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </button>
      </div>
      <hr />
      <div>
        <form>
          <div className="continer">
            <div className="row p-2">
              <label for="assignment-name-text-field" className="col-12 assignment-title">Assignment Name</label>
              <input id="assignment-name-text-field" type="text" value={assignment.title} className="form-control col-12" />
            </div>
            <div className="row p-2">
              <textarea className="form-control"
                rows="4">This assignment describes how to install the development environment for creating and working with a Web application we will be developing this semester. We will add new content every week, pushing the code to a GitHub source repository, and then deploying the content to a remote server hosted on Netlify.</textarea>
            </div>
            <div className="row p-2">
              <label for="points-text-field"
                className="col-3 assignment-edit-content-title align-self-center">Points</label>
              <input id="points-text-field" type="number"
                className="form-control col-6 assignment-edit-content-form" value="100" />
            </div>
            <div className="row p-2">
              <label for="assignment-group-text-field"
                className="col-3 assignment-edit-content-title align-self-center">Assignment Group</label>
              <select id="assignment-group-text-field"
                className="form-select assignment-edit-content-form">
                <option selected>ASSIGNMENTS</option>
              </select>
            </div>
            <div className="row p-2">
              <label for="assignment-grade-display-text-field"
                className="col-3 assignment-edit-content-title align-self-center">Display Grade as</label>
              <select id="assignment-grade-display-text-field"
                className="form-select assignment-edit-content-form">
                <option selected>Percentage</option>
              </select>
            </div>
            <div className="row p-2">
              <label className="col-3 assignment-edit-content-title"></label>
              <div className="assignment-edit-content-form">
                <input type="checkbox" id="grade-to-final" className="checkbox-margin-right" />
                <label for="grade-to-final">Do not count this assignment towards the final
                  grade</label>
              </div>
            </div>
            <div className="row p-2">
              <label className="col-3 assignment-edit-content-title">Submission Type</label>
              <div className="assignment-edit-content-form submission-type-continar">
                <div className="row p-2">
                  <select id="assignment-submission-type-text-field" className="form-select">
                    <option selected>Online</option>
                  </select>
                </div>
                <div className="row p-2">
                  <div className="assignment-edit-online-entry-text">Online Entry Option</div>
                  <div>
                    <input type="checkbox" checked id="text-entry" className="checkbox-margin-right"/>
                    <label for="text-entry">Text Entry</label>
                  </div>
                  <div>
                    <input type="checkbox" checked id="website-entry" className="checkbox-margin-right"/>
                    <label for="website-entry">Website URL</label>
                  </div>
                  <div>
                    <input type="checkbox" checked id="media-entry" className="checkbox-margin-right"/>
                    <label for="media-entry">Media Recordings</label>
                  </div>
                  <div>
                    <input type="checkbox" id="student-annotation-entry" className="checkbox-margin-right"/>
                    <label for="student-annotation-entry">Student Annotation</label>
                  </div>
                  <div>
                    <input type="checkbox" id="file-entry" className="checkbox-margin-right"/>
                    <label for="file-entry">File Uploads</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row p-2">
              <label className="col-3 assignment-edit-content-title">Assign</label>
              <div className="assignment-edit-content-form submission-type-continar">
                <div className="row p-2">
                  <label className="assignment-edit-online-entry-text">Assign to</label>
                  <div className="form-control">Everyone 
                 
                  </div>
                </div>
                <div className="row p-2">
                  <div className="assignment-edit-online-entry-text">Due to</div>
                  <input className="form-control" type="date" id="text-fields-until"/>
                </div>
                <div className="row p-2">
                  <div className="col-6 assignment-edit-online-entry-text">Available from</div>
                  <div className="col-6 assignment-edit-online-entry-text">Until</div>
                  <input className="form-control assignment-edit-content-half-size-date"
                    type="date" id="text-fields-until" />
                  <input className="form-control assignment-edit-content-half-size-date"
                    type="date" id="text-fields-until" />
                </div>
                <div className="row">
                  <button type="button" className="btn btn-light add-button">
                  <FontAwesomeIcon icon={faPlus} />
                    Add
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-6 align-self-center">
                <input type="checkbox" id="notify-user-content-changed" className="checkbox-margin-right" />
                <label for="notify-user-content-changed">Notify users that this content has
                  changed</label>
              </div>
              <div className="col-6 align-self-center">
                <button onClick={handleSave} className="btn btn-danger float-end courses-home-module-button save-button">
                  Save
                </button>
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-light courses-home-module-button float-end">
                  Cancel
                </Link>
              </div>
            </div>
            <hr />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AssignmentEditor;