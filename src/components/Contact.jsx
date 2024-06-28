import { useState } from "react";

const Contact = () => {
  const initialFormData = {
    name: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [showDialog, setShowDialog] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setFormData(initialFormData);
    setEmail("");
    setPhone("");
    setIsEmailValid(true);
    setIsPhoneValid(true);
    setShowDialog(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Regex untuk validasi email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValid = emailPattern.test(email);
    setIsEmailValid(emailValid);

    // Validasi no_telp untuk minimal 12 digit
    const phoneValid = phone.length >= 12;
    setIsPhoneValid(phoneValid);

    // Jika validasi berhasil
    if (emailValid && phoneValid) {
      setShowDialog(true);
    }
  };

  return (
    <div className="container">
      <h1 className="mt-5">Contact</h1>
      <p>Menu ini digunakan untuk mengirimkan pesan kepada kami.</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${isEmailValid ? "" : "is-invalid"}`}
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="invalid-feedback">
            Please enter a valid email address.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className={`form-control ${isPhoneValid ? "" : "is-invalid"}`}
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
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
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="d-flex justify-content-beetwen gap-2">
          <button type="submit" className="btn btn-primary">
            <i className="fas fa-envelope"></i> Submit
          </button>
          <button
            type="reset"
            className="btn btn-secondary"
            onClick={handleClear}
          >
            <i className="fas fa-undo"></i> Reset
          </button>
        </div>
      </form>
      {showDialog && (
        <div className="alert alert-success mt-3" role="alert">
          <div className="table-responsive">
            <table className="table table-sm table-striped">
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>{formData.name}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{email}</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>{phone}</td>
                </tr>
                <tr>
                  <td>Message</td>
                  <td>{formData.message}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
