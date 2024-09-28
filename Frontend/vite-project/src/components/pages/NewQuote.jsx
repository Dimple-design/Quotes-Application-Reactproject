import React, { Fragment, useRef } from 'react'

function NewQuote() {

  const usernameInpRef = useRef();
  const quoteInpRef = useRef();


  const addQuoteHandler = (e) => {
    e.preventDefault();
    let author = usernameInpRef.current.value;
    let text = quoteInpRef.current.value;
  }


  return (
    <Fragment>
      <form onSubmit={addQuoteHandler}>
        <h1>New Quote Form</h1>
        <div>
          <label htmlFor="author">Author:</label>
          <input type="text" id='author' ref={usernameInpRef} placeholder='Add author name' />
        </div>
        <div>
          <label htmlFor="quote">Quote:</label>
          <textarea rows={4} cols={10} id="quote" ref={quoteInpRef} placeholder='Add author quote'></textarea>
        </div>
        <button>Add Quotes</button>
      </form>
    </Fragment>
  )
}


export default NewQuote
