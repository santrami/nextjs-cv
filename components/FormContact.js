import { Form, Button } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FormContact() {
  function sendEmail(e) {
    e.preventDefault();
    if (e.target[0].value !== '' && e.target[1].value !== '' && e.target[2].value !== '') {
      emailjs.sendForm('service_azp9qsn', 'template_c79qnh9', e.target, 'w5gngxMXzEI1xyNSl')
        .then(response => toast.success("Mensaje enviado correctamente", { position: "top-center" }))
        .catch(err => toast.error("ha ocurrido un error, intenta más tarde"))
      e.target.reset()
    }else {
      toast.error("por favor llena todos los datos")
    }
  }

  return (
    <Form className="card card-body text-light p-5 " id="contactForm" onSubmit={sendEmail}>
      <ToastContainer position="top-center" />
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre o empresa</Form.Label>
        <Form.Control type="text" name="nombre" placeholder="Escribe tu nombre o el nombre de la empresa" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" placeholder="Escribe tu email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control as="textarea" name="mensaje" rows={3} placeholder="Escribe tu mensaje" />
      </Form.Group>

      <Button style={{ width: "100%", margin: "auto" }} variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  )
}
