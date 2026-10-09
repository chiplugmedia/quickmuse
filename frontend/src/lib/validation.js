export function validateSignup(form) {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = "Full name is required";
  }

  if (!form.phone.trim()) {
    errors.phone = "Phone number is required";
  }

  if (!form.email.trim()) {
    errors.email = "Email address is required";
  }

  if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = "Invalid email address";
  }

  if (!form.password) {
    errors.password = "Password is required";
  }

  if (form.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  if (form.password !== form.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
}
