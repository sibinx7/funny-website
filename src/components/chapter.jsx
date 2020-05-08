import React, {Component} from "react";
import "./chapter.scss"

const chapterStatusObject = {
  completed: {
    className: "chapter__completed",
    text: "Completed"
  },
  play: {
    className:"chapter__play",
    text: "Play Now"
  },
  locked: {
    className: "chapter__lock",
    text: "Play",
    status: "locked"
  }
}


class ChapterStatus extends Component{
  render() {
    const { status } = this.props;


    const chapterStatus = chapterStatusObject[status];



    return (
      <button className={`chapter__status ${chapterStatus.className}`}>
        {
          chapterStatus.text
        }
        {
          !!(chapterStatus && chapterStatus.status === "locked") && (
            <span className={"ml-8 icon-lock"}></span>
          )
        }
      </button>
    )
  }
}

class Chapter extends Component{
  render() {
    const { data } = this.props;
    const { details } = data;
    let showDetailsBottom = false;
    if(details.hasOwnProperty("completed") && details.hasOwnProperty("total")){
      showDetailsBottom = true;
    }
    return (
      <div className={`chapter chapter--${data.chapter}` }>
        <div className="chapter__inner">
          {/* Chapter Section One */}
          <div className="chapter__intro">
            <h6 className="chapter__no fs-15"> Chapters {data.chapter}</h6>
            <h3 className={"text-dark fs-31"}>{data.category}</h3>
            <h5 className={"text-blue fs-22"}>
              {`${data.points.completed}/${data.points.base}`} Points
            </h5>
          </div>
          {/* end Chapter Section One */}

          {/* Chapter question status */}
          <div className="chapter__details">
            <h5 className={"text-green"}>You've completed</h5>
            <div className="chapter__details__info">
              <h2 className={"fs-30 info__title"}>
                <span className={`text-blue`}>
                {
                  `${details.answered_questions}/${details.total_questions}`
                }
              </span>

                &nbsp;
                <span>{`${details.type}`}</span>
              </h2>
            </div>
            {
              showDetailsBottom && <div className="chapter__details__questions fs-12 text-light-brown">
                <span className={``}>{`${details.completed}/${details.total}`}</span>&nbsp;
                <span>Questions answered</span>
              </div>
            }

          </div>
          {/* end Chapter question status */}


          {/* Chapter completed status */}
          <ChapterStatus className={""} status={ data.status }/>
          {/* end Chapter completed status */}
        </div>
      </div>
    )
  }
}



export default Chapter;