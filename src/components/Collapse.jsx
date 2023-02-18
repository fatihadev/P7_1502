import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../style/collapses.css";

function Collapse(props) {
  const [visible, setVisible] = useState(
    props.info ? false : props.prod.equipments.map(() => false)
  );
  const display = (index) => {
    setVisible((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  // tester si collapse est ouverte ou ferme

  return (
    <>
      {props.info ? (
        <section>
          <div className="collapse_title">
            <h2 className="title">{props.info.title}</h2>

            <p onClick={() => display(0)} className="icon">
              {visible[0] ? (
                <FontAwesomeIcon icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} />
              )}
            </p>
          </div>
          <div className="collapse_description">
            {visible[0] && (
              <p className="info_description">{props.info.description}</p>
            )}
          </div>
        </section>
      ) : (
        <>
          <div className="collapses">
            <section className="collapse_style_des">
              <div className="collapse_title_log">
                <h2 className="title_log">Description</h2>

                <p onClick={() => display(1)} className="icon">
                  {visible[1] ? (
                    <FontAwesomeIcon icon={faChevronUp} />
                  ) : (
                    <FontAwesomeIcon icon={faChevronDown} />
                  )}
                </p>
              </div>
              <div className="collapse_description_log">
                <div className="list_description">
                  {visible[1] && (
                    <p className="info_description_log">
                      {" "}
                      {props.prod.description}
                    </p>
                  )}
                </div>
              </div>
            </section>

            <section className="collapse_style_equi">
              <div className="collapse_title_log">
                <h2 className="title_log">Equipements</h2>

                <p onClick={() => display(2)} className="icon">
                  {visible[2] ? (
                    <FontAwesomeIcon icon={faChevronUp} />
                  ) : (
                    <FontAwesomeIcon icon={faChevronDown} />
                  )}
                </p>
              </div>
              <div className="collapse_description_log">
                <ul className="list_equipment">
                  {props.prod.equipments.map((equip, index) => (
                    <li
                      key={index}
                      className="info_description_log_equip"
                      style={{ display: visible[2] ? "block" : "none" }}
                    >
                      {equip}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
}

export default Collapse;
