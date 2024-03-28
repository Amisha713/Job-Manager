"use client";
import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
// import Togglebutton from "./ToggleButton";
import { ImCopy } from "react-icons/im";
import { FaSearch } from "react-icons/fa";

const page = () => {
  const [selectedFields, setselectedFields] = useState([
    // "Is Remote",
    // "5 Day week",
  ]);
  const [jobtitle, setJobtitle] = useState("");
  const [Intro, setIntro] = useState("");
  const [roles, setroles] = useState("");
  const [minExp, setMinExp] = useState(-1);
  const [maxExp, setMaxExp] = useState(-1);
  const [cmpName, setCmpName] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [conclStt, setConclStt] = useState("");

  const [qualification, setQualification] = useState("");
  const [numArr, setNumArr] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);
  const [jobTitlePrev, setJobTitlePrev] = useState(true);
  const [introPrev, setIntroPrev] = useState(true);
  const [rolesPrev, setRolesPrev] = useState(true);
  const [expRangePrev, setExpRangePrev] = useState(true);
  const [qualPrev, setQualPrev] = useState(true);
  const [salaryPrev, setSalaryPrev] = useState(true);
  const [conclSttPrev, setConclSttPrev] = useState(true);
  const [cmpNamePrev, setCmpNamePrev] = useState(true);
  const [jobLocPrev, setJobLocPrev] = useState(true);
  const [jobTypePrev, setJobtypePrev] = useState(true);
  const [jobMulSelPrev, setJobMulSelPrev] = useState(true);
  const [activePreview, setActivePreview] = useState(true);

  const [jobArr, setJobArr] = useState([
    {
      jobNum: 0,
      jobNameDB: ["Software Development", true],
      jobIntroDB: ["Intro", false],
      jobRolesDB: ["roles", true],
      // jobMinExpDB: 0,
      // jobMaxExpDB: 1,
      jobExprange: [0, 1, true],
      jobQualDB: ["Btech", true],
      jobSalaryRangeDB: ["10000", true],
      jobConclSttDB: ["This is the concluding statement", true],
      jobCmpNameDB: ["sarawati accountans", true],
      jobLocationDB: ["Delhi", true],
      jobTypeDB: ["Part Time", true],
      jobAddFields: [["Is Remote"], true],
    },
  ]);

  // console.log("jobArr----->", jobArr);
  const [activeJobNum, setActiveJobNum] = useState(-1);
  console.log("selected", selectedFields);
  const handleChange = (event) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    //console.log(option.value);
    if (!selectedFields.find((n) => n == selectedOptions[0]))
      setselectedFields([...selectedFields, selectedOptions]);
  };
  // const creteNumoptions = () => {
  //   let crtOptions = "hello";
  //   // for (let i = 0; i < 21; i++) {
  //   //   crtOptions = crtOptions + "<option>" + i + "</option>";
  //   // }
  //   console.log(crtOptions);

  //   return crtOptions;
  // };

  const updateStateValues = (jobIndex) => {
    setActiveJobNum(jobIndex);
    let tgtJobJSON = jobArr[activeJobNum];
    setJobtitle(tgtJobJSON?.jobNameDB[0]);
    setIntro(tgtJobJSON?.jobIntroDB[0]);
    setroles(tgtJobJSON?.jobRolesDB[0]);
    setMinExp(tgtJobJSON?.jobExprange[0]);
    setMaxExp(tgtJobJSON?.jobExprange[1]);
    setQualification(tgtJobJSON?.jobQualDB[0]);
    setCmpName(tgtJobJSON?.jobCmpNameDB[0]);
    setLocation(tgtJobJSON?.jobLocationDB[0]);
    setJobType(tgtJobJSON?.jobTypeDB[0]);
    setSalaryRange(tgtJobJSON?.jobSalaryRangeDB[0]);
    setConclStt(tgtJobJSON?.jobConclSttDB[0]);
    setselectedFields(tgtJobJSON?.jobAddFields[0]);

    //preview
    setJobTitlePrev(tgtJobJSON?.jobNameDB[1]);
    setIntroPrev(tgtJobJSON?.jobIntroDB[1]);
    setRolesPrev(tgtJobJSON?.jobRolesDB[1]);
    setExpRangePrev(tgtJobJSON?.jobExprange[2]);
    setQualPrev(tgtJobJSON?.jobQualDB[1]);
    setSalaryPrev(tgtJobJSON?.jobCmpNameDB[1]);
    setConclSttPrev(tgtJobJSON?.jobConclSttDB[1]);
    setCmpNamePrev(tgtJobJSON?.jobCmpNameDB[1]);
    setJobLocPrev(tgtJobJSON?.jobLocationDB[1]);
    setJobtypePrev(tgtJobJSON?.jobTypeDB[1]);
    setJobMulSelPrev(tgtJobJSON?.jobAddFields[1]);
  };

  const newJobState = () => {
    setActiveJobNum(-1);

    setJobtitle("");
    setIntro("");
    setroles("");
    setMinExp(-1);
    setMaxExp(-1);
    setQualification("");
    setCmpName("");
    setLocation("");
    setJobType("");
    setSalaryRange("");
    setConclStt("");
    setselectedFields([]);

    //preview
    setJobTitlePrev(true);
    setIntroPrev(true);
    setRolesPrev(true);
    setExpRangePrev(true);
    setQualPrev(true);
    setSalaryPrev(true);
    setConclSttPrev(true);
    setCmpNamePrev(true);
    setJobLocPrev(true);
    setJobtypePrev(true);
    setJobMulSelPrev(true);
  };

  const duplicateJob = () => {
    let jobJSON = {};
    jobJSON.jobNameDB = [jobtitle, jobTitlePrev];
    jobJSON.jobIntroDB = [Intro, introPrev];
    jobJSON.jobRolesDB = [roles, rolesPrev];
    jobJSON.jobExprange = [minExp, maxExp, expRangePrev];
    jobJSON.jobQualDB = [qualification, qualPrev];
    jobJSON.jobSalaryRangeDB = [salaryRange, salaryPrev];
    jobJSON.jobConclSttDB = [conclStt, conclSttPrev];
    jobJSON.jobLocationDB = [location, jobLocPrev];
    jobJSON.jobTypeDB = [jobType, jobTypePrev];
    jobJSON.jobCmpNameDB = [cmpName, cmpNamePrev];
    jobJSON.jobAddFields = [selectedFields, jobMulSelPrev];
    // console.log(jobJSON);
    if (activeJobNum > -1) {
      // jobArr.push(jobJSON);
      setJobArr([...jobArr, jobJSON]);
    }
    // console.log(jobArr);
    newJobState();
  };
  // useEffect(() => {
  //   duplicateJob();
  // }, []);

  const deleteJob = () => {
    jobArr.splice(activeJobNum, 1);
    const arr = [...jobArr];
    setJobArr(arr);
    newJobState();
    // console.log(jobArr);
  };

  const saveJob = () => {
    let jobJSON = {};
    jobJSON.jobNameDB = [jobtitle, jobTitlePrev];
    jobJSON.jobIntroDB = [Intro, introPrev];
    jobJSON.jobRolesDB = [roles, rolesPrev];
    jobJSON.jobExprange = [minExp, maxExp, expRangePrev];
    jobJSON.jobQualDB = [qualification, qualPrev];
    jobJSON.jobSalaryRangeDB = [salaryRange, salaryPrev];
    jobJSON.jobConclSttDB = [conclStt, conclSttPrev];
    jobJSON.jobLocationDB = [location, jobLocPrev];
    jobJSON.jobTypeDB = [jobType, jobTypePrev];
    jobJSON.jobCmpNameDB = [cmpName, cmpNamePrev];
    jobJSON.jobAddFields = [selectedFields, jobMulSelPrev];
    // console.log(jobJSON);
    if (activeJobNum > -1) {
      jobArr.splice(activeJobNum, 1);
      jobArr.splice(activeJobNum, 0, jobJSON);
      const arr = [...jobArr];
      setJobArr(arr);
    } else {
      console.log(jobJSON);
      setJobArr([...jobArr, jobJSON]);
    }
    newJobState();
  };

  const Togglebutton = () => {
    return (
      <>
        <style jsx>{`
          /* CHECKBOX TOGGLE SWITCH */
          /* @apply rules for documentation, these do not work as inline style */
          .toggle-checkbox:checked {
            right: 0;
            background-color: #cfd7d1;
          }
          .toggle-checkbox:checked + .toggle-label {
            background-color: #389638;
          }
        `}</style>

        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in ">
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            className="toggle-checkbox absolute block w-4 h-3  rounded-full bg-[#cfd7d1] appearance-none cursor-pointer p-3"
            onChange={(e) => setActivePreview(e.target.checked)}
            checked={activePreview}
          />
          <label
            htmlFor="toggle"
            className="toggle-label block overflow-hidden h-6 shadow-md rounded-full bg-[#e65c5c] cursor-pointer"
          ></label>
        </div>
      </>
    );
  };

  return (
    <div className="flex p-5  ">
      <div className="mt-10 ">
        <div className="border h-fit p-2 border-r-white" onClick={newJobState}>
          <span>New Job +</span>
        </div>
        {/* <div>{jobArr.length}</div> */}
        {jobArr.map((items, index) => (
          <div
            className="border h-fit p-2 border-r-white bg-gray-200"
            onClick={() => updateStateValues(index)}
          >
            <span>Job Post {index + 1}</span>
          </div>
        ))}
      </div>
      <div className="border w-[40%] h-screen p-10 flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="flex  items-center gap-2">
            <input
              type="checkbox"
              checked={jobTitlePrev}
              onChange={(e) => setJobTitlePrev(e.target.checked)}
            />
            <input
              type="text"
              placeholder="Job Post Title"
              className="border p-2"
              value={jobtitle}
              onChange={(e) => setJobtitle(e.target.value)}
            />
          </div>
          <div>
            Active?
            {/* <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label
                htmlFor="toggle"
                className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div> */}
            <i>
              <Togglebutton className="text-red-200" />
            </i>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-2">
            <input
              type="checkbox"
              checked={introPrev}
              onChange={(e) => setIntroPrev(e.target.checked)}
            />
            <span className="border-b-black border-b">Introduction</span>
          </div>
          <textarea
            rows="3"
            className="border px-2 ml-5 "
            onChange={(e) => setIntro(e.target.value)}
            placeholder="the ideal candidate is someone...."
            value={Intro}
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-2">
            <input
              type="checkbox"
              checked={rolesPrev}
              onChange={(e) => setRolesPrev(e.target.checked)}
            />
            <span className="border-b-black border-b">
              Roles and Responsibilities
            </span>
          </div>
          <textarea
            rows="3"
            className="border px-2 ml-5"
            onChange={(e) => setroles(e.target.value)}
            placeholder="Your job role will include ..."
            value={roles}
          />
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <input
              type="checkbox"
              checked={expRangePrev}
              onChange={(e) => setExpRangePrev(e.target.checked)}
            />
            {/* <span className="border-b-black border-b">
              Experience Range (yes)
            </span> */}
            <span className="p-2">Experience Range (yrs)</span>
          </div>
          <div className="flex gap-3">
            <select
              className="border p-2"
              onChange={(e) => setMinExp(e.target.value)}
              value={minExp == -1 ? "Min" : minExp}
            >
              <option selected disabled>
                Min
              </option>
              {numArr.map((item) => (
                <option>{item}</option>
              ))}
            </select>
            <select
              className="border p-2 "
              onChange={(e) => setMaxExp(e.target.value)}
              value={maxExp == -1 ? "Max" : maxExp}
            >
              <option selected disabled>
                Max
              </option>
              {numArr.map((item) => (
                <option>{item}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex gap-3 ">
          <input
            type="checkbox"
            className="border"
            checked={qualPrev}
            onChange={(e) => setQualPrev(e.target.checked)}
          />
          <input
            type="text"
            className="border w-full p-1"
            placeholder="Qualifications"
            onChange={(e) => setQualification(e.target.value)}
            value={qualification}
          />
        </div>
        <div className="flex gap-3 ">
          <input
            type="checkbox"
            className="border"
            checked={salaryPrev}
            onChange={(e) => setSalaryPrev(e.target.checked)}
          />
          <input
            type="text"
            className="border w-[30%] p-1"
            placeholder="Salary Range"
            onChange={(e) => setSalaryRange(e.target.value)}
            value={salaryRange}
          />
        </div>
        <div className="flex gap-3 ">
          <input
            type="checkbox"
            className="border"
            checked={conclSttPrev}
            onChange={(e) => setConclSttPrev(e.target.checked)}
          />
          <textarea
            type="text"
            className="border w-full"
            rows="3"
            onChange={(e) => setConclStt(e.target.value)}
            placeholder="Call to Action  Concluding Statement.. Ex. You will be involved with creating various exciting features such as chat, real time collaboration, inetraction with IOT devices etc. to name a few. If You are interested lets get talking!"
            value={conclStt}
          />
        </div>
        <div className="flex gap-3 ">
          <input
            type="checkbox"
            className="border"
            checked={cmpNamePrev}
            onChange={(e) => setCmpNamePrev(e.target.checked)}
          />
          <input
            type="text"
            className="border w-[30%]"
            placeholder="Company"
            onChange={(e) => setCmpName(e.target.value)}
            value={cmpName}
          />
        </div>
        <div className="flex gap-3 ">
          <input
            type="checkbox"
            className="border"
            checked={jobLocPrev}
            onChange={(e) => setJobLocPrev(e.target.checked)}
          />
          <input
            type="text"
            className="border w-[40%]"
            placeholder="Job Location(Map Search)"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 ">
            <input
              type="checkbox"
              className="border"
              checked={jobTypePrev}
              onChange={(e) => setJobtypePrev(e.target.checked)}
            />
            <select
              className="border"
              onChange={(e) => setJobType(e.target.value)}
              value={jobType ? jobType : "Choose a option"}
            >
              <option selected disabled>
                Choose a option
              </option>
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Contract</option>
              <option>Internship</option>
            </select>
          </div>
          <div className="flex gap-2 ">
            <input
              type="checkbox"
              className="border"
              onChange={(e) => setJobMulSelPrev(e.target.checked)}
              checked={jobMulSelPrev}
            />

            <select
              id="fruits"
              name="fruits"
              multiple
              size="2"
              onChange={handleChange}
            >
              <option value="Is Remote">Is Remote</option>
              <option value="5 Day week">5 Day week</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end mt-3" onClick={saveJob}>
          <button className=" items-right gap-3 border h-8 rounded-[10%] bg-green-300 w-[20%]">
            Save Job
          </button>
        </div>
      </div>
      <div className="mt-10 h-[20%] border">
        <div
          className=" h-fit p-2 border-r-white flex items-center gap-1"
          onClick={deleteJob}
        >
          <FaTrashAlt style={{ color: "red" }} />
          <span>Delete</span>
        </div>
        <div
          className=" h-fit p-2 border-r-white flex items-center gap-1"
          onClick={duplicateJob}
        >
          <ImCopy style={{ color: "blue" }} />
          <span>Duplicate</span>
        </div>
      </div>
      {activePreview ? (
        <div className="border w-[40%]">
          <div className="flex items-center fixed top-3 ml-5">
            <FaSearch style={{ color: "purple" }} />
            <span className="fixed top-2 ml-5 bg-white">Live Preview</span>
          </div>
          <div className="mt-5 flex justify-between items-center px-5">
            <span>{jobTitlePrev ? jobtitle : ""}</span>
            {jobMulSelPrev ? (
              <div className="flex items-center gap-3">
                {selectedFields.find((n) => n == "Is Remote") ? (
                  <span className="flex p-5 border rounded-[50%] bg-blue-300 w-fit">
                    Remote
                  </span>
                ) : (
                  ""
                )}
                {selectedFields.find((n) => n == "5 Day week") ? (
                  <span className="flex p-5 border rounded-[50%] bg-blue-300 w-fit">
                    5 days week
                  </span>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="mt-3 flex ">
            {/* <span className="">Introduction:-</span> */}
            {introPrev ? (
              <textarea
                className="resize-none h-[100px] p-3 w-[90%] gap-3 overflow-auto"
                disabled
                value={"Introduction:    " + Intro}
              />
            ) : (
              ""
            )}
          </div>
          {rolesPrev ? (
            <div className="mt-3  ">
              <span>Roles and Responsibilities</span>
              <textarea
                className="resize-none h-[100px] p-3 w-[90%] gap-3 overflow-auto"
                disabled
                value={roles}
              />
            </div>
          ) : (
            ""
          )}
          {expRangePrev ? (
            <div className="mt-3 flex ">
              <span className="w-[30%]">Preferred Experience : </span>

              <span className="w-[40%]">
                {minExp == -1 ? "" : minExp} to {maxExp == -1 ? "" : maxExp} yrs
              </span>
            </div>
          ) : (
            ""
          )}
          {qualPrev ? (
            <div className="mt-3 flex ">
              <span className="w-[20%]">Qualification : </span>
              <textarea
                className="resize-none  w-[70%] gap-3 overflow-auto"
                disabled
                rows={1}
                value={qualification}
              />
            </div>
          ) : (
            ""
          )}
          {salaryPrev ? (
            <div className="mt-3 flex ">
              <span className="w-[20%]">Salary Range: </span>
              <textarea
                className="resize-none  w-[70%] gap-3 overflow-auto"
                disabled
                rows={1}
                value={salaryRange}
              />
            </div>
          ) : (
            ""
          )}
          {conclSttPrev ? (
            <div className="mt-3  flex justify-items-start">
              {/* <span>Concluding Statement:</span> */}
              <textarea
                className="resize-none h-[100px]  w-[90%] gap-3 overflow-auto"
                disabled
                value={"Concluding Statement:   " + conclStt}
              />
            </div>
          ) : (
            ""
          )}
          {cmpNamePrev ? (
            <div className="mt-3 flex ">
              <span className=" w-[20%]">Company</span>
              <textarea
                className="resize-none  w-[70%] gap-3 overflow-auto"
                disabled
                rows={1}
                value={cmpName}
              />
            </div>
          ) : (
            ""
          )}
          {jobLocPrev ? (
            <div className="mt-3 flex ">
              <span className=" w-[20%]">Location</span>
              <textarea
                className="resize-none  w-[70%] gap-3 overflow-auto"
                disabled
                rows={1}
                value={location}
              />
            </div>
          ) : (
            ""
          )}
          {jobTypePrev ? (
            <div className="mt-3 flex ">
              <span className=" w-[20%]">Job Type</span>
              <textarea
                className="resize-none  w-[70%] gap-3 overflow-auto"
                disabled
                rows={1}
                value={jobType}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default page;
