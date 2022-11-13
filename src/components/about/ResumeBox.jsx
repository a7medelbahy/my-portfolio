const ResumeBox = (props) => {
    return (
      <div className="resumeInfo-box rounded p-3">
        <h5>{props.resumeBox.title}</h5>
        <small className="text-white-50">{props.resumeBox.time}</small>
        <p className="text-white mt-3">{props.resumeBox.detail1}</p>
        <p className="text-white-50">{props.resumeBox.detail2}</p>
      </div>
    );
  };
  
  export default ResumeBox;
  