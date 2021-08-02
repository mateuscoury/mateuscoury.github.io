import React, { useState } from 'react';
import { send } from 'emailjs-com';
import { init } from 'emailjs-com';
init('user_RIRdC35RAzf6kXxCGaWdK');

export default () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });
  const onSubmit = (e) => {
    e.preventDefault();
    send('service_rnz83an', 'template_rlqvbw6', toSend)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='from_name'
          placeholder='from name'
          value={toSend.from_name}
          onChange={handleChange}
        />
        <input
          type='text'
          name='to_name'
          placeholder='to name'
          value={toSend.to_name}
          onChange={handleChange}
        />
        <input
          type='text'
          name='message'
          placeholder='Your message'
          value={toSend.message}
          onChange={handleChange}
        />
        <input
          type='text'
          name='reply_to'
          placeholder='Your email'
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
