import { closeFormChat } from "../js/A_js";
import React from 'react'

export default function Contact() {
  return (
    <>

    <div className="chat-popup" id="bcmyFormChat">
      <form action="/" className="form-container">
        <h4 className="p-titlechat">ช่องทางติดต่อเรา</h4>
        <a
          className="bc fab fa-twitter"
          target="_blank"
          title="twitter"
          href="https://twitter.com/boychawin"
        />
        <a
          className="bc fab fa-youtube"
          target="_blank"
          title="youtube"
          href="https://www.youtube.com/channel/UC4JgG8eoenTbswfYwJ8Z6Gg?view_as=subscriber"
        />
        <a
          className="bc fab fa-instagram"
          target="_blank"
          title="instagram"
          href="https://www.instagram.com/boy.chawin/"
        ></a>
        <a
          className="bc fab fa-facebook"
          target="_blank"
          title="facebook"
          href="https://www.facebook.com/boychawincom"
        />
        <button
          type="button"
          className=" cancelmessage"
          onClick={closeFormChat}
        >
          x
        </button>
      </form>
    </div>
  </>
  )
}
