

export default function Form() {
  return (
    <section id="contact-form" className="section psy-booking">
      <div className="container psy-booking-grid">
        {/* Colonna sinistra */}
        <div className="psy-booking-copy">
          <h2>Prenota una consulenza</h2>
          <p className="lead">Compila il modulo per essere ricontattato.</p>
        </div>

        {/* Colonna destra: FormSubmit */}
        <form
          className="psy-form"
          action="https://formsubmit.co/alessandra.scarsi.psi@gmail.com"
          // action="https://formsubmit.co/albertoscarsi9@gmail.com"
          method="POST"
          noValidate
        >
          {/* FormSubmit options */}
          <input type="hidden" name="_subject" value="Nuova richiesta dal sito" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://www.alessandrascarsi.com/" />
          {/* honeypot anti-spam */}
          <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} />

          <div className="fields">
            <div className="control">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Inserisci il tuo nome"
                autoComplete="name"
              />
            </div>

            <div className="control">
              <label htmlFor="phone">Telefono</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+39 333 123 4567"
                autoComplete="tel"
              />
            </div>

            <div className="control span-2">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="nome@email.com"
                autoComplete="email"
              />
            </div>

            <div className="control span-2">
              <label htmlFor="message">Messaggio</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Scrivi qui…"
              />
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

