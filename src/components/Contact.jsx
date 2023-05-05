import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Map from "./Map";
import { ButtonContact, Contacto, Form, InputContact, LeftContact, Right, RightContact, Section, TextArea, TitleContact } from "./Styled";


const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h383cim",
        "template_ey1wyx8",
        ref.current,
        "NboH3uHtZ34spL78w"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <Section id="Contact">
      <Contacto>
        <LeftContact>
          <Form ref={ref} onSubmit={handleSubmit}>
            <TitleContact>Contact Us</TitleContact>
            <InputContact placeholder="Name" name="name" />
            <InputContact placeholder="Email" name="email" />
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <ButtonContact type="submit">Send</ButtonContact>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
          </Form>
        </LeftContact>
        <RightContact>
        <Map />
        </RightContact>
        
      </Contacto>
    </Section>
  );
};

export default Contact;