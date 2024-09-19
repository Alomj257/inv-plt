import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";

const Investment = ({ invest, step, setInvestVal }) => {
  const [active, setActive] = useState([]);
  const handleChange = (field, value, selectType) => {
    if (selectType) {
      setActive(value);
      setInvestVal((pre) => ({ ...pre, [field]: value }));
    } else {
      if (active?.includes(value)) {
        setActive((pre) => pre.filter((v) => v !== value));
        setInvestVal((pre) => ({
          ...pre,
          [field]: pre[field]?.includes(value)
            ? pre[field].filter((item) => item !== value)
            : [...(pre[field] || []), value],
        }));
      } else {
        setActive([...active, value]);
        setInvestVal((pre) => ({
          ...pre,
          [field]: pre[field] ? [...pre[field], value] : [value],
        }));
      }
    }
  };

  const fieldChange = (e) => {
    const { name, value } = e.target;
    setInterval((pre) => ({ ...pre, [name]: value }));
  };

  return (
    <>
      <div>
        {invest?.map(
          (val, index) =>
            step === index && (
              <div>
                <h6>{val?.head}</h6>
                {index != 4 ? (
                  <div
                    className={`${
                      index === 1 || index === 5
                        ? "d-flex flex-wrap my-3 gap-3"
                        : `row  row-cols-${val?.field !== "investorType" && 2}`
                    } `}
                  >
                    {val?.option?.map((v, i) => (
                      <div
                        className={`${
                          index === 1 || index === 5 ? "" : "mb-4"
                        } `}
                      >
                        <div
                          onClick={() =>
                            handleChange(val?.field, v, val?.isSingle)
                          }
                          className={`bg-border cursor-pointer ${
                            active.includes(v) && "border"
                          } d-flex align-items-center gap-2 rounded-5 p-3 px-4 text-very-light-gray`}
                          key={index + " " + i}
                          style={{ width: "maxc-content" }}
                        >
                          {val?.isIcon && (
                            <div
                              className="bg-white rounded-circle text-dark d-flex align-items-center justify-content-center"
                              style={{ width: "20px", aspectRatio: "1/1" }}
                            >
                              {active.includes(v) && <FaCheck />}
                            </div>
                          )}
                          <span>{v}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="areas d-flex flex-column gap-3">
                    <div className="field">
                      <label htmlFor="">
                        What would you consider to be your field of expertise ?
                      </label>
                      <textarea
                        onChange={fieldChange}
                        rows={4}
                        className="input-field"
                        name="expertise"
                        id=""
                      ></textarea>
                    </div>
                    <div className="field">
                      <label htmlFor="">What are your main passions ?</label>
                      <textarea
                        onChange={fieldChange}
                        rows={4}
                        className="input-field"
                        name="expertise"
                        id=""
                      ></textarea>
                    </div>
                  </div>
                )}
              </div>
            )
        )}
      </div>
    </>
  );
};

export default Investment;
