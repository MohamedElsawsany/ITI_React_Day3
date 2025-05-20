import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(form.email)
    ) {
      newErrors.email = "Invalid email format";
    }

    if (!form.username.trim()) {
      newErrors.username = "Username is required";
    } else if (/\s/.test(form.username)) {
      newErrors.username = "Username must not contain spaces";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        form.password
      )
    ) {
      newErrors.password =
        "Password must be at least 8 characters and include lowercase, uppercase, number, and special character.";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert(JSON.stringify(form, null, 2));
      navigate("/products"); // Redirect to products page
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4">Register</h2>
      <form onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            className={`form-control ${submitted && errors.name ? "is-invalid" : ""}`}
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          {submitted && errors.name && (
            <div className="invalid-feedback">{errors.name}</div>
          )}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            className={`form-control ${submitted && errors.email ? "is-invalid" : ""}`}
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {submitted && errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        {/* Username */}
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            className={`form-control ${submitted && errors.username ? "is-invalid" : ""}`}
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
          {submitted && errors.username && (
            <div className="invalid-feedback">{errors.username}</div>
          )}
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            className={`form-control ${submitted && errors.password ? "is-invalid" : ""}`}
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          {submitted && errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>

        {/* Confirm Password */}
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            className={`form-control ${submitted && errors.confirmPassword ? "is-invalid" : ""}`}
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
          />
          {submitted && errors.confirmPassword && (
            <div className="invalid-feedback">{errors.confirmPassword}</div>
          )}
        </div>

        <button className="btn btn-success w-100" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
