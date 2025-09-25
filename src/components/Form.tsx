import { FormEvent } from "react";

export default function Form() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    console.log("Form payload:", payload);
    alert("Richiesta inviata.");
    e.currentTarget.reset();
  };

  return (
    <section id="contact-form" className="section psy-booking">
      <div className="container psy-booking-grid">
        {/* Colonna sinistra: titolo + testo */}
        <div className="psy-booking-copy">
          <h2>Prenota una consulenza</h2>
          <p className="lead">
            Compila il modulo per essere ricontattato. Tutti i campi sono obbligatori.
          </p>
        </div>

        {/* Colonna destra: form */}
        <form className="psy-form" onSubmit={onSubmit} noValidate>
          <div className="fields">
            <div className="control">
              <label htmlFor="name">Nome</label>
              <input id="name" name="name" type="text" required placeholder="Inserisci il tuo nome" />
            </div>

            <div className="control">
              <label htmlFor="phone">Telefono</label>
              <input id="phone" name="phone" type="tel" required placeholder="+39 333 123 4567" />
            </div>

            <div className="control span-2">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required placeholder="nome@email.com" />
            </div>

            <div className="control span-2">
              <label htmlFor="message">Messaggio</label>
              <textarea id="message" name="message" required rows={5} placeholder="Scrivi qui…"></textarea>
            </div>

            <button className="btn psy-cta w-100" type="submit">
              Invia richiesta
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
