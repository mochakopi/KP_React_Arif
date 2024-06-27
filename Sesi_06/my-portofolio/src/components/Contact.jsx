const Contact = () => {
  return (
    <div className="container">
      <h1 className="mt-5">Contact</h1>
      <p>Menu ini digunakan untuk mengirimkan pesan kepada kami.</p>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" id="email" name="email" required />
          <div className="invalid-feedback">
            Please enter a valid email address.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input type="tel" id="phone" name="phone" required />
          <div className="invalid-feedback">
            Please enter a valid phone number with at least 12 digits.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="3"
          ></textarea>
        </div>
        <div className="d-flex justify-content-beetwen gap-2">
          <button type="submit" className="btn btn-primary">
            <i className="fas fa-envelope"></i> Submit
          </button>
          <button type="reset" className="btn btn-secondary">
            <i className="fas fa-undo"></i> Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;


