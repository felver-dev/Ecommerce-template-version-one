import React from "react";
import { FaPaperclip, FaRegPaperPlane } from "react-icons/fa";
import { Breadcrumb } from "../../components";

const Chat = () => {
  return (
    <div className="body-wrapper space-pt--70 space-pb--120">
      <Breadcrumb pageTitle="Chat" prevUrl="/home" />
      <div className="chat-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="chat-wrap">
                <ul className="chat-list">
                  <li>
                    <div className="chat">
                      <div className="body">
                        <div className="image">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/comment/comment-1.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <div className="head">
                            <h5>Roger Welch</h5>
                            <span>Today 06.30 am</span>
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="chat">
                      <div className="body">
                        <div className="image">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/comment/comment-2.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <div className="head">
                            <h5>Me</h5>
                            <span>Today 06.30 am</span>
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="chat">
                      <div className="body">
                        <div className="image">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/comment/comment-1.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <div className="head">
                            <h5>Roger Welch</h5>
                            <span>Today 06.30 am</span>
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="chat">
                      <div className="body">
                        <div className="image">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/comment/comment-2.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <div className="head">
                            <h5>Me</h5>
                            <span>Today 06.30 am</span>
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="chat">
                      <div className="body">
                        <div className="image">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/comment/comment-1.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <div className="head">
                            <h5>Roger Welch</h5>
                            <span>Today 06.30 am</span>
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="chat">
                      <div className="body">
                        <div className="image">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/comment/comment-2.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <div className="head">
                            <h5>Me</h5>
                            <span>Today 06.30 am</span>
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-submission">
          <form>
            <input type="text" placeholder="Type something" />
            <div className="buttons">
              <label
                className="file-upload button button-box button-round button-primary"
                htmlFor="chat-file-upload"
              >
                <input type="file" id="chat-file-upload" multiple />
                <FaPaperclip />
              </label>
              <button className="submit">
                <FaRegPaperPlane />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
